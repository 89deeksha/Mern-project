import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div>
        <div id="my_modal_1" className="flex items-center h-screen justify-center">
          <div className="border-[2px] shadow-md p-6 rounded-md">
            <h3 className="font-bold text-lg ">Signup</h3>

            <form>
            <div className='mt-4'>
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder='Enter your name'
                  className='w-80 px-3 py-2 border rounded-md outline-none'
                  autoComplete="email"
                />
              </div>
              <div className='mt-4'>
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder='Enter your email'
                  className='w-80 px-3 py-2 border rounded-md outline-none'
                  autoComplete="email"
                />
              </div>
              <div className='mt-4'>
                <span>Password</span>
                <br />
                <input
                  type="password"
                  autoComplete="current-password"
                  placeholder='Enter your password'
                  className='w-80 px-3 py-2 border rounded-md outline-none'
                />
              </div>

              <div className='flex justify-between mt-4 items-center'>
                <button
                  type="submit"
                  className='bg-pink-500 hover:bg-pink-600 px-2 py-1 border rounded-md'
                >
                  Signup
                </button>
                <p>
                  Have account?{" "}
                  <Link to='/' className='underline cursor-pointer text-blue-400'>
                    Login
                  </Link>
                </p>
              </div>
            </form>

            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
