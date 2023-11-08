import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Category = {
    id: 'category',
    service: 'Category',
    router: [
        {
            url: '/v1/api/category',
            method: 'POST',
            description: 'Create new category but just admin have permission to do this',
            request: [
                {
                    type: 'Request Body',
                    detail:`Send attribute [categoryid (number), name (string)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`Data of category which just create will be sent`
                }
            ]
        },{
            url: '/v1/api/category/:categoryid',
            method: 'PUT',
            description: 'Update category but just admin have permission to do this',
            request: [
                {
                    type: 'Request Body',
                    detail:`Send attribute [name (string)]`
                },
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:categoryid (number)]`
                },
                {
                    type: 'Request Header',
                    detail:`token :exmapledtoken`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`Data of category which just update will be sent`
                }
            ]
        },
        {
            url: '/v1/api/category/:categoryid',
            method: 'DELETE',
            description: 'Delete category but just admin have permission to do this',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:categoryid (number)]`
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
            url: '/v1/api/category/:categoryid',
            method: 'GET',
            description: 'get category but everyone have permission to do this',
            request: [
                {
                    type: 'Request Url',
                    detail:`Send attribute [/:categoryid (number)]`
                }
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`Data of category which just request will be sent`
                }
            ]
        },
        {
            url: '/v1/api/category',
            method: 'GET',
            description: 'get all categories but everyone have permission to do this',
            request: [
            ],
            response: [
                {
                    type: 'Response Data',
                    detail:`List of categoris which just request will be Responsed`
                }
            ]
        }
    ]
    
}