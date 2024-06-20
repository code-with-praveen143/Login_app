'use client'
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from "react"


export default function Login(){
   
        const router = useRouter();
        const [formData, setfromData] = useState(
            {
                email: '',
                password: ''
            }
        )
        const handleChange = (e:any) => {
            const {name, value} = e.target 
            setfromData({
                ...formData, 
                [name] : value
            })
        }
        
        const formSubmit = async (e:any) => {
            e.preventDefault()
            console.log(formData)
            const res =  await fetch('api/login',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log(res)
        }

        const handleLogin = () => {
            console.log("user Loggedin..")
            router.push('/')
        }
        

    return(
        <div className="font-sans flex flex-col h-screen bg-gray-100">
            <div className="flex justify-center items-center h-full">
                <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-center text-stone-900 mb-8">Welcome Back!</h1>
                    <form className="space-y-4" onSubmit={formSubmit}>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="text-sm font-medium mb-2 text-stone-600">Email Address</label>
                        <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" className=" shadow-sm p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 border-2 text-black border-stone-500" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="password" className="text-sm font-medium mb-2 text-stone-600">Password</label>
                        <input value={formData.password} onChange={handleChange} name="password" type="password" id="password" className="border-2 border-stone-500 shadow-sm p-3 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-black" required />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input type="checkbox" id="remember" className="w-4 h-4 mr-2" /> 
                            <label htmlFor="remember" className="text-sm text-gray-700">Remember Me</label>
                        </div>
                        <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
                    </div>
                    <div>
            < button onClick={handleLogin} type="submit" className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 shadow-sm">Login</button>
        </div>
                </form>
                    <p className="text-center mt-4 text-sm text-gray-500">Don't have an account? <Link href="/register" className="text-indigo-600 hover:underline">Sign Up</Link></p>
                </div>
            </div>
        </div>
    )
}