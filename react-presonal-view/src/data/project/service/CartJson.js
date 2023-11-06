const ListRes = 
`{
    "cart": [
        {
            "userid": 1,
            "productid": 1,
            "quantity": 5,
            "product": {
                "productid": 1,
                "name": "Áo loong heheheh",
                "description": "Áo khoác nam dáng dài",
                "price": 109.99,
                "Category": {
                    "categoryid": 0,
                    "name": ""
                },
                "categoryid": 2,
                "image": ""
            }
        },
        {
            "userid": 1,
            "productid": 2,
            "quantity": 12,
            "product": {
                "productid": 2,
                "name": "Quần jeans đen",
                "description": "Quần jeans nam màu đen",
                "price": 39.99,
                "Category": {
                    "categoryid": 0,
                    "name": ""
                },
                "categoryid": 2,
                "image": ""
            }
        },
    ],
    "length": 5
}`
const GetRes = 
`
{
    "cart": {
        "userid": 1,
        "productid": 1,
        "quantity": 5,
        "product": {
            "productid": 1,
            "name": "Áo loong heheheh",
            "description": "Áo khoác nam dáng dài",
            "price": 109.99,
            "Category": {
                "categoryid": 0,
                "name": ""
            },
            "categoryid": 2,
            "image": ""
        }
    }
}
`
export default {ListRes, GetRes}

