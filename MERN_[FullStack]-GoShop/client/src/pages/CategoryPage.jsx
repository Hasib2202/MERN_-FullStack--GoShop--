import React, { useEffect, useState } from 'react'
import UploadCategoryModal from '../components/UploadCategoryModal'
import Loading from '../components/Loading'
import NoData from '../components/NoData'
import Axios from '../utils/Axios'
import SummaryApi from '../common/SummaryApi'



const CategoryPage = () => {

    const [openUploadCategory, setOpenUploadCategory] = useState(false)
    const [loading,setLoading] = useState(false)
    const [categoryData,setCategoryData] = useState([])

    const fetchCategory = async()=>{
        try {
            setLoading(true)
            const response = await Axios({
                ...SummaryApi.getCategory
            })
            const { data : responseData } = response

            if(responseData.success){
                setCategoryData(responseData.data)
            }
        } catch (error) {
            
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchCategory()
    },[])
    
  return (
    <section>
        <div className='flex items-center justify-between p-2 bg-white shadow-md'>
            <h2 className='font-semibold'>Category</h2>
            <button onClick={()=> setOpenUploadCategory(true)} className='px-3 py-1 text-sm border rounded border-primary-200 hover:bg-primary-200'>Add Category</button>
        </div>
        {
            openUploadCategory && (
                <UploadCategoryModal close={()=>setOpenUploadCategory(false)} />
            ) 
        }

    </section>
  )
}

export default CategoryPage
