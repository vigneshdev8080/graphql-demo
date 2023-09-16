let orders =
    [
        {
            date: "2022-05-04",
            subtotal: 600.00,
            items: [
                {
                    product: {
                        id: 'redshoe',
                        description: 'Old Red',
                        price: 300
                    },
                    quantity: 2
                }
            ]
        }
    ]


const getAllOrders=()=>{
    return orders
}

module.exports={
    getAllOrders,
}