import React from 'react';
// import Reveal from 'react-reveal';
const MarketingGetstarted = () => {
  return (
    <React.Fragment>
      <section className="intregration_area bg_color sec_pad" id="social">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row intregration_logo">
                {/* instagram */}
                <div className="col-6 intregration_item">
                  <a href="https://www.instagram.com/isif_official/" className="intregration_icon">
                    <img src={require('../img/new/instagram.png')} alt="" />
                  </a>
                </div>
                {/* facebook page  */}
                <div className="col-6 intregration_item">
                  <a href="https://www.facebook.com/groups/947919142367894" className="intregration_icon">
                    <img src={require('../img/new/fb.png')} alt="" />
                  </a>
                </div>
                {/* whatsapp */}
                <div className="col-6 intregration_item">
                  <a href="https://wa.me/6281770914129" className="intregration_icon">
                    <img src={require('../img/new/wa.png')} alt="" />
                  </a>
                </div>
                {/* gmail */}
                <div className="col-6 intregration_item">
                  <a href="mailto:isifofficial.iysa@gmail.com" className="intregration_icon">
                    <img src={require('../img/new/gmail.png')} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <div className="intregration_content">
                <h2>Our Social Media</h2>
                <p>Don't forget to follow our social media to get more update and upcoming event</p>
                <a href="https://github.com/redheet" className="btn_six slider_btn">
                  Contact Developer
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
export default MarketingGetstarted;
