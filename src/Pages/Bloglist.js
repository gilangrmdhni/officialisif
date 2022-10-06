import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import Bloglists from '../components/Blog/Bloglists'
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const Bloglist = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/isif.jpg" Ptitle="Blog List" Pdescription="Our News"/>
            <Bloglists/>
            <Footer FooterData={FooterData}/>
        </div>
    )
}
export default Bloglist;