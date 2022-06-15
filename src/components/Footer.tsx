import React, { CSSProperties, FC, useContext } from "react";
import { TiSocialInstagram, TiSocialFacebook,TiSocialTwitter } from 'react-icons/Ti';
import { FiMail} from 'react-icons/Fi';
import { GiRotaryPhone} from 'react-icons/Gi';
import { MdLocationCity} from 'react-icons/Md';
import { flexColumn, flexRow , flexDeadCenter} from '../style/common'
import { Device, DeviceContext } from "../style/deviceProvider";

export const Footer: FC = () => {

  const { devices } = useContext(DeviceContext)

  let currentDevice: string = devices.isDesktop ? "Desktop" : devices.isTablet ? "Tablet" : "Mobile"  
    
  if(devices.isDesktop) {
      currentDevice = "Desktop"
  } else if(devices.isTablet) {
      currentDevice = "Tablet"
  } else {
      currentDevice = "Mobile"
  }


  return (
    <div style={{background:'black'}}  id="footerContainer">
      <div style={{...FooterStyle, ...footerContainer(devices)}}  className="footerItems">
        <div style={responsiveWidth(devices)} className="contacts">
          <div  className="contactsCon">
            <ul style={footerContactList(devices)}>
              <li style={{display:'flex', flexDirection:'row', alignItems: 'center', padding:'5px', fontSize:'15px'}}> <FiMail/> info@optical.com</li>
              <li style={{display:'flex', flexDirection:'row', alignItems: 'center', padding:'5px', fontSize:'15px'}}> <GiRotaryPhone/> +46 627 46 58 44</li>
              <li style={{display:'flex', flexDirection:'row', alignItems: 'center', padding:'5px', fontSize:'15px'}}> <MdLocationCity/> Secondstreet 69</li>
            </ul>
          </div>
        </div>
        <div style={{...flexColumn,justifyContent:"flex-end", ...responsiveWidth(devices)}} className="copyright">
          <p style={{ fontSize:'30px', margin:'20px'}}className="FooterLogo">Optical</p>
          <p style={{fontWeight:'lighter', fontSize:'10px'}}>© Copyrighted by Optical</p>
        </div>
        <div style={responsiveWidth(devices)} className="socials">
          <ul style={footerSocialList(devices)}>
            <li style={{display:'flex', flexDirection:'row', alignItems: 'center', padding:'5px'}}> <TiSocialInstagram/> OpticalOfficial</li>
            <li style={{display:'flex', flexDirection:'row', alignItems: 'center', padding:'5px'}}> <TiSocialFacebook/> OpticalOfficial</li>
            <li style={{display:'flex', flexDirection:'row', alignItems: 'center', padding:'5px'}}> <TiSocialTwitter/> OpticalOfficial</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default Footer;


/* style including MEDIA QUERIES */

const responsiveWidth: (devices: Device) => CSSProperties = (devices) => {
  return {
    
 width: devices.isMobile ? '100%' : '33%'

  }
};

const footerContainer: (devices: Device) => CSSProperties = (devices) => {
  return {
    
    display:'flex',
    flexDirection: devices.isMobile ? 'column' : 'row',
    alignItems: devices.isMobile ? 'center' : 'none'

  }
};

const footerContactList: (devices: Device) => CSSProperties = (devices) => {
  return {
    
    display:'flex',
    alignItems:devices.isMobile ? 'center' : 'flex-start',
    flexDirection:'column',
    listStyleType:'none',
    gap:'10px',

  }
};

const footerSocialList: (devices: Device) => CSSProperties = (devices) => {
  return {
    
    display:'flex',
    alignItems:devices.isMobile ? 'center' : 'flex-end',
    flexDirection:'column',
    listStyleType:'none',
    gap:'10px',

  }
};


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