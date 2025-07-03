import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
        <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Login</h3>
   <div className='mt-4'>
    <span>Email</span>
    <br />
    <input type="email"placeholder='Enter your email'className='w-80 px-3 py-2 border rounded-md outline-none' />
   </div>
   <div className='mt-4'>
    <span>Password</span>
    <br />
    <input type="password"placeholder='Enter your email'className='w-80 px-3 py-2 border rounded-md outline-none' />
   </div>
   <div className='flex justify-between mt-4'>
    <button className='bg-pink-500 hover:bg-pink-600 px-2 py-1 border rounded-md'>Login</button>
    <p>Not registered?{" "} <Link to='/signup' className='underline cursor-pointer text-blue-400'>Signup</Link></p>
    
   </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

    </div>
  )
}

export default Login