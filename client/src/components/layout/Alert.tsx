import React from 'react'
import { connect } from "react-redux";

const Alert: React.SFC = (props: any) => {
  return (
    props.alerts !== null && props.alerts.length > 0 && props.alerts.map((alert: any) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        { alert.msg }
      </div>
    ))
  )
}

const mapStateToProps = (state: any) => ({
  alerts: state.alert
})

export default connect(mapStateToProps)(Alert);
