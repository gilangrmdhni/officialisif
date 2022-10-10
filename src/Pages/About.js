import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
// import Sservice from '../components/Service/Sservice/Sservice';
// import AgencyAbout from '../components/About/AgencyAbout';
// import Partner from '../components/Partner';
import Footer from '../components/Footer/Footer';
// import ServiceData from '../components/Service/ServiceData';
import FooterData from '../components/Footer/FooterData';
// import GuideBook from '../components/Service/SupportItem';
import ChatClients from '../components/chatClients';

const About = () => {
  return (
   <>
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/isif.jpg" Ptitle="About Us" Pdescription="Read Our Documents" />
      {/* <Sservice /> */}
      
      <ChatClients />
      {/* <GuideBook /> */}
      {/* <AgencyAbout ServiceData={ServiceData} />
      <Partner pClass="partner_logo_area_five bg_color" /> */}
     
    </div>
    <div>
    <Footer FooterData={FooterData}/>
    </div>
    </>
   
  );
};
export default About;
