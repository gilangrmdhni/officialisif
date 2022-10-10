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
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/bg.jpg" Ptitle="Registration Process " Pdescription="Please watch the rule registration" />
      <section className="process_area bg_color sec_pad">
        <div className="container">
          <div className="features_info">
            <img className="dot_img" src={require('../img/home4/divider.png')} alt="" />
            <Featuresitems rowClass="row flex-row-reverse" aClass="pr_70 pl_70" fimage="process_1.png" iImg="icon01.png" ftitle="Registration" flink="https://bit.ly/REGISTRATION_ISIF_2022" descriptions="Click button Registration" />
            <Featuresitems
              rowClass="row"  
              aClass="pl_100"
              fimage="process_2.png"
              iImg="icon02.png"
              ftitle="Fill the Registration Form"
              flink="https://bit.ly/REGISTRATION_ISIF_2022"
              descriptions="Fill your data like your lead team, your school, project title, shiping payment and more."
            />
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="process_3.png"
              iImg="icon3.png"
              ftitle="Receive LoA and Invoice"
              flink="mailto:isifofficial.iysa@gmail.com"
              descriptions="We send LoA and Invoice to your email, if you can't find email LoA and Invoice please check in the spam, or contact our team."
            />
            <Featuresitems
              rowClass="row"
              aClass="pl_100"
              fimage="process_4.png"
              iImg="icon_04.png"
              ftitle="Submit Requierements"
              flink="https://wa.me/6281770914129"
              descriptions="You must be submit the requirements for join in our event."
            />
            <Featuresitems
              rowClass="row flex-row-reverse"
              aClass="pr_70 pl_70"
              fimage="process_5.png"
              iImg="icon_05.png"
              ftitle="Project Presentation"
              flink="/Contact"
              descriptions="Presentattion must be english langueges, feel free to contacting our team admin if you need more help."
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
