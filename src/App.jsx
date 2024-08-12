import React from 'react'
import { generate } from './Components/password'
import { useState } from 'react'
import savePassword from './Components/savePassword'

function App() {
  let [password, setPassword] = useState('')
  let [isSaving, setIsSaving] = useState(false)

  function showPassword() {
    setIsSaving(false);
    let storePassword = generate()
    setPassword(storePassword);
  }
  return (
    <div>
      <savePassword password={password} isSaving={isSaving} />
      <div>
        <h1>{generate()}</h1>
        <button onClick={showPassword}>Generate Password</button>
        <button onClick={() => setIsSaving(true)}>Save Password</button>
      </div>
    </div>
  )
}

export default App
