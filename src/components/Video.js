import React from 'react';
import Sectitle from '../components/Title/Sectitle';

const video = () => {
  return (
    <section className="video_area bg_color sec_pad">
      <div className="container">
        <Sectitle
          Title="AFTER EVENT"
          TitleP="This event was joined by multiple countries such as Germany, Turkey, Turkmenistan, Thailand, Philippines, Vietnam, Malaysia, and of course, Indonesia. It was a melting pot of diversity and creativity, place where we can express ourselves."
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
  );
};

export default video;
