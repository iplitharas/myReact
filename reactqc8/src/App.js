
import { useState } from 'react';
const FOCUS_NONE = 0;
const FOCUS_USER = 1;
const FOCUS_REQUEST = 2;
function getStyle(isActive) {
  return {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: isActive ? 'oldlace' : 'transparent',
  };
}
function Contact() {
  const [focus, setFocus] = useState(FOCUS_NONE);
  const onUserFocus = () => setFocus(FOCUS_USER);
  const onRequestFocus = () => setFocus(FOCUS_REQUEST);
  const onBlur = () => setFocus(FOCUS_NONE);
  return (
    <form onBlur={onBlur}>
      <h1>Contact</h1>
      <fieldset
        onFocus={onUserFocus}
        style={getStyle(focus === FOCUS_USER)}
      >
        <legend>User</legend>
        <label>Name:<br/><input /></label>
        <label>Email:<br/><input type="email" /></label>
      </fieldset>
      <fieldset
        onFocus={onRequestFocus}
        style={getStyle(focus === FOCUS_REQUEST)}
      >
        <legend>Request</legend>
        <label>Subject:<br/><input /></label>
        <label>Body:<br/><textarea /></label>
      </fieldset>
    </form>
  );
}

function Admin() {
  const [password, setPassword] = useState('');
  const [isAdmin, setAdmin] = useState(false);
  const onClick = () => {
    if (password === 'platypus') {
      setAdmin(true);
    }
  };
  return isAdmin ? (
    <h1>Bacon is delicious!</h1>
  ) : (
    <form>
      <input type="password" onChange={evt => setPassword(evt.target.value)} />
      <button onClick={onClick}>Login</button>
    </form>
  );
}

function App() {
  return (
   <div>
     <h1> Chapter 8 - Events in React</h1>
     {/*<Contact/>*/}
       <Admin/>
   </div>
  );
}

export default App;
