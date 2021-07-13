import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import SignUpForm from '../components/SignUpForm';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const SignUp = () => {
  return (
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
      <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/bg.jpg" Ptitle="Sign Up" Pdescription="From Registration" />
      <SignUpForm />
      <Footer FooterData={FooterData} />
    </div>
  );
};
export default SignUp;
