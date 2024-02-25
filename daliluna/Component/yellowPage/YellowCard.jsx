import Link from 'next/link'
import React from 'react'
import { CiHeart, CiLocationOn } from 'react-icons/ci'
import { LuEye } from 'react-icons/lu'
import { MdOutlineLocalPhone } from 'react-icons/md'
import style from "../../src/styles/elemyel.module.css"
import im from "./im.jpg"
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation';

function YellowCard({det}) {
  const { t } = useTranslation('common');
  return (
    <div>
         <div className={style["blog-widget"]} style={{display:"flex"}} >
      
      <div className="blog-img">
           
           <Image  src={im} alt="icons" className={style['imm']} style={{position:"relative",borderRadius:"0px 5px 5px 0"}} loading="lazy"/>
         {
         /*    
            localStorage.getItem("lan") === "ar" ?( <>
              <h6 style={{position:"absolute",top:"20px",marginRight:"20px",backgroundColor:"#2b294e",color:"#fff",padding:"10px",borderRadius:"10px"}}>{t("feature")}</h6>
              <div style={{position:"absolute",top:"20px",marginRight:"230px",backgroundColor:"#fff",color:"2b294e",padding:"10px ",borderRadius:"50%"}}>
              <CiHeart style={{fontSize:"25px"}}/>
              </div>
              </>):(
             <>
             <h6 style={{position:"absolute",top:"20px",marginLeft:"20px",backgroundColor:"#2b294e",color:"#fff",padding:"10px",borderRadius:"10px"}}>{t("feature")}</h6>
             <div style={{position:"absolute",top:"20px",marginLeft:"230px",backgroundColor:"#fff",color:"2b294e",padding:"10px ",borderRadius:"50%"}}>
             <CiHeart style={{fontSize:"25px"}}/>
             </div>
             </>
            )
           
              */}
         </div>
 <div className="card-body">
   <div className="blogfeaturelink" style={{display:"flex",justifyContent:"space-between"}}>
     <div className="blog-features">
       <a href="javascript:void(0);"><span> <i className="fa-regular fa-circle-stop" /> Construction</span></a>
     </div>
     <div className="blog-author">
       
       <a href="javascript:void(0);">John Doe</a>
     </div>
   </div>
   <h2 style={{marginBottom:"20px",marginTop:"20px"}}><div style={{color:"inherit",textDecoration:"none",margin:"10px 0px",fontWeight:"bold"}} href="service-details.html">{det.name}</div></h2>
   <div className={style["blog-location-details"]} style={{}}>
     <div className="location-info">
     <CiLocationOn /> {det.address}
     </div>
     <div className="location-info">
     <MdOutlineLocalPhone /> {det.phone}
     </div>
     <div className="location-info">
     <LuEye /> 4000
     </div>
   </div>
   <div  style={{display:"flex",alignItems:"center"}}>
   <p style={{backgroundColor:"#ff823b",padding:"2px 7px",borderRadius:"5px",color:"#fff",fontWeight:"500"}}>4.0 </p>
   <p style={{marginLeft:"10px",color:"gray",fontSize:"12px"}}>( 50 Reviews )</p>
   </div>
   <div className="amount-details" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
     <div className="amount">

       <span className="validrate" style={{color: "#c10037",
 fontSize: "20px",
 fontWeight: "600",
 textDecoration: "none"}}>$350</span>
     </div>
     <div style={{color:"#b3150f",textDecoration:"none",padding:"10px",borderRadius:"10px"}} >{t("view")}</div>
   </div>
 </div>
</div>
    </div>
  )
}

export default YellowCard