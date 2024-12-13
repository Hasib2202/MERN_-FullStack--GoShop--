import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common/SummaryApi";
import { logout } from "../store/userSlice";
import toast from "react-hot-toast";
import AxiosToastError from "../utils/AxiosToasterError";
import Divider from "./Divider";
import Axios from "../utils/Axios";
import { HiOutlineExternalLink } from "react-icons/hi";

const UserMenu = ({ close }) => {
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await Axios({
        ...SummaryApi.logout,
      });

      if (response.data.success) {
        if (close) {
          close();
        }
        dispatch(logout());
        localStorage.clear();
        toast.success(response.data.message);
        // window.history.back();
        navigate("/");
      }
    } catch (error) {
      AxiosToastError(error);
    }
  };

  return (
    <div>
      <div className="font-semibold">My Account</div>
      <div className="flex items-center gap-2 text-sm">
        <span className="max-w-52 text-ellipsis line-clamp-1">{user.name || user.mobile}</span>
        <Link to={"/dashboard/profile"}>
          <HiOutlineExternalLink size={15} className="hover:text-primary-200" />
        </Link>
      </div>

      <Divider />

      <div className="grid gap-1 text-sm">
        <Link to={"/dashboard/myorders"} className="px-2 py-1 hover:bg-orange-200">
          My Orders
        </Link>
        <Link to={"/dashboard/address"} className="px-2 py-1 hover:bg-orange-200">
          Save Address
        </Link>
        <button
          onClick={handleLogout}
          className="px-2 py-1 text-left hover:bg-orange-200"
        >
          Log out
        </button>
      </div>
    </div>
  );
};

export default UserMenu;
