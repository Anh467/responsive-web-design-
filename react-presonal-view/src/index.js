import React, {useState} from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import UserInfor from './component/UserInfor'
import './css/index.css'; 
import {UserInformations} from './data/UserInformations'
import TableAPI from './component/TableAPI';
import {ProjectInfomation} from './data/ProjectInfomation'
import HeaderBar from './component/HeaderBar';
import Layout from './component/Layout';
import Home from './component/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";



// Tạo component App
function App() {
    const [routers, setRouters] = useState([])
    
    return (
        
        <React.Fragment>
            
              
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UserInfor UserInfor={UserInformations}></UserInfor>}/>
                <Route path="/home" element={<UserInfor UserInfor={UserInformations}></UserInfor>} />
                  {
                    ProjectInfomation.map(ele=>{
                      
                      return(
                            <Route path={ele.url} element={
                              <React.Fragment>
                                <HeaderBar ProjectInfomation={ProjectInfomation} routers={ele}></HeaderBar>
                                <TableAPI Project= {ele}></TableAPI>
                              </React.Fragment>
                            } />  
                        )
                      }
                    )
                  }
              </Routes>
              
            </BrowserRouter>
        </React.Fragment>
    )
}

// Render component App vào #root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

