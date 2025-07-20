import React, { useState } from 'react'

const Login = () => {

  const [state, setState] = useState('Sign Up');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('');

  const onSubmitHandle = async (event) =>{
    event.preventDefault()
  }


  return (
   <form className='min-h-[80vh] flex item-center'>
    <div className='flex flex-col gap-3 m-auto item-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg'>
      <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account": "Login" }</p>
      <p>Please{state === 'Sign Up' ? "sign sp ": "Log in" }Please sign up to book appointment</p>
      {
        state === "Sign Up" && <div className='w-full'>
        <p >Full Name</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='text' onChange={(e)=>setname(e.target.name)} value={name}/>
      </div>
      }
      
      <div className='w-full'>
        <p>E-mail</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='email' onChange={(e)=>setEmail(e.target.email)} value={email}/>
      </div>
      <div className='w-full'>
        <p>Password</p>
        <input className='border border-zinc-300 rounded w-full p-2 mt-1' type='password' onChange={(e)=>setPassword(e.target.email)} value={password}/>
      </div>
      <button className='bg-primay text-white w-full py-2 rounded-md text-base '>{state === 'Sign Up' ? "Create Account": "Login" }</button>
       {
        state === "sign Up" ?
        <p>Already have an account? <span  onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
        : <p>Create an new account? <span onClick={()=>setState('Sign up')} className='text-primary underline cursor-pointer'>Click here</span></p>
       }
    </div>
     
   </form>
  )
}

export default Login