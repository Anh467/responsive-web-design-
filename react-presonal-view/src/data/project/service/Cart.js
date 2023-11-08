import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Cart = {
    id: 'cart',
    service: 'Cart',
    router: [
        {
            url: '/v1/api/cart/:userid',
            method: 'GET',
            description: `Only those who are admins or owners of that warehouse have the right to request to get the cart list. Only those who are admins or owners of that warehouse have the right to request to get that user's cart list`,
            request: [
                {
                    type: 'Request Header',
                    detail:`token: "exampledtoken"`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail: 'Return List of Cart'
                  
                }
            ]
        },
        {
            url: '/v1/api/cart/:userid/:productid',
            method: 'GET',
            description: `Only those who are admins or owners of that warehouse have the right to request that user's cart list`,
            request: [
                {
                    type: 'Request Header',
                    detail:`token: "exampledtoken"`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail: 'Return a cart'
                  
                }
            ]
        },
        {
            url: '/v1/api/cart/:userid/:productid',
            method: 'POST',
            description: `Only those who are admins or owners of that warehouse have the right to request to get the cart list. Only those who are admins or owners of that warehouse have the right to request to get that user's cart list`,
            request: [
                {
                    type: 'Request Body',
                    detail:'Send attribute [quantity (number)]'
                  ,
                    type: 'Request Header',
                    detail:`token : "exampledtoken"`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:"Return a cart"
                }
            ]
        },
        {
            url: '/v1/api/cart/:userid/:productid',
            method: 'PUT',
            description: 'User can update quantity of product in cart',
            request: [
                {
                    type: 'Request Body',
                    detail: 'Send attribute [quantity (number)]'
                },
                {
                    type: 'Request Header',
                    detail:`
                        token : "exampledtoken"
                    `
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail: "Return a cart"
                }
            ]
        },
        {
            url: '/v1/api/cart/:userid/:productid',
            method: 'DELETE',
            description: 'Just user who own their cart can delete',
            request: [
                {
                    type: 'Request Header',
                    detail:`
                        token : "exampledtoken"
                    `
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:[<span>
                        <pre>
                          {"{"}
                          {"\n"}
                          {"    "}"status": "done"{"\n"}
                          {"}"}
                          {"\n"}
                          {"    "}
                        </pre>
                      </span>
                      ]
                }
            ]
        },
    ]
    
}