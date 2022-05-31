import React, { CSSProperties, FC } from "react";
import { TiSocialInstagram, TiSocialFacebook,TiSocialTwitter } from 'react-icons/Ti';
import { FiMail} from 'react-icons/Fi';
import { GiRotaryPhone} from 'react-icons/Gi';
import { MdLocationCity} from 'react-icons/Md';


export const Footer: FC = () => {


  return (
    <div style={{background:'black'}}  id="footerContainer">
      <div style={FooterStyle} className="footerItems">
        <div className="contacts">
          <div className="contactsCon">
            <ul style={listStyle}>
              <li><FiMail/> info@optical.com</li>
              <li><GiRotaryPhone/> +46 627 46 58 44</li>
              <li><MdLocationCity/> Secondstreet 69 Gotham City</li>
            </ul>
          </div>
        </div>
        <div style={{display:'flex', flexDirection:"column",justifyContent:"flex-end"}} className="copyright">
          <p style={{ fontSize:'30px', margin:'20px'}}className="FooterLogo">Optical</p>
          <p style={{fontWeight:'lighter', fontSize:'10px'}}>© Copyrighted by Optical</p>
        </div>
        <div className="socials">
          <ul style={listStyle}>
            <li><TiSocialInstagram/> OpticalOfficial</li>
            <li><TiSocialFacebook/> OpticalOfficial</li>
            <li><TiSocialTwitter/> OpticalOfficial</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Footer;





//normal style here
const FooterStyle:CSSProperties = {
  background:'black',
  color:'white',
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between', 
  fontWeight:'bold',
  padding:'40px'
}
const listStyle:CSSProperties ={
  display:'flex',
  alignItems:'flex-start',
  flexDirection:'column',
  listStyleType:'none',
  gap:'10px',
}