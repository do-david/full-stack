import React, {useState, useEffect} from "react";
import jwt from "jsonwebtoken";
import axios from "axios";

function Account() {
  const token =  localStorage.getItem('token');
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ user,setUser ] = useState({});
  if(token){
    const jwtDecoded = jwt.verify(token,'supersecret');
    const adminId = jwtDecoded.id;
    const callOptionConfig = {"Content-type": "Application/json",
    headers: {
      'authorization': token
    }}
    const getUser = async () => {
      await axios.get(`http://localhost:3030/api/v1/user/${adminId}`,callOptionConfig)
      .then(data=>{
        setUser(data.data);
      })
      .catch(err=>{
        console.error(err);
        setErrorMessage(err.message);
      });
    };
    useEffect(() => {
        console.log("try get user connected");
        getUser();
    }, [])

  }
    return (
      <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="lg:text-center">
            <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Welcome to your account {user.firstName}</h2>
            <p class="mt-4 max-w-2xl text-xl text-red-500 lg:mx-auto">{errorMessage}</p>
            <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              My information
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              name : {user.firstName} {user.lastName}
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              email : {user.email}
            </p>
            <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              age : {user.age}
            </p>
          </div>
          <div class="mt-10">
            <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">My last orders</p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>

              <div class="relative">
                <dt>
                  <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <p class="ml-16 text-lg leading-6 font-medium text-gray-900">My comments </p>
                </dt>
                <dd class="mt-2 ml-16 text-base text-gray-500">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    )
  }
  
  export default Account