import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
    const {signIn , signInGoogle} = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    console.log(location);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from ,{replace:true});
        })
        .catch(error =>{
            console.error(error);
        });
  };

  const handleGoogle =()=>{
    signInGoogle()
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from ,{replace:true});
    })
    .catch(error =>{
        console.error(error);
    });
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="relative">
          <div className="  absolute rounded-full top-72 left-4 w-72 h-72 bg-purple-400 filter blur-xl mix-blend-multiply opacity-75 animate-blob"></div>

          <div className=" absolute rounded-full top-72 -right-4 w-72 h-72 bg-pink-300 filter blur-xl mix-blend-multiply opacity-75 animate-blob animation-delay-2s"></div>

          <div className=" absolute rounded-full top-20 -right-24 w-72 h-72 bg-green-300 filter blur-xl  mix-blend-multiply opacity-75 animate-blob animation-delay-4s"></div>
        </div>
      </div>

      <div className="w-[25%] mt-40  relative shadow-2xl rounded-md p-7  mx-auto">
        <form onSubmit={handleLogin}>
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-6">
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="text-white ml-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              Login
            </button>

            <p>
              New to Here <Link to="/resister">Resister</Link>{" "}
            </p>
          </div>

          <div className="text-center">
            <button
            onClick={handleGoogle}
              type="submit"
              className="text-white ml-auto bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
            >
              Google
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
