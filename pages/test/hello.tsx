import type { NextPage } from 'next'
import { FormEvent, useState } from 'react'

function test2(): String {
  return String(process.env.a);
}

const Home: NextPage = () => {
  const [name, setName] = useState('')
  const registerUser = async (event: any) => {
    event.preventDefault()

    const res = await fetch(
      '/api/hello?name='+event.target.name.value,
      {
        method: 'GET'
      }
    )

    const result = await res.json()
    console.log(result.name)
    setName(result.name)
    // result.user => 'Ada Lovelace'
  }

  return (
    <>
      <p>{ name }</p>
      <form onSubmit={registerUser}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required/>
        <button type="submit" >Register</button>
      </form>
    </>
  )
}

export default Home
