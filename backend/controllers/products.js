import Product from "../models/productModel.js"

export const getAllProducts = async (req, res) => {
    try {                                           // try catch -> untuk menghandle error
        const product = await Product.findAll()
        res.json(product)
    } catch (error) {
        res.json({ msg: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findAll({
            where: {
                id: req.params.id
            }
        })

        res.json(product[0])
    } catch (error) {
        res.json({ msg: error })
    }
}

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.json({
            "product": product,
            'message': 'Product created'
        })
    } catch (error) {
        res.json({ msg: error.message })
    }
}

export const updateProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.json({
            'message': 'product updated'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ 'message': 'Product deleted' })
    } catch (error) {
        res.json({ message: error.message })
    }
}