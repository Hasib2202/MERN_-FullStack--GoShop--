import React, { useState } from "react";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  return (
    <section className="container w-full px-2 mx-auto rounded-md">
      <div className="w-full max-w-lg mx-auto my-4 bg-white rounded p-7">
        <p>Welcome to GoShop</p>

        <form action="" className="grid gap-4 mt-6 ">
          <div className="grid gap-2">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              id="name"
              autoFocus
              className="p-2 rounded-md bg-blue-50"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              className="p-2 rounded-md bg-blue-50"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-1">
            <label htmlFor="password">Password :</label>
            <div>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="p-2 rounded-md bg-blue-50"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div
              onClick={() => setShowPassword((preve) => !preve)}
              className="cursor-pointer"
            >
              {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline/>}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
