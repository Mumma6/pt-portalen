const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");

// @route  GET api/auth
// @desc   Test route
// @access Public 
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error")
  }
})

// @route  POST api/auth
// @desc   auth a user and get token
// @access Public
router.post(
  "/",
  [
    check("email", "Använd en giltigt e-postaddress").isEmail(),
    check(
      "password",
      "Ange ett lösenord"
    ).exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      // See if user exist
      let user = await User.findOne({ email: email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if(!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }


      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload, 
        config.get("jwtSecret"),
        {expiresIn: 340400},
        (err, token) => {
          if(err) throw(err);
          res.json({ token });
        });  // Change to 3600 before deply

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server error");
    }
  }
);

module.exports = router;