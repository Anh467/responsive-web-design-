import React from 'react'
function Infor({UserInfor}){
    return UserInfor.map(ele => {
        return React.createElement('tr',
                            null, 
                            React.createElement('th',
                                                null,
                                                React.createElement('strong',
                                                                    null,
                                                                    ele.name)
                                                ),
                            React.createElement('th',
                                                null,
                                                ele.detail)
                            )
    })
}
export default function UserInfor({UserInfor}) {
  return (
    <table  style={{
                  textAlign: 'left', marginBottom: "60px", 
                  width: "95%", marginRight: "auto",  marginLeft: "auto",
                  display: "flex", flexDirection: "column",
                  }}  >
        <tbody>
            <Infor UserInfor= {UserInfor}></Infor>
        </tbody>
    </table>
  )
}

