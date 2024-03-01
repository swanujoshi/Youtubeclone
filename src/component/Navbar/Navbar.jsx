import React from 'react' 
import './Navbar.css' 
import logo from '../../assets/logo.png' 
import SearchBar from '../SearchBar/SearchBar'
import {RiVideoAddLine} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import  {BiUserCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import {Googlelogin} from "react-google-login"
import { response } from 'express'

function Navbar({toggleDrawer}) {
  const currentUser =null;
  //const currentUser ={
  //  result:{
  //    email:"xyz@mail.com",
  //    joinOn:"2222-07-15T09:57:23.489Z",
  //  },
 // };
 const onSuccess=(response)=>{
  const Email=response.profileObj.email;
  console.log(Email);
 }
 const onFailure=(res)=>{
   console.log("Failed",response);
 }
  return (
    <div className='container_Navbar'>
        <div className="Burger_logo_Navbar">
          <div className= 'Burger' onClick={()=>toggleDrawer()}>
            <p></p>
            <p></p>
            <p></p>
          </div>
            <Link to={'/'} className='logo_div_navbar'>
                <img src ={logo} alt='Logo'/>
                <p className='logo_title_navbar'>Youtube</p>
            </Link>
          </div>
        <SearchBar />
        <RiVideoAddLine size={22} className={"vid_bell_Navbar"}/>
        <div className="apps_box">
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
          <p className="appbox"></p>
        </div>
        <IoMdNotificationsOutline size={22} className='vid_bell_Navbar'/>
        <div className="Aut_cont_Navbar">
          {currentUser ?(
          <>
          <div className ='Chanel_logo_App'>
            <p className ='fstChar_logo_App'>
              {
                currentUser?.result.name?(
                  <>
                  { currentUser?.result.name.charAt(0).toUpperCase()}
                  </>
               ):(<>
               {currentUser?.result.email.charAt(0).toUpperCase()}
               </>)
              }
            </p>
          </div>
            </>
            )
            :(
            <>
          <Googlelogin
           clientId=""
           onSuccess={onSuccess}
           onFailure={onFailure}
          
          />
          <div className="Auth_Btn">
            <BiUserCircle size={22}/>
            <b>Sign in</b>
          </div>
          </>
        )
        }
        </div>
      </div>
    
     
  )
}

export default Navbar