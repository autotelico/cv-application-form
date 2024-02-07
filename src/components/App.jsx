import { useState } from "react";
import { Form } from "./Form";
import "../styles/App.css";

function App() {
  const [sendStatus, setSendStatus] = useState('not sent');
  const [message, setMessage] = useState('')

  function displayThankYouMsg() {
    setMessage('Sending. Wait 5 seconds...')
    sendStatus === 'not sent' && setTimeout(() => {
      setSendStatus('sent')
      setMessage('Application sent! Thank you ✨')
    }, 5000);
    
  }
  return (
    <>
      <h2>{message}</h2>
      <Form handleSend={displayThankYouMsg} />
    </>
  );
}

export default App;
