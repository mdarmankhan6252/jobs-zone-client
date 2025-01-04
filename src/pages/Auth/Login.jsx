import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import { useState } from "react";
import { PiSpinnerGapThin } from "react-icons/pi";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";
const Login = () => {

    const navigate = useNavigate();
    const { signIn, user } = useAuth();
    const [loading, setLoading] = useState(false)

    if (user) {
        return <Navigate to='/'></Navigate>
    }

    const handleLogin = async e => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        await signIn(email, password)
            .then(result => {
                // console.log(result);
                toast.success("You have logged in successfully!")
                setLoading(false)
                navigate('/')
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message)
                setLoading(false)
            })

    }

    return (
        <div className="flex items-center justify-center w-full h-screen px-3">
            <form onSubmit={handleLogin} className="w-[400px] border px-6 py-12 space-y-5 shadow-[0px_0px_10px_0px] shadow-gray-300 rounded-xl bg-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-center pb-4">Log In</h2>
                <div>
                    <p className="text-sm pb-1">Email address : </p>
                    <input type="email" name="email" placeholder="Email" required className="border p-2 text-[15px]  text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg" />
                </div>
                <div>
                    <p className="text-sm pb-1">Password : </p>
                    <input type="password" name="password" placeholder="********" required className="border p-2 text-[15px]  text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg" />
                </div>

                <div>
                    <button type="submit" className="p-2.5 text-[15px] font-semibold cursor-pointer hover:bg-purple-700 active:scale-[0.99] w-full bg-purple-600 text-white duration-200 rounded-lg">
                        {
                            loading ? <PiSpinnerGapThin className="text-2xl mx-auto animate-spin " /> : <span>Login</span>
                        }
                    </button>
                    <Link to='/login' className="text-sm hover:underline hover:text-purple-500">Forgot password ?</Link>
                </div>
                <hr />
                <GoogleLogin />
                <p className="text-center">New here ? <Link to='/register' className=" font-semibold hover:underline">Register</Link></p>

            </form>
        </div>
    );
};

export default Login;