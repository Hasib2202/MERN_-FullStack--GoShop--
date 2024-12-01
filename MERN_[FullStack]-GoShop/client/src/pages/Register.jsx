import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToasterError";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  const valideValue = Object.values(data).every((el) => el);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("Password and Confirm Password should be same");
      return;
    }

    try {
      const response = await Axios({
        ...SummaryApi.register,
        data: data,
      });

      if (response.data.error) {
        toast.error(response.data.message);
      }

      if (response.data.success) {
        toast.success(response.data.message);
        setData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/login");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <section className="container w-full px-2 mx-auto rounded-md">
      <div className="w-full max-w-lg mx-auto my-4 bg-white rounded p-7">
        <p>Welcome to GoShop</p>

        <form action="" className="grid gap-4 mt-6 " onSubmit={handleSubmit}>
          <div className="grid gap-1">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              autoFocus
              className="p-2 border rounded outline-none bg-blue-50 focus:border-primary-200"
              name="name"
              value={data.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              className="p-2 border rounded outline-none bg-blue-50 focus:border-primary-200"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="password">Password :</label>
            <div className="flex items-center p-2 border rounded bg-blue-50 focus-within:border-primary-200">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full outline-none "
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />
              <div
                onClick={() => setShowPassword((preve) => !preve)}
                className="cursor-pointer"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </div>
            </div>
          </div>

          <div className="grid gap-1">
            <label htmlFor="confirmPassword">Confirm Password :</label>
            <div className="flex items-center p-2 border rounded bg-blue-50 focus-within:border-primary-200">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                className="w-full outline-none"
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Enter your confirm password"
              />
              <div
                onClick={() => setShowConfirmPassword((preve) => !preve)}
                className="cursor-pointer"
              >
                {showConfirmPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </div>
            </div>
          </div>

          <button
            disabled={!valideValue}
            className={` ${
              valideValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
            }    text-white py-2 rounded font-semibold my-3 tracking-wide`}
          >
            Register
          </button>
        </form>

        <p>
          Already have account ?
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

export default Register;
