import axios from "axios";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const EmailVerify = () => {

	const navigate = useNavigate();

	const {backendUrl, token, getUserData} = useContext(AppContext);
	
	const [otp, setOtp ] = useState("");

	const onSubmitHandler = async(e)=>{
		try {
			e.preventDefault();

			const { data } = await axios.post(backendUrl + "/api/auth/verify-email", {otp}, {headers : { token }})
			if(data.success) {
				toast.success(data.message);
				getUserData();
				navigate("/")
			}else {
				toast.error(data.message);
			}
		} catch (error) {
			toast.error(error.message);
		}
	}

  return (
    <div className="w-full mt-40 flex items-center justify-center">
      <form className="email-verify-card px-12 py-5 text-white bg-slate-800 rounded flex flex-col items-center justify-center" onSubmit={onSubmitHandler}>
        <h1 className="text-xl font-medium">Email Veirfy Page</h1>
        <p className="text-sm text-blue-700 mb-5">Enter the 6-digit OTP sent to your Email</p>
        <div className="input-fields mb-5 w-full">
          <input className="w-full h-12 rounded text-white text-xl bg-[#333A5C] text-center" type="text" name="otp" id="otp" maxLength="6" value={otp} onChange={(e)=>setOtp(e.target.value)} />
        </div>
		<button className="w-full bg-gradient-to-r from-indigo-500 rounded to-indigo-900 text-sm text-white py-3">Verify Email</button>
      </form>
    </div>
  );
};

export default EmailVerify;
