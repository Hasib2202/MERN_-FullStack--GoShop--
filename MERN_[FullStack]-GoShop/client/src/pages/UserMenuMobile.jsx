import React from "react";
import UserMenu from "../components/UserMenu";
import { IoClose } from "react-icons/io5";

const UserMenuMobile = () => {
  return (
    <section className="w-full h-full py-2 bg-white">
      <button onClick={()=>window.history.back()} className="block ml-auto text-neutral-800 w-fit">
        <IoClose size={25}/>
      </button>
      <div className="container px-3 pb-8 mx-auto">
        <UserMenu />
      </div>
    </section>
  );
};

export default UserMenuMobile;
