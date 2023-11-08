import React from 'react'
function indicateHandler(event) {
    //e.preventDefault();
    var button = event.target
    const targetId = button.getAttribute('name');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      window.scrollTo({
        behavior: 'smooth',
        top: targetElement.offsetTop + (window.innerHeight / 2),
      });
    }
  }
export default function UrlRouter({routers}) {
  return (
    <React.Fragment>
    <p class='w3-bar-item w3-button'>Router list</p>
    <ul class='sidebar'>
      {
          routers.map(ele=>{
            return (
              <li>
                <button className='button-indicate' name={ele.id} onClick={(event) => indicateHandler(event)}>{ele.service}</button>
              </li>
            )
          })
      }
    </ul>
  </React.Fragment>
  )
}