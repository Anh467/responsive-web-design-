import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import { Array } from './service'
export const  ProjectGolangShopRestAPI =  {
    url: 'golang-rest-api',
    name: 'Shop API',
    description: `using rest-api write in golang and rely on Clean Architecture 
U can test connection using "http://ircnv.id.vn:8080/ping" if response is "pinghhhhhhhhhhhhh" that means the connection is good`,
    github: `${[<strong><a href="https://github.com/Anh467https://github.com/Anh467/Golang-RestAPI">My Repository</a> </strong>]}`,
    language : ['golang'],
    technology: [
        'clean-architecture',
        'gin',
        'gorm',
        'mysql'
    ],
    api:Array
}
