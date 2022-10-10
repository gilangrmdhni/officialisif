import React from 'react';
import CustomNavbar from '../components/CustomNavbar';
// import DesignBanner from '../components/Banner/DesignBanner';
import Slider from '../components/Banner/ChatBanner';
// import Service from '../components/Service/Service';
import SupportIntegration from '../components/SupportIntegration';
import Subscribe from '../components/Subscribe';
import EventSponser from '../components/EventSponser';
import Footer from '../components/Footer/Footer';
import FooterData from '../components/Footer/FooterData';
import PriceTable from '../components/Features/HostingPlan';
import News from '../components/News';
import Video from '../components/Video';

export const Home = () => (
  <div className="body_wrapper">
    <CustomNavbar cClass="custom_container p0" hbtnClass="new_btn" />
    <Slider />
    <EventSponser />
    <Video />
    <SupportIntegration />
    {/* <PriceTable /> */}
    <News />
    <Subscribe FooterData={FooterData} />
    <Footer FooterData={FooterData} />
  </div>
);
