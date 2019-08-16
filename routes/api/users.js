const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/User.js");
const config = require("config");

// @route  POST api/users
// @desc   Reqister a user, route
// @access Public
router.post(
  "/",
  [
    check("name", "Ange ett namn")
      .not()
      .isEmpty(),
    check("email", "Använd en giltlig e-postadress").isEmail(),
    check(
      "password",
      "Lösenordet måste innehålla minst 6 karaktärer"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      // See if user exist
      let user = await User.findOne({ email: email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exits" }] });
      }

      // Create user object
      user = new User({
        name,
        email,
        password
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      // Save the user
      await user.save();

      // Return jsonwebtoken
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
