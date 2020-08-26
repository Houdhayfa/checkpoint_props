import React, { Component } from 'react'

const Profile=(props) => {
     const handelName=()=>{alert(`Profile name is: ${props.name}`)}
     const profileStyle={display:"flex",
                         flexDirection:"column",
                         justifyContent:"center",
                         alignItems:"center",
                         textAlign:"center",
                         height:250,
                         margin:"0px 5px",
                         border:"solid yellow",
                         borderRadius:10
                        }
    const buttonStyle={display:"block",
                       borderRadius:5,
                       backgroundColor:"#FFDF00"
                      }
    const infoStyle={width:300,
                     height:400,
                     border:"solid yellow",
                     borderRadius:10,
                     display:"flex",
                     flexDirection:"column",
                     overflow:"auto"
                     }                 
 return (
            <div style={{display:"flex",flexDirection:"row"}}>
               <div style={profileStyle} >
                {props.children}
                <button  style={buttonStyle} onClick={handelName}>Show profile name</button>
               </div>
               <div style={infoStyle}>
                   <h3 style={{color:"#FFDF00",margin:"5px 10px"}}>Profession:</h3>
                   <p style={{color:"white",margin:"0px 10px"}}>{props.profession} </p>
                   <h3 style={{color:"#FFDF00",margin:"5px 10px",overflowWrap:"normal"}}>Biography:</h3>
                   <p style={{color:"white",margin:"0px 10px"}}>{props.bio} </p>
               </div>
            </div>
           )
}
export default Profile
