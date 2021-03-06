import React from 'react';

const Passcode = props => (
  <form
    className="passcode-form"
    method="POST"
    action=""
    autoComplete="false"
    autoCapitalize="none"
    autoCorrect="off"
    spellCheck="false"
    role="presentation"
  >
    <label htmlFor="secure-font">Passcode</label>
    <input
      type="text"
      name="pass"
      onChange={props.handleChange}
      className={`secure-font ${props.error === true ? 'error' : ''}`}
      placeholder="Enter passcode"
      autoComplete="off"
      autoCapitalize="none"
      autoCorrect="off"
      spellCheck="false"
    />
    <button onClick={props.authenticate}>Authenticate</button>
  </form>
);

export default Passcode;
