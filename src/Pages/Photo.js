import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Portfoliofull from '../components/Portfolios/Portfoliofull4col';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const Portfoliofull4col = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/bg.jpg" Ptitle="Photo" Pdescription="Photo Collection " />
      <Portfoliofull />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default Portfoliofull4col;
