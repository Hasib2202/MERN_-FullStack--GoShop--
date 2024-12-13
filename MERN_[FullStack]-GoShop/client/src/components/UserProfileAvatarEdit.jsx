import React, { useState } from "react";
import { TbUserSquareRounded } from "react-icons/tb";
import { useSelector } from "react-redux";

const UserProfileAvatarEdit = () => {
  const user = useSelector((state) => state?.user);
  const [loading,setLoading] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle avatar upload
  };
  return (
    <section className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center p-4 bg-neutral-900 bg-opacity-60">
      <div className="flex flex-col items-center justify-center w-full max-w-sm p-4 bg-white rounded">
        <div className="flex items-center justify-center w-20 h-20 overflow-hidden bg-red-500 rounded-full drop-shadow-sm">
          {user.avatar ? (
            <img alt={user.name} src={user.avatar} className="w-full h-full" />
          ) : (
            <TbUserSquareRounded size={65} />
          )}
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="uploadProfile">
            <div className="px-4 py-1 my-3 text-sm border rounded border-primary-100 hover:bg-primary-200">
              {
                loading ? "Loading..." : "Upload"
              }
            </div>
            <input
                type="file"
                id="uploadProfile"
                className="hidden"
            />
          </label>
        </form>
      </div>
    </section>
  );
};

export default UserProfileAvatarEdit;
