import React, { useEffect, useRef, useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToasterError";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const OtpVerification = () => {
  const [data, setData] = useState([
    "","","","","",""
]);

  const inputRef = useRef([]);
  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    if(!location?.state?.email){
        navigate("/forgot-password");
    }
  }, []);
  
  const valideValue = data.every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios({
        ...SummaryApi.forgot_password_otp_verification,
        data: {
            otp : data.join(""),
            email : location.state?.email
        }
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        setData(["","","","","",""]);
        navigate("/reset-password",{
            state : {
                data : response.data,
                email : location?.state?.email
            }
        });
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="container w-full px-2 mx-auto rounded-md">
      <div className="w-full max-w-lg mx-auto my-4 bg-white rounded p-7">
       
       <p className="text-lg font-semibold">Enter OTP</p>
       <form action="" className="grid gap-4 py-4" onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="otp">Enter Your OTP :</label>
            <div className="flex items-center justify-between gap-2 mt-3">
                {
                    data.map((element,index)=>{
                        return(
                            <input
                            key={"otp" + index}
                            type="text"
                            id="otp"
                            ref={(ref)=>{
                                inputRef.current[index] = ref;
                                return ref;   
                            }}
                            value={data[index]}
                            onChange={(e)=>{
                                const value = e.target.value;

                                const newData = [...data];
                                newData[index] = value;
                                setData(newData);

                                if(value && index < 5){
                                    inputRef.current[index + 1].focus();
                                }
                            }
                        }
                            maxLength={1}
                            className="w-full p-2 font-semibold text-center border rounded outline-none bg-blue-50 focus:border-primary-200 max-w-16"
                          />
                        )
                    })
                }
            </div>
          
          </div>

          <button
            disabled={!valideValue}
            className={` ${
              valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
            }    text-white py-2 rounded font-semibold my-3 tracking-wide`}
          >
            Verify OTP
          </button>
        </form>

        <p>
          Already have account?
          <Link
            to={"/login"}
            className="font-semibold text-green-700 hover:text-green-800"
          >
             Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default OtpVerification;
