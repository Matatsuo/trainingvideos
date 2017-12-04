import React from 'react';

const Passcode = props => (
  <form className="passcodeForm" action="">
    <label>Passcode:</label>
    <input
      type="password"
      name="passcode"
      onChange={props.handleChange}
      className={props.error === true ? 'error' : ''}
      placeholder="Enter passcode"
    />
    <button onClick={props.authenticate}>Authenticate</button>
  </form>
);

export default Passcode;
