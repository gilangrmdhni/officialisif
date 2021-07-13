import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import P3s from '../components/Portfolios/Portfolio3grid';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const Photos = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar
        slogo="sticky_logo"
        mClass="menu_four"
        nClass="w_menu ml-auto mr-auto"
      />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="breadcrumb/bg.jpg"
        Ptitle="Story Event"
        Pdescription="We have a new story in years"
      />
      <P3s />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default Photos;
