import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Product = {
    id: 'product',
    service: 'Product',
    router: [
        {
            url: '/v1/api/product',
            method: 'POST',
            description: 'This is feature just for the right of admin ',
            request: [
                {
                    type: 'RequestBody',
                    detail:`Send attribute [name (string),description (string), price (number), categoryid (number), image (string)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`The information of a product just created`
                }
            ]
        },
        {
            url: '/v1/api/product/:productid',
            method: 'PUT',
            description: 'This is feature just for the right of admin ',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:productid (number)]`
                },
                {
                    type: 'RequestBody',
                    detail:`Send attribute [name (string),description (string), price (number), categoryid (number), image (string)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`The information of a product just updated`
                }
            ]
        },
        {
            url: '/v1/api/product/:productid',
            method: 'DELETE',
            description: 'This is feature just for the right of admin',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:productid (number)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`status : done`
                }
            ]
        },
        {
            url: '/v1/api/product/list?limit=10&offset=1',
            method: 'PUT',
            description: 'This featue for everyone include user, if you not pass limit and offset value it will default is 5 and 0 respectively',
            request: [
                {
                    type: 'Request Param',
                    detail:`Send attribute [limit (number), offset (number)]`
                },
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`The information of products that you want to get`
                }
            ]
        },
        {
            url: '/v1/api/product/get/:productid',
            method: 'PUT',
            description: 'This featue for everyone include user ',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:productid (number)]`
                },
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`The information of a product that you want to get information`
                }
            ]
        },
    ]
    
}