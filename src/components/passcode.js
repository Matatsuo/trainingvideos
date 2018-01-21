import React from 'react';

const Passcode = props => (
  <div className="container-passcode">
    <label htmlFor="passcode">Passcode</label>
    <input
      type="text"
      name="pass"
      onChange={props.handleChange}
      className={`passcode ${props.error === true ? 'error' : ''}`}
      placeholder="Enter passcode"
      autoComplete="off"
      autoCapitalize="none"
      autoCorrect="off"
      spellCheck="false"
    />
    <button onClick={props.authenticate}>Authenticate</button>
  </div>
);

export default Passcode;
