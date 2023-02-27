import React from 'react'
import barcode from './Images/barcode.png';
import build from './Images/build.png';
import chip from './Images/chip.png';
import image from './Images/image.jpg';
import Logo from './Images/logo.png';
import sign from './Images/sign.png';
import sign2 from './Images/sign2.png';
export default function Idcard() {
  return (
    <div>
      <h1 className='heading'>My Profile</h1>
      <div className="grid" >  
         <h5 className="heading1"> Indian Institute of Technology Kanpur</h5>
        <p className="heading2"><b>Kanpur-28016(U.P). INDIA</b></p>
        <img  className="logo" src={Logo}  alt=""/>
        <img  className="myimg" src={image} alt=""/>
        <img  className="chip" src={chip} alt=""/>
        <h4 className="name">Raja Rajendra</h4>
        <img  className="build" src={build} alt=""/>
        <p className="idno">2100032433</p>
        <p className="branch">B.Tech/CSE</p>
        <p className="dob">Date of Birth:25/11/2003</p>
        <p className="parent">Parent: Raja Vasu</p>
        <img  className="sign1" src={sign} alt=""/>
        <img  className="sign2" src={sign2} alt=""/>
        <p className="dean">Dean of Student Affairs</p>
        <p className="std">Student Signature</p>
        <p className="r1">2021<br/> <br/>2025</p>
        <p className="r2">To</p>
        <img  className="barcode" src={barcode} alt=""/>   
    </div>
    </div>
  )
}
