import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
import Breadcrumb from '../components/Breadcrumb';
import IysaCollab from '../components/Blog/IysaCollab'
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';

const Iysacollab = () => {
    return(
        <div className="body_wrapper">
            <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/bg.jpg" Ptitle="IYSA Collaboration" Pdescription="Home - Blog"/>
            <IysaCollab/>
            <Footer FooterData={FooterData}/>
        </div>
    )
}
export default Iysacollab;