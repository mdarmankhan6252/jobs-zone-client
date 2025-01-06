import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";
import { useState } from "react";
import { PiSpinnerGapThin } from "react-icons/pi";
import axios from 'axios'
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {

    const [loading, setLoading] = useState(false)
    const axiosPublic = useAxiosPublic();

    const { createUser, updateUserProfile, user, setUser } = useAuth()
    const navigate = useNavigate();

    if (user) {
        return <Navigate to='/'></Navigate>
    }

    const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`



    const handleRegister = async e => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const name = form.name.value;
        const currentPhoto = form.photo.files[0];
        const email = form.email.value;
        const password = form.password.value;
        if (!currentPhoto) {
            return toast.error('Please upload a photo!')
        }
        const formData = new FormData();
        formData.append("image", currentPhoto);

        const res = await axios.post(imageUpload, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        console.log(res.data);

        const photo = res.data.data.display_url;
        console.log(photo);
        if (res.data.success) {
            await createUser(email, password)
                .then(() => {
                    updateUserProfile(name, photo)
                    setUser({ ...user, displayName: name, photoURL: photo })

                    const postedUser = { name, photo, email, role: 'general' }

                    axiosPublic.post('/user', postedUser).then(res => {
                        if (res.insertedId) {
                            toast.success("Sign Up Successful!")
                            navigate('/')
                        }
                    })
                })
                .catch(err => {
                    console.log(err);
                    toast.error(err.message || 'Something went wrong!')
                    setLoading(false)
                })
        }
    }


    return (
        <div className="flex items-center justify-center w-full h-screen px-3">
            <form onSubmit={handleRegister} className="w-[400px] border px-6 py-12 space-y-5 shadow-[0px_0px_10px_0px] shadow-gray-300 rounded-xl bg-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-center pb-4">Create Your Account</h2>
                <div>
                    <p className="text-sm pb-1">Your Name : </p>
                    <input type="name" name="name" placeholder="Your Name" required className="border p-2 text-[15px] text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg" />

                </div>
                <div>
                    <p className="text-sm pb-1">Your photo : </p>
                    <input type="file" name="photo" required className="border p-2 text-[15px]  text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg" />
                </div>
                <div>
                    <p className="text-sm pb-1">Email address : </p>
                    <input type="email" name="email" placeholder="Email" required className="border p-2 text-[15px] text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg" />

                </div>

                <div>
                    <p className="text-sm pb-1">Password : </p>
                    <input type="password" name="password" placeholder="******" required className="border p-2 text-[15px] text-gray-600 w-full outline-purple-400 bg-gray-200 rounded-lg placeholder:text-lg" />
                </div>

                <button type="submit" className="p-2.5 text-[15px] cursor-pointer hover:bg-purple-700 active:scale-[0.99] w-full bg-purple-600 text-white duration-200 rounded-lg">
                    {
                        loading ? <PiSpinnerGapThin className="text-2xl mx-auto animate-spin " /> : <span>Register</span>
                    }
                </button>
                <hr />
                <GoogleLogin />
                <p className="text-center text-sm">Already Have an Account ? <Link to='/login' className=" font-semibold hover:underline">Login</Link></p>

            </form>
        </div>
    );
};

export default Register;