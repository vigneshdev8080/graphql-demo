const ordersModel = require("./orders.models")

module.exports = {
    Query: {
        orders: () => ordersModel.getAllOrders()
    }
}