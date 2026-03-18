import React from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
   <main>
    <div className='form-container'>
        <h1>Login</h1>
        <form  className='form'>
            <input type="text" name="username" placeholder='Enter username' />
            <input type="text" name="password" placeholder='Enter password'/>
            <button>submit</button>
        </form>
        <p>Don't have an account? <Link className='toggleAuthForm' to="/register" >register</Link></p>
    </div>
   </main>
  )
}

export default Login
