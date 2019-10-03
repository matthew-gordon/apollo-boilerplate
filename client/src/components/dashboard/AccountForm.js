import React, { useState } from 'react'

export default function AccountForm({ register }) {
  const [email, setEmail] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await updateUser({ variables: { email, password } })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form style={styles.border} onSubmit={handleSubmit}>
      <label>Email</label>
      <input
        name="email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <button type="submit">update</button>
    </form>
  )
}

const styles = {
  border: 'solid 1px #000',
}