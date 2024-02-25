import React from 'react'
import Image from 'next/image'
import im from "./aboutUs.jpg"
function index() {
  return (
    <div className="row" style={{marginTop:"130px"}}>
     
    <div style={{position:"relative",height:"125vh"}}>
    <Image  src={im} width={1000} height={450}/>
    <big className="col-lg-8 col-md-6 col-sm-12"  style={{borderRadius:"10px",padding:"20px",
    position:"absolute",backgroundColor:"#fff",
    fontSize:"15px",color:"#2b294e", top:"320px",right:"50px",textOverflow: "ellipsis"}}>
    Daliluna is a website and an application that includes all public 
    authorities in addition to all commercial, tourist, services,
     and industrial establishments that are of importance to the citizens.
      It aims to make it easier for them to contact with these establishments 
      via all possible ways which save time and money like providing information 
      about the locations, phone numbers, and emails. It is noteworthy to mention
       that Daliluna does not get paid for any of these services: 
       . Inserting information about an establishment. . Downloading the app of Daliluna
        . . Posting on the social media platforms related to the website. . 
        Using the (Classifieds) of the online market which the website provides to display
         products, goods, real-estates, vehicles, and other things for the sake of selling,
          exchanging, or giving for free. Daliluna refuses to get involved in the following
           issues: . Religious and political issues. . Defamation of public figures,
            individuals of the community, establishments, authorities, resorts, and services. 
            . Indecent and controversial topics. Disclaimer: Daliluna is not responsible for
             the credibility of the included information such as quality information,
              scientific information, cultural information etc... 
              Only the person inserting those information is responsible for them.</big>
              </div>
              </div>
  )
}

export default index