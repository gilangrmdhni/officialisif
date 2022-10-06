import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
// import Contacts from '../components/Contacts';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
// import CoreFeatures from '../components/Features/CoreFeatures';
import MarketingGetstarted from '../components/MarketingGetstarted';
import EventLocation from '../components/EventLocation';

const About = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/call_me.jpg" Ptitle="Contact Us" Pdescription="Please feel free to contact us if you need other assistance" />
      {/* <Contacts /> */}
      {/* <CoreFeatures /> */}
      <MarketingGetstarted />
      <EventLocation />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default About;
