import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Featuresitems from '../components/Features/Featuresitems';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
const Process = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/bg.jpg" Ptitle="Registration Process " Pdescription="Please watch the rule of registration" />
      <section className="process_area bg_color sec_pad">
        <div className="container">
          <div className="features_info">
            <img className="dot_img" src={require('../img/home4/divider.png')} alt="" />
            <h2>How To Register?</h2>
            <div className="video_content">
              <div className="video">
                <a className="popup-youtube video_icon" href="https://www.youtube.com/watch?v=DCw862udnZo">
                  <i className="arrow_triangle-right"></i>
                </a>
              </div>
            </div>
            <Featuresitems
               rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="process_3.png"
              
            />
             <h2>After Registered?</h2>
            <div className="video_content">
              <div className="video">
                <a className="popup-youtube video_icon" href="https://www.youtube.com/watch?v=YBhdvQ1p5xQ">
                  <i className="arrow_triangle-right"></i>
                </a>
              </div>
            </div>
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="process_1.png"
              
            />
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
