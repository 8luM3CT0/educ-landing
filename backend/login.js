//front-end
//back-end
import {useState} from 'react'
import {supabase} from './supabase'

export default function LoginModal(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const [signUpTab, setSignUpTab] = useState(true)
    const [loginTab, setLoginTab] = useState(false)
   
    const handleSignUp = async e => {
        e.preventDefault()

        const {data, error} = await supabase.auth.signUp({email, password})
        if(error) alert(error.message)
        else alert('Check your email for a confirmation link')
    }

    const handleLogin = async e => {
        e.preventDefault()

        const {data, error}  = await supabase.auth.signInWithPassword({
            email,
            password
        })
        if(error) alert(error.message)
        else alert('Logged in')
    }

       return(
        <div className="h-full w-full flex flex-col items-start">
            <header className="top-0 h-[8%] w-full border-b-4 border-amber-500 flex items-center px-3 py-2">
                <h1 className="font-merriweather font-bold text-lg text-slate-100">
                    User login options
                </h1>
            </header>
            <div className="h-[92%] w-full flex flex-col items-center px-3 py-2">
                <div className="h-[10%] w-full flex items-center justify-between">
                    <button 
                    onClick={() =>{
                        setSignUpTab(true);
                        setLoginTab(false)
                    }}
                    className={`focus:outline-none h-[60px] w-[45%] rounded border-2 border-indigo-500 text-base text-indigo-500 px-3 py-2 font-merriweather font-semibold hover:bg-indigo-900 hover:border-slate-50 hover:text-slate-50 transform transition-all duration-300 ease-in-out ${signUpTab && 'bg-slate-50'}`}>
                        Sign up
                    </button>
                    <button onClick={() => {
                        setSignUpTab(false);
                        setLoginTab(true)
                    }} className={`focus:outline-none h-[60px] w-[45%] rounded border-2 border-indigo-500 text-base text-indigo-500 px-3 py-2 font-merriweather font-semibold hover:bg-indigo-900 hover:border-slate-50 hover:text-slate-50 transform transition-all duration-300 ease-in-out ${loginTab && 'bg-slate-50'}`}>
                        Log in
                    </button>
                </div>
               {signUpTab ? (
                 <div onSubmit={handleSignUp} className="h-[85%] w-full flex flex-col items-start px-3 py-2 space-y-3">
                    <h1 className="font-playfair-disp font-semibold text-sky-100 text-lg">
                        Email
                    </h1>
                    <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type="text" className='focus:outline-none w-[85%] h-[60px] mx-auto bg-slate-900 rounded border border-amber-500 px-3 py-2 text-base text-amber-500 placeholder-amber-700 font-merriweather font-semibold' />
                    <h1 className="font-playfair-disp font-semibold text-sky-100 text-lg">
                        Password
                    </h1>
                    <input placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type="password" className='focus:outline-none w-[85%] h-[60px] mx-auto bg-slate-900 rounded border border-amber-500 px-3 py-2 text-base text-amber-500 placeholder-amber-700 font-merriweather font-semibold' />
                <div className="w-full flex items-center justify-between px-3 py-2">
                    <span className="w-[50%]"></span>
                    <button type="submit" className="focus:outline-none h-[60px] w-[45%] rounded border-2 border-indigo-500 text-base text-indigo-500 px-3 py-2 font-merriweather font-semibold hover:border-indigo-300 hover:text-indigo-300 transform transition duration-300 ease-in-out">
                        Sign up
                    </button>
                </div>
                </div>
               ): loginTab &&(
                 <form onSubmit={handleLogin} className="h-[85%] w-full flex flex-col items-start px-3 py-2 space-y-3">
                    <h1 className="font-playfair-disp font-semibold text-sky-100 text-lg">
                        Email
                    </h1>
                    <input placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} type="text" className='focus:outline-none w-[85%] h-[60px] mx-auto bg-slate-900 rounded border border-amber-500 px-3 py-2 text-base text-amber-500 placeholder-amber-700 font-merriweather font-semibold' />
                    <h1 className="font-playfair-disp font-semibold text-sky-100 text-lg">
                        Password
                    </h1>
                    <input placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} type="password" className='focus:outline-none w-[85%] h-[60px] mx-auto bg-slate-900 rounded border border-amber-500 px-3 py-2 text-base text-amber-500 placeholder-amber-700 font-merriweather font-semibold' />
                <div className="w-full flex items-center justify-between px-3 py-2">
                    <span className="w-[50%]"></span>
                    <button type="submit" className="focus:outline-none h-[60px] w-[45%] rounded border-2 border-indigo-500 text-base text-indigo-500 px-3 py-2 font-merriweather font-semibold hover:border-indigo-300 hover:text-indigo-300 transform transition duration-300 ease-in-out">
                        Login
                    </button>
                </div>
                </form>
               )}
            </div>
        </div>
       )
}