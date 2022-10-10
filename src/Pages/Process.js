import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import videoProcces from '../components/videoProcces';
const Process = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/bg.jpg" Ptitle="Registration Process " Pdescription="Please watch the rule registration" />
      <section className="process_area bg_color sec_pad">
        <div className="container">
          <div className="features_info">
            <img className="dot_img" src={require('../img/home4/divider.png')} alt="" />
            <videoProcces />
            <div className="dot middle_dot">
              <span className="dot1"></span>
              <span className="dot2"></span>
            </div>
          </div>
        </div>
      </section>
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default Process;
