import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Example = {
    id: 'user',
    service: 'User',
    router: [
        {
            url: '/v1/api/user/:userid',
            method: 'DELETE',
            description: 'You must have a right of admin to active this feature, this feature not actually delete it change status of the user to deleted',
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
                    type: 'ResponseData',
                    detail:`status : done`
                }
            ]
        },
        {
            url: '/v1/api/user/:userid',
            method: 'PUT',
            description: `You must have a right of admin or you own this account`,
            request: [
                {
                    type: 'Request Body',
                    detail:`Send attribute [fullname (string), email (string), password (string), address (string)]`
                },
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
                    detail:`Return data of user that you have just update`
                }
            ]
        },
        {
            url: '/v1/api/user/get',
            method: 'GET',
            description: 'User who signed to website can get their account information by sending token in header',
            request: [
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`Return data of your`
                }
            ]
        },
        {
            url: '/v1/api/user/:userid',
            method: 'GET',
            description: 'You must have a right of admin to active this feature, get user information by id',
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
                    type: 'ResponseData',
                    detail:`Return data of user who you want to get information`
                }
            ]
        },
        {
            url: '/v1/api/user/list',
            method: 'GET',
            description: 'You must have a right of admin to active this feature, get all of user',
            request: [
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`Return list data of user information`
                }
            ]
        },
    ]
    
}