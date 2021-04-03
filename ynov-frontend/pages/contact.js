import { useState } from 'react';

function Contact() {
    const [formState,setFormState] = useState({first_name:'',last_name:'',email_address:'',subject:''});
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!formState.email_address || !formState.subject){
            setErrorMessage('Fields email and subject are required')
            return
        }
        const myBody = JSON.stringify(formState)
       fetch('/api/send-email',{method: "POST",headers: {"Content-type": "Application/json"},body: myBody})
       .then(res => res.json())
       .then(data=> {
           console.log(data);
           setSuccessMessage(data.message);
       })
       .catch((err)=> console.log(err));
    }
    return (
        <div class="mt-10 sm:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-6">
                <div class="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={(e)=> handleSubmit(e)} method="POST">
                    <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="first_name" class="block text-sm font-medium text-gray-700">First name</label>
                                <input type="text" name="first_name" id="first_name" autocomplete="given-name" onChange={e=>setFormState({...formState, first_name: e.target.value})} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <label for="last_name" class="block text-sm font-medium text-gray-700">Last name</label>
                                <input type="text" name="last_name" id="last_name" autocomplete="family-name" onChange={e=>setFormState({...formState, last_name: e.target.value})} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div class="col-span-6 sm:col-span-6">
                                <label for="email_address" class="block text-sm font-medium text-gray-700">Email address*</label>
                                <input type="text" name="email_address" id="email_address" autocomplete="email" onChange={e=>setFormState({...formState, email_address: e.target.value})} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div class="col-span-6 sm:col-span-6 lg:col-span-6">
                                <label for="country" class="block text-sm font-medium text-gray-700">Message*</label>
                                <textarea type="text" name="subject" id="subject" onChange={e=>setFormState({...formState, subject: e.target.value})} class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                            </div>
                            <div class="col-span-6 sm:col-span-3">
                                <span class="text-red-600">{errorMessage}</span>
                                <span class="text-green-600">{successMessage}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" class="group relative py-2 px-12 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                                <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        Send
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
  }
  
  export default Contact