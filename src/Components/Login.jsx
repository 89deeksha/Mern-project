import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login({ onClose }) {
  useEffect(() => {
    const modal = document.getElementById("my_modal_1");

    if (modal) {
      // Close listener
      modal.addEventListener('close', () => {
        if (onClose) onClose();
      });
    }

    return () => {
      if (modal) {
        modal.removeEventListener('close', onClose);
      }
    };
  }, [onClose]);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} >
          <h3 className="font-bold text-lg">Login</h3>

          <div className="mt-4">
            <span>Email</span>
            <br />
            <input {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="w-80 px-3 py-2 border rounded-md outline-none"
            />
            <br />
             {errors.email && <span className='text-red-500'>This field is required</span>}
          </div>

          <div className="mt-4">
            <span>Password</span>
            <br />
            <input {...register("password", { required: true })}
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-2 border rounded-md outline-none"
            />
            <br />
             {errors.password && <span className='text-red-500'>This field is required</span>}
          </div>

          <div className="flex justify-between mt-4">
            <button className="bg-pink-500 hover:bg-pink-600 px-2 py-1 border rounded-md">
              Login
            </button>
            <p>
              Not registered?{" "}
              <Link to="/signup" className="underline cursor-pointer text-blue-400">
                Signup
              </Link>
            </p>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* Button to close dialog and trigger onClose */}
              <button className="btn">Close</button>
            </form>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
