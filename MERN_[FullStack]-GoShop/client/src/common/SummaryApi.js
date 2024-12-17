export const baseURL = "http://localhost:8080";


const SummaryApi = {
    register : {
        url : `/api/user/register`,
        method : 'post'
    },
    login : {
        url : `/api/user/login`,
        method : 'post'
    },
    forgot_Password : {
        url : `/api/user/forgot-password`,
        method : 'put'
    },
    forgot_password_otp_verification :{
        url : `/api/user/verify-forgot-password-otp`,
        method : 'put'
    },
    resetPassword : {
        url : `/api/user/reset-password`,
        method : 'put'
    },
    userDetails : {
        url : `/api/user/user-details`,
        method : 'get'
    },
    logout : {
        url : `/api/user/logout`,
        method : 'get'
    },
    uploadAvatar : {
        url : `/api/user/upload-avatar`,
        method : 'put'
    },
    updateUserDetails : {
        url : `/api/user/update-user`,
        method : 'put'
    },
    addCategory : {
        url : `/api/category/add-category`,
        method : 'post'
    },
}

export default SummaryApi;