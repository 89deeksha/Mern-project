import React, { useState } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useForm } from "react-hook-form";

function Signup() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
      setIsLoginOpen(true);
    }
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };
const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const userInfo={
      Fullname:data.Fullname,

      Email:data.Email,

      password:data.password
    }
    await axios.post('http://localhost:3000/users/Signup',userInfo)//Api call
    .then(res=>{
      console.log(res.data)
      if(res.data){
        alert("Signup successfull")
      }
      //to store data in local store
      localStorage.setItem("users",JSON.stringify(res.data))
    }
  )
  .catch(err=>{
    console.log(err)
    alert("Error",err)
  })
    // console.log(data)
  }
  return (
    <div className="flex items-center h-screen justify-center">
      {/* Hide Signup box when Login modal is open */}
      {!isLoginOpen && (
        <div className="border-[2px] shadow-md p-6 rounded-md">
          <h3 className="font-bold text-lg">Signup</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4">
              <label htmlFor="name">Name</label>
              <br />
              <input
              {...register("Fullname", { required: true })}
                id="name"
                type="name"
                placeholder="Enter your name"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                autoComplete="name"
              />
              <br />
              {errors.Fullname && <span className='text-red-500'>This field is required</span>}
            </div>

            <div className="mt-4">
              <label htmlFor="email">Email</label>
              <br />
              <input
              {...register("Email", { required: true })}
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                autoComplete="email"
              />
              <br />
              {errors.email && <span className='text-red-500'>This field is required</span>}
            </div>

            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <br />
              <input
              {...register("password", { required: true })}
                id="password"
                type="password"
                autoComplete="new-password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
              />
              <br />
              {errors.password && <span className='text-red-500'>This field is required</span>}
            </div>

            <div className="flex justify-between mt-4 items-center">
              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 px-4 py-2 text-white rounded-md"
              >
                Signup
              </button>
              <p>
                Have an account?{" "}
                <span
                  onClick={openLoginModal}
                  className="underline text-blue-400 cursor-pointer"
                >
                  Login
                </span>
              </p>
            </div>
          </form>

          <div className="modal-action mt-4 text-right">
            <Link to='/'><button className="btn">Close</button></Link>
          </div>
        </div>
      )}

      {/* Always render Login (inside modal), but notify Signup when it's closed */}
      <Login onClose={handleLoginClose} />
    </div>
  );
}

export default Signup;
