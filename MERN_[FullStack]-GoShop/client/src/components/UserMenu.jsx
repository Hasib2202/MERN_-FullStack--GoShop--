import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SummaryApi from '../common/SummaryApi';
import { logout } from '../store/userSlice';
import toast from 'react-hot-toast';
import AxiosToastError from '../utils/AxiosToasterError';
import Divider from './Divider';
import Axios from '../utils/Axios'
const UserMenu = ({close}) => {

    const user = useSelector((state)=> state?.user);
    const dispatch = useDispatch();
    
    const handleLogout = async() => {
        try {
            const response = await Axios({
                ...SummaryApi.logout
            })

            if(response.data.success){
                close();
                dispatch(logout());
                localStorage.clear();
                toast.success(response.data.message);
            }
        } catch (error) {
            AxiosToastError(error);
        }
    } 

  return (
    <div>
        <div className='font-semibold'>
            My Account
        </div>
        <div className='text-sm'>
            {user.name || user.mobile}
        </div>
        
        <Divider/>
        
        <div className='grid gap-1 text-sm'>
            <Link to={""} className='px-2 py-1 hover:bg-orange-200'>My Orders</Link>
            <Link to={""} className='px-2 py-1 hover:bg-orange-200'>Save Address</Link>
            <button onClick={handleLogout} className='px-2 py-1 text-left hover:bg-orange-200'>Log out</button>
        </div>
    </div>
  )
}

export default UserMenu
