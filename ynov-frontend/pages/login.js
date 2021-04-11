import { useState } from 'react';
import { useRouter } from 'next/router'
import Title from '../components/Title';
import Link from 'next/link';
import { useDispatch } from "react-redux";
import { auth_toggle } from "../actions/authentification";

function Login() {
    const dispatch = useDispatch()
    const [formState,setFormState] = useState({email:'',password:''});
    const [errorMessage,setErrorMessage]=useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formState.email || !formState.password){
            setErrorMessage('Fields email and password are required');
            return
        }
        const myBody = JSON.stringify(formState);
        const callOption = {"Content-type": "Application/json"}
        fetch("http://localhost:3030/api/v1/login",{method: "POST",headers:callOption ,body: myBody})
        .then(res=>res.json())
        .then(data => {
            if(!data.auth){
                setErrorMessage(data.message);
                return
            }
            else {
                let token = data.token;
                localStorage.setItem('token',token);
                dispatch(auth_toggle());
                router.push("/account");
            }
        })
        .catch(err=>{
            console.error(err);
            setErrorMessage(err.message);
        });
    };
    return(
        <div class="h-auto flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <Title t2="Login"/>
                <form class="mt-8 space-y-6" onSubmit={(e)=> handleSubmit(e)} method="POST">
                    <div class="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label for="email-address" class="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" onChange={e=>setFormState({...formState, email: e.target.value})} class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
                        </div>
                        <div>
                            <label for="password" class="sr-only">Password</label>
                            <input id="password" name="password" type="password" autocomplete="current-password" onChange={e=>setFormState({...formState, password: e.target.value})} class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
                        </div>
                    </div>
                    <div>
                        <span class="text-red-500">{errorMessage}</span>
                    </div>
                    <div class="flex">
                        <div class="w-32 m-8">
                        <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        Sign in
                        </button>
                        </div>
                        <div class="w-32 m-8">
                            <Link href="/register">
                                <button  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <svg class="h-5 w-5 text-gray-500 group-hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                        </svg>
                                    </span>
                                    Register
                                </button>
                            </Link>                 
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
  }
  
  export default Login