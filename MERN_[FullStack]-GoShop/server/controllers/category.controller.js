import CategoryModel from "../models/category.model.js"

export const AddCategoryController = async(request,response) => {

    try {
        const { name, image } = request.body

        if(!name || !image){
            return response.status(400).json({
                message : "All fields are required",
                success : false,
                error : true
            })
        }

        const addCategory = new CategoryModel({
            name,
            image
        })

        const saveCategory = await addCategory.save()

        if(!saveCategory){
            return response.status(500).json({
                message : "Category not added",
                success : false,
                error : true
            })
        }

        return response.json({
            message : "Category added successfully",
            success : true,
            error : false,
            data : saveCategory
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            success : false,
            error : true

        })
    }
}