import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
export const Example = {
    service: 'Example',
    router: [
        {
            url: 'url',
            method: 'method',
            description: 'script',
            request: [
                {
                    type: 'RequestBody',
                    detail:`json`
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