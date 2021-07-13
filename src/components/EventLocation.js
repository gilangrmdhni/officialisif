import React from 'react';
import Map from './Map';
const EventLocation = () => {
  return (
    <section className="event_location_area">
      <Map />
      <div className="container">
        <div className="event_location">
          <div className="contact_info_item">
            <h6>Our Office</h6>
            <p>
              JL. RAYA PASIR PUTIH
              <br />
              Depok, Jawa Barat 16511, Indonesia.
            </p>
          </div>
          <div className="contact_info_item">
            <h6>Contact Info</h6>
            <p>
              <a href="mailto:isifofficial.iysa@gmail.com">isifofficial.iysa@gmail.com</a>
            </p>
            <p>
              <a href="tel:081770914129">+62 817-7091-4129</a>
            </p>
          </div>
          {/* <div className="f_social_icon_two">
            <a href="/#">
              <i className="ti-facebook"></i>
            </a>
            <a href="/#">
              <i className="ti-instagram"></i>
            </a>
            <a href="/#">
              <i className="ti-whatsapp-alt"></i>
            </a>
            <a href="/#">
              <i className="ti-gmail-alt"></i>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default EventLocation;
