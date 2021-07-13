import React from 'react';

const CoreFeatures = () => {
  return (
    <section className="chat_core_features_area sec_pad">
      <div className="container">
        <div className="hosting_title chat_title text-center"></div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp">
              <div className="round">
                <div className="round_circle"></div>
                <img className="top_img p_absoulte" src={require('../../img/home-chat/pluse.png')} alt="" />
                <img src={require('../../img/home-chat/chat.png')} alt="" />
              </div>
              <a href="#social">
                <h4>Simlify communications</h4>
              </a>
              <p>TSimple and easy to chat with us using social media.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.2s">
              <div className="round">
                <div className="round_circle two"></div>
                <img className="top_img p_absoulte" src={require('../../img/home-chat/triangle.png')} alt="" />
                <img src={require('../../img/home-chat/mobile.png')} alt="" />
              </div>
              <a href=".#">
                <h4>Quick Responce</h4>
              </a>
              <p>Our team is fast and responsive in responding during working hours</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.4s">
              <div className="round">
                <div className="round_circle three"></div>
                <img className="top_img p_absoulte" src={require('../../img/home-chat/box.png')} alt="" />
                <img src={require('../../img/home-chat/book.png')} alt="" />
              </div>
              <a href=".#">
                <h4>Easy Report</h4>
              </a>
              <p>You can report problems in registration or anything that happens to our events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreFeatures;
