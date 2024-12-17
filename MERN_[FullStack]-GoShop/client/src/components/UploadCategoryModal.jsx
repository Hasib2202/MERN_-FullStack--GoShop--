import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
const UploadCategoryModal = ({close}) => {
    const [data,setdata] = useState(
        {
            name: '',
            image: '',
        }
    )
    const handleOnChange = (e) => {
        const { name, value } = e.target

        setdata((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleUploadCategory = (e) => {
        const file = e.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.onload = (e) => {
                setdata((prev) => {
                    return {
                        ...prev,
                        image: e.target.result
                    }
                })
            }
            reader.readAsDataURL(file)
        }
    }
  return (
    <section className='top-0 bottom-0 left-0 right-0 flex items-center justify-center p-4 flexed bg-neutral-800 bg-opacity-60'>
        <div className='w-full max-w-4xl p-4 bg-white rounded-lg'>
            <div className='flex items-center justify-between'>
                <h1 className='font-semibold'>Category</h1>
            <button className='block ml-auto w-fit'>
                <IoClose size={25} onClick={close} />
            </button>
            </div>
            <form action="" className='grid gap-2 my-3' onSubmit={handleSubmit}>
                <div className='grid gap-1'>
                    <label id="categoryName">Name</label>
                    <input 
                        type="text"
                        id='categoryName'
                        placeholder='Enter category name'
                        value={data.name} 
                        name='name'
                        onChange={handleOnChange}   
                        className='p-2 border border-blue-100 rounded outline-none bg-blue-50 focus-within:border-primary-200'              
                    />
                </div>
                <div className='grid gap-1'>
                    <p>Image</p>
                    <div className='flex flex-col items-center gap-4 lg:flex-row'>
                        <div className='flex items-center justify-center w-full border rounded bg-blue-50 h-36 lg:w-36'>
                            <p className='text-sm text-neutral-500'>No Image</p>
                        </div>
                        <label htmlFor="uplodaCategoryImage">
                            <div disabled={!data.name} className={`
                            ${!data.name ? 'bg-gray-400 ' : 'bg-primary-200 '}
                            px-4 py-2 rounded cursor-pointer
                            `}>Upload Image</div>
                            <input 
                               type="file" 
                               name="" 
                               id="uplodaCategoryImage" 
                               className='hidden'
                               onChange={handleUploadCategory}
                            />
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </section>
  )
}

export default UploadCategoryModal
