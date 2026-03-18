import React from 'react'

const Register = () => {
  return (
    <main>
    <div className='form-container'>
        <h1>Register</h1>
        <form  className='form'>
            <input type="text" name="username" placeholder='Enter username' />
            <input type="text" name="password" placeholder='Enter password'/>
            <button>register</button>
        </form>
    </div>
   </main>
  )
}

export default Register
