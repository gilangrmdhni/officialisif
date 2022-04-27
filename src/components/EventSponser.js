import React from 'react';
import EventSponserLogo from './EventSponserLogo';

const EventSponser = () => {
  return (
    <section className="event_sponser_area sec_pad">
      <div className="container">
        {/* <div className="hosting_title security_title text-center">
          <h2>
            <span>Lovely Clients</span> Offcial Sponsors
          </h2>
        </div> */}
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Organized</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <EventSponserLogo url=".#" image="iysa.png" />
                  <EventSponserLogo url=".#" image="i3l.jpg" />
                  <EventSponserLogo url=".#" image="buca.png" />
                  {/* <EventSponserLogo url=".#" image="logo_02.png" /> */}
                </div>
              </div>
            </div>
          </div>
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Afiliation</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <EventSponserLogo url=".#" image="segi.png" />
                  <EventSponserLogo url=".#" image="redMex.jpeg" />
                  <EventSponserLogo url=".#" image="sola.jpeg" />
                  <EventSponserLogo url=".#" image="bangla.png" />
                  <EventSponserLogo url=".#" image="miica.png" />
                  <EventSponserLogo url=".#" image="milset.jpg" />
                  <EventSponserLogo url=".#" image="myso.png" />
                  {/* <EventSponserLogo url=".#" image="wiipa.png" /> */}
                  <EventSponserLogo url=".#" image="esc.jpg" />
                  <EventSponserLogo url=".#" image="gatau.jpeg" />
                  <EventSponserLogo url=".#" image="ipb.png" />
                  <EventSponserLogo url=".#" image="undip.png" />
                  <EventSponserLogo url=".#" image="akt.png" />
                  <EventSponserLogo url=".#" image="ayrid.png" />
                  <EventSponserLogo url=".#" image="logo_undiksha.png" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Gold Sponsor</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <EventSponserLogo url=".#" image="logo_09.png" />
                  <EventSponserLogo url=".#" image="logo_10.png" />
                  <EventSponserLogo url=".#" image="logo_11.png" />
                  <EventSponserLogo url=".#" image="logo_12.png" />
                  <EventSponserLogo url=".#" image="logo_05.png" />
                  <EventSponserLogo url=".#" image="logo_06.png" />
                  <EventSponserLogo url=".#" image="logo_07.png" />
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="event_sponser_item text-center">
            <a className="event_btn btn_hover wow fadeInLeft" data-wow-delay="0.9s" href="/#">
              More Sponsors
            </a>
            <a className="event_btn event_btn_two btn_hover wow fadeInRight" data-wow-delay="0.9s" href="http://wa.me/6281770914129">
              Become a Sponsors
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default EventSponser;
