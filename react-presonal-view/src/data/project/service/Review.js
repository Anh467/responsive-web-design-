import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Review = {
    id: 'review',
    service: 'Review',
    router: [
        {
            url: 'http://127.0.0.1:8080/v1/api/review/list/:productid?limit=3&offset=0',
            method: 'GET',
            description: 'User can request the list of review which from the product which have productid, if you did not enter limit and offset its default 5 and 0 respectively',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:productid (number)]`
                },
                {
                    type: 'Request Params',
                    detail:`Send attribute [limit (number), offset (number)]`
                },
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`List of reviews`
                }
            ]
        },
        {
            url: 'http://127.0.0.1:8080/v1/api/review/list?limit=3&offset=0',
            method: 'GET',
            description: 'User can request all the review',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:productid (number)]`
                },
                {
                    type: 'Request Params',
                    detail:`Send attribute [limit (number), offset (number)]`
                },
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`List of reviews`
                }
            ]
        },
        {
            url: 'http://127.0.0.1:8080/v1/api/review/:reviewid',
            method: 'GET',
            description: 'User can request a review which have review id', 
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:reviewid (number)]`
                },
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`return a review which they request`
                }
            ]
        },
        {
            url: 'http://127.0.0.1:8080/v1/api/review/:userid/:reviewid',
            method: 'PUT',
            description: 'You can update their commonet',
            request: [
                {
                    type: 'Request Body',
                    detail:`Send attribute [productid (number), rating (number), comment (string)\]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                },
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number), /:reviewid (number)]`
                },
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`return data of review that just update`
                }
            ]
        },
        {
            url: 'http://127.0.0.1:8080/v1/api/review/:userid',
            method: 'POST',
        description: 'You can can create comment',
            request: [
                {
                    type: 'Request Body',
                    detail:`Send attribute [productid (number), rating (number), comment (string)\]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                },
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number)]`
                },
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`return data of review that just create`
                }
            ]
        },
        ,
        {
            url: 'http://127.0.0.1:8080/v1/api/review/:userid/:reviewid',
            method: 'DELETE',
        description: 'You can can delete your own comment',
            request: [
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                },
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:userid (number), /:reviewid (number)]`
                },
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`status: done`
                }
            ]
        }
    ]
    
}