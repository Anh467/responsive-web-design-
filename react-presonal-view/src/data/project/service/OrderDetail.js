import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const OrderDetail = {
    id: 'orderdetail',
    service: 'OrderDetail',
    router: [
        {
            url: '/v1/api/orderdetail/:userid/:orderid/:productid',
            method: 'PUT',
            description: 'Update order detail based on orderid and productid, just admin or use own this order detail can modify',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number), /:orderid (number), /:productid (number)]`
                },
                {
                    type: 'Request Body',
                    detail:`Send attribute [quantity (number)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'Request Data',
                    detail:`Order Detail that was updated successfully`
                }
            ]
        },
        {
            url: '/v1/api/orderdetail/:userid/:orderid',
            method: 'POST',
            description: 'Create list of order details, just admin or use own this order detail can modify',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number), /:orderid (number)]`
                },
                {
                    type: 'Request Body',
                    detail:`Send List of attribute [][productid (number), quantity(number)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`List Order Detail that was created successfully`
                }
            ]
        },
        {
            url: '/v1/api/orderdetail/:userid/:orderid/:productid',
            method: 'DELETE',
            description: 'dele order detail based on orderid and productid, just admin or use own this order detail can modify ',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number), /:orderid (number)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`"status": "done"`
                }
            ]
        },
        {
            url: '/v1/api/orderdetail/:userid/:orderid',
            method: 'GET',
            description: 'admin or who own this order detail can get the order detail',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number), /:orderid (number)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`List of order details`
                }
            ]
        }
    ]
    
}