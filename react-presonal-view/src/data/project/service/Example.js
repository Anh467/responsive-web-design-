import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Example = {
    id: 'example',
    service: 'Example',
    router: [
        {
            url: 'url',
            method: 'method',
            description: 'script',
            request: [
                {
                    type: 'RequestBody',
                    detail:`Send attribute [quantity (number)]`
                }
            ],
            response: [
                {
                    type: 'ResponseData',
                    detail:`json`
                }
            ]
        }
    ]
    
}