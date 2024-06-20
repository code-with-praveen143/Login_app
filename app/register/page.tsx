'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Register(){
  const router = useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password }),
    });
    
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      console.error('Registration failed:', await response.text());
    } else {
      console.log('Registration successful!');
    }
  };

  const handleRegister = () => {
      console.log("user Registered..")
      router.push('/')
  }
    return(
      <div className="font-sans flex flex-col h-screen bg-gray-100">
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold text-center mb-8 text-cyan-400">Create Your Account</h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium mb-2  text-stone-600">Email Address</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className=" shadow-sm p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 border-2 border-stone-400 text-black" required />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium mb-2  text-stone-600">Password</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  className=" shadow-sm p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 border-2 text-black border-stone-400" required />
              </div>
              <div  className="flex flex-col">
                <label htmlFor="confirm-password" className="text-sm font-medium mb-2  text-stone-600">Confirm Password</label>
                <input type="password" id="confirm-password" className=" shadow-sm p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 border-2 border-stone-400 text-black" required />
               </div>
               <div className="flex items-center">
                   <input type="checkbox" id="terms" className="w-4 h-4 mr-2" />
                 <label htmlFor="terms" className="text-sm text-gray-700">I agree to the Terms of Service</label>
               </div>
               <div>
                   < button onClick={handleRegister} type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 shadow-sm">Register</button>
               </div>
             </form>
             <p className="text-center mt-4 text-sm text-gray-500">Already have an account? <Link href="/login" className="text-indigo-600 hover:underline">Login</Link></p>
           </div>
         </div>
       </div>
    )
 }