import React, { CSSProperties, FC } from "react";
import { TiSocialInstagram, TiSocialFacebook,TiSocialTwitter } from 'react-icons/Ti';
import { FiMail} from 'react-icons/Fi';
import { GiRotaryPhone} from 'react-icons/Gi';
import { MdLocationCity} from 'react-icons/Md';
import { flexColumn, flexRow , flexDeadCenter} from '../style/common'

export const Footer: FC = () => {


  return (
    <div style={{background:'black'}}  id="footerContainer">
      <div style={{...flexDeadCenter,...flexRow, ...FooterStyle}}  className="footerItems">
        <div style={{width:'33%'}} className="contacts">
          <div  className="contactsCon">
            <ul style={listStyle}>
              <li><FiMail/> info@optical.com</li>
              <li><GiRotaryPhone/> +46 627 46 58 44</li>
              <li><MdLocationCity/> Secondstreet 69</li>
            </ul>
          </div>
        </div>
        <div style={{...flexColumn,justifyContent:"flex-end", width:'33%'}} className="copyright">
          <p style={{ fontSize:'30px', margin:'20px'}}className="FooterLogo">Optical</p>
          <p style={{fontWeight:'lighter', fontSize:'10px'}}>© Copyrighted by Optical</p>
        </div>
        <div style={{width:'33%',display:'flex', justifyContent:'flex-end'}} className="socials">
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
  bottom: 0,
  background:'black',
  color:'white',
  justifyContent:'space-between', 
  fontWeight:'bold',
  padding:'20px'
}
const listStyle:CSSProperties ={
  display:'flex',
  alignItems:'flex-start',
  flexDirection:'column',
  listStyleType:'none',
  gap:'10px',
}