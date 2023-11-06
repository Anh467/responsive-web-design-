import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import {ListRes, GetRes} from './CartJson'
export const Cart = {
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
            description: 'Những người nào là admin hoặc sở hữu chỉnh cái kho đó thì mới có quyền yêu cầu lấy danh sách cart của người dùng đó',
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
                    detail:<span>
                    <pre>
                      {"{"}
                      {"\n"}
                      {"    "}"quantity" :17{"\n"}
                      {"}"}
                      {"\n"}
                      {"    "}
                    </pre>
                  </span>
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