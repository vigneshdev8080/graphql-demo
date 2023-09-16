const productsModel = require("./products.models")

module.exports = {
    Query: {
        products: () => {
            return productsModel.getAllProducts()
        },
        productsByPrice: (_, args) => {
            const { min, max } = args
            return productsModel.getProductsByPrice(min, max)
        },
        getProductsById:(_,args)=>{
            const { id } = args
            return productsModel.getProductsById(id)
        }
    },
    Mutation:{
        addNewProduct:(_,args)=>{
          const {id,description,price} = args
          return productsModel.addNewProduct(id,description,price)
        },
        addProductReview:(_,args)=>{
            const {id,rating,comment}=args
            return productsModel.addProductReview(id,rating,comment)
        }
    }
}