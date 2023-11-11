import React, {useState} from 'react' // nạp thư viện react
import '../css/common.css'
import UrlRouter from './content/UrlRouter';
window.addEventListener('scroll', function() {
  const headerBar = document.getElementById('header-bar'); 
  const menuButton = document.getElementById('menu-button');
  const scrollPosition = window.scrollY;

  if (scrollPosition > headerBar.offsetHeight) {
    menuButton.classList.add('fixed-menu');
  } else {
    menuButton.classList.remove('fixed-menu');
  }
});
function w3_open() {
  document.getElementById("header-bar").style.display = "block";
}
function w3_close() {
  document.getElementById("header-bar").style.display = "none";
}




export default function HeaderBar({ProjectInfomation, routers}) {
  return (
    <React.Fragment>
          <div className="w3-sidebar w3-bar-block w3-border-right" style={{display: 'none'}}  id="header-bar">
                <button onClick={w3_close} className="w3-bar-item w3-large">Close &times;</button>
                <a href="/" className="w3-bar-item w3-button">Home</a>
                {ProjectInfomation.map( ele =>{
                  return (
                    <a href={'/'+ele.url} className="w3-bar-item w3-button">{ele.name}</a>
                  )
                })}
                <div class="long-horizontal-line" ></div>
                
                {routers && <UrlRouter routers={routers.api}/>}
                
          </div>
          <div className="w3-teal mb-20">
              <button id='menu-button' className="w3-button w3-teal w3-xlarge" onClick={w3_open}>☰</button>
              <div className="w3-container">
                  <h1>My Page</h1>
              </div>
          </div>

    </React.Fragment>
  )
}
