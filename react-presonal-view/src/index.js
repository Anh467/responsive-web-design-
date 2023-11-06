import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import UserInfor from './component/UserInfor'
import './css/index.css'; 
import {UserInformations} from './data/UserInformations'
import TableAPI from './component/TableAPI';
import {ProjectInfomation} from './data/ProjectInfomation'
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }


// Tạo component App
function App() {
    return (
        <React.Fragment>
            
            <div className="w3-sidebar w3-bar-block w3-border-right" style={{display: 'none'}}  id="mySidebar">
                <button onClick={w3_close} className="w3-bar-item w3-large">Close &times;</button>
                <a href="#" className="w3-bar-item w3-button">Link 1</a>
                <a href="#" className="w3-bar-item w3-button">Link 2</a>
                <a href="#" className="w3-bar-item w3-button">Link 3</a>
            </div>
            <div className="w3-teal">
                <button className="w3-button w3-teal w3-xlarge" onClick={w3_open}>☰</button>
                <div className="w3-container">
                    <h1>My Page</h1>
                </div>
            </div>
            <UserInfor UserInfor={UserInformations}></UserInfor>
            <TableAPI Project= {ProjectInfomation[0]}></TableAPI>
        </React.Fragment>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))

