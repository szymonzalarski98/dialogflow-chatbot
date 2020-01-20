import React from 'react';

const Info: React.SFC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
      <h1>Simple chat-bot made with Dialogflow & JS</h1>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>TypeScript</li>
        <li>Axios</li>
        <li>Netlify</li>
        <li>DialogFlow</li>
      </ul>
    </div>
  )
}

export default Info;