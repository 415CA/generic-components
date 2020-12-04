import React, { useState } from 'react'
import FullForm from '../FullForm'
import NewFrom from '../NewForm'

const App = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      App
      <FullForm username={username} setUsername={setUsername} />
      <NewFrom username={username} setUsername={setUsername} />
    </div>
  )
}

export default App
