import React from 'react';
import Sectitle from '../components/Title/Sectitle';

const video = () => {
  return (
    <>
    <section className="video_area bg_color sec_pad">
      <div className="container">
        <Sectitle
          Title="How to register?"
          tClass="t_color3"
          sClass="sec_title text-center mb_70"
        />
        <div className="video_content">
          <div className="video_info">
            <div className="ovarlay_color"></div>
            <a className="popup-youtube video_icon" href="https://www.youtube.com/watch?v=YHQVYtiiCC0">
              <i className="arrow_triangle-right"></i>
            </a>
            <h2>ISIF</h2>
          </div>
          <img className="video_leaf" src={require('../img/new/leaf.png')} alt="" />
          <img className="cup" src={require('../img/new/cup.png')} alt="" />
        </div>
      </div>
    </section>

    <section className="video_area bg_color sec_pad">
      <div className="container">
        <Sectitle
          Title="After you register"
          tClass="t_color3"
          sClass="sec_title text-center mb_70"
        />
        <div className="video_content">
          <div className="video_info">
            <div className="ovarlay_color"></div>
            <a className="popup-youtube video_icon" href="https://www.youtube.com/watch?v=YBhdvQ1p5xQ">
              <i className="arrow_triangle-right"></i>
            </a>
            <h2>ISIF</h2>
          </div>
          <img className="video_leaf" src={require('../img/new/leaf.png')} alt="" />
          <img className="cup" src={require('../img/new/cup.png')} alt="" />
        </div>
      </div>
    </section>
    </>
  );
};

export default videoProcces;