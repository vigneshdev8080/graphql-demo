let products = [
    {
        id: 1,
        description: "Red Shoe",
        price: "300.00",
        reviews: []
    }, {
        id: 2,
        description: "Blue Shoe",
        price: "150.00",
        reviews: []
    }
]

const getAllProducts = () => {
    return products
}

const getProductsByPrice = (min, max) => {
    return products.filter(val => {
        return val.price >= min && val.price <= max
    })
}

const getProductsById = (id) => {
    return products.find(item => item.id == id)
}


const addNewProduct = (id, description, price) => {
    const newProduct = {
        id, description, price, reviews: [],
    }
    products.push(newProduct)
    return newProduct
}

const addProductReview = (id, rating, comment) => {
    const existingProduct = getProductsById(id)
    if (existingProduct) {
        const review = {
            rating,
            comment
        }
        existingProduct.reviews.push(review)

        return review
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
    addProductReview
}