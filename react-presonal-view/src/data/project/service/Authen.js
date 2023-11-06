import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Authen = {
    service: 'Authen',
    router: [
        {
            url: '/v1/api/authen/signin',
            method: 'POST',
            description: 'When the data is responded to, the token should be saved in a cookie or local storage so that the user who wants to request something can send that token to the server.',
            request: [
                {
                    type: 'Request Body',
                    detail:'Send attribute [email (string) , password (string)]'
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:'Response Detail user'
                }
            ]
        },
        {
            url: '/v1/api/authen/signin',
            method: 'POST',
            description: 'When the data is responded to, the token should be saved in a cookie or local storage so that the user who wants to request something can send that token to the server.',
            request: [
                {
                    type: 'Request Body',
                    detail: 'Send attribute [fullname (string) , email (string), password (string) , address (string) ]'
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:'Response Detail user'
                }
            ]
        }
    ]
    
}