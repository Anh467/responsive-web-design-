import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Order = {
    service: 'Order',
    router: [
        {
            url: '/v1/api/order/:userid',
            method: 'POST',
            description: 'Create new Order for buy something. This should action when user commit to buy product in cart    ',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`Return order information which just create`
                }
            ]
        },
        {
            url: '/v1/api/order/:userid/:orderid',
            method: 'PUT',
            description: 'This feature can change status of order like confirm, devlerving, cancle, ..',
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
                    detail:`Return order information which just update`
                }
            ]
        },
        {
            url: '/v1/api/order/:userid/:orderid',
            method: 'DELETE',
            description: 'This feature that help user can cancel his/her order',
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
                    detail:`status : done`
                }
            ]
        },
        {
            url: '/v1/api/order/:userid/:orderid',
            method: 'POST',
            description: 'Just admin or user who own this orderid can get the order',
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
                    detail:`Return order that want to get`
                }
            ]
        },
        {
            url: '/v1/api/order/:userid?limit=6&offset=0',
            method: 'POST',
            description: 'Just admin or user who own this useid Get list of order of specific user',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number)]`
                },
                {
                    type: 'Param Url',
                    detail:`This is option user can specific limit or offset, but when passing any value default value for limit and offset is 5 and 0 respectively`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`Return the list of order that want to get`
                }
            ]
        }
    ]
    
}