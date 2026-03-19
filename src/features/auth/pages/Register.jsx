import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()

    axios.post('http://localhost:3000/api/auth/register',{
      username,
      email,
      password
    },{
      withCredentials:true
    })
    .then(res=>{
      console.log(res);
      
    })
    
  }
  return (
    <main>
    <div className='form-container'>
        <h1>Register</h1>
        <form onSubmit={handleSubmit} className='form' >
            <input onInput={(e)=>{setusername(e.target.value)}} 
            type="text" name="username" placeholder='Enter username' />
            <input onInput={(e)=>{setusername(e.target.value)}} 
             type="email" name='email' placeholder='Enter  email' />
            <input onInput={(e)=>{setusername(e.target.value)}} 
             type="text" name="password" placeholder='Enter password'/>
            <button>register</button>
        </form>

        <p>Already have an account? link <Link className='toggleAuthForm' to='/login'>login</Link></p>
    </div>
   </main>
  )
}

export default Register
