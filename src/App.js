import React from 'react';
import Profile from './profile/Profile'


function App() {
  const myStyle={
    width:"100%",
    height:700,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center" 
   }
  return (
    <div style={myStyle}>
     <Profile name="Houdhayfa" 
     bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea c Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni"

     profession="Engineer">
       <img style={{display:"block"},{margin:5}} width="200" height="200" src="/img/photo.jpg"/>
     </Profile>
    </div>
  );
}

export default App;
