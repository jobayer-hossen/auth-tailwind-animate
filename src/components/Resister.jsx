import React, { Children, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Resister = () => {

    const {createUser } = useContext(AuthContext);

    const handleResister =(event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        createUser(email,password)

        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error =>{
            console.error(error);
        });
        
    }

    

    return (
        <>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="  absolute rounded-full top-72 left-4 w-72 h-72 bg-lime-500 filter blur-2xl mix-blend-multiply opacity-75 animate-blob"></div>


          <div className=" absolute rounded-full top-72 -right-4 w-72 h-72 bg-pink-500 filter blur-2xl mix-blend-multiply opacity-75 animate-blob animation-delay-2s"></div>

          <div className=" absolute rounded-full top-20 -right-4 w-72 h-72 bg-violet-500 filter blur-2xl  mix-blend-multiply opacity-75 animate-blob animation-delay-4s"></div>

          <div className="  absolute rounded-full top-20 -left-4 w-72 h-72 bg-amber-500 filter blur-2xl mix-blend-multiply opacity-75 animate-blob animation-delay-6s"></div>

        </div>
      </div>
      <div className="w-[25%] relative shadow-xl rounded-md p-7  mx-auto mt-20">
        <form onSubmit={handleResister} >
        <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              name='name'
              id="text"
              className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name='email'
              id="email"
              className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name='password'
              id="password"
              className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repeat password
            </label>
            <input
              type="password"
              id="repeat-password"
              className="shadow-sm  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="terms"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
            </label>
          </div>
          <div className="text-center">
          <button
            type="submit"
            className="text-white ml-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
          >
            Register new account
          </button>
          <p>Old Here <Link to='/login' >Login</Link> </p>
          </div>
        </form>
      </div>
    </>
    );
};

export default Resister;