import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <main>
    <div className='form-container'>
        <h1>Register</h1>
        <form  className='form'>
            <input type="text" name="username" placeholder='Enter username' />
            <input type="email" name='email' placeholder='Enter  email' />
            <input type="text" name="password" placeholder='Enter password'/>
            <button>register</button>
        </form>

        <p>Already have an account? link <Link to='/login'>login</Link></p>
    </div>
   </main>
  )
}

export default Register
