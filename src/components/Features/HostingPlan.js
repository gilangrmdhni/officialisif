import React, { Component } from 'react';
import Sectitle from '../Title/Sectitle';

class HostingPlan extends Component {
  constructor() {
    super();
    this.state = {
      Online: [
        {
          id: 1,
          title: 'Shipping medals, 1 medal / team and certificate for each person in the team.',
          titlePlus: 'International Participant Only Registration Fee, Students (Elementary,Secondary,University) (each participant will get only e-certificate).',
          priceList: [
            {
              id: 1,
              Categories: 'National',
              //   Vcpus: '1 vCPU',
              //   Ssd: '125 GB',
              //   Transfer: '1 TB',
              Price: 'Rp. 850.000',
              PriceS: '/team',
            },
            {
              id: 2,
              Categories: 'International',
              //   Vcpus: '2 vCPU',
              //   Ssd: '100 GB',
              //   Transfer: '2 TB',
              Price: 'Rp. 2.500.000',
              PriceS: '/team',
            },
          ],
        },
      ],
      Offline: [
        {
          id: 2,
          title: 'Online can get (fee registration, Certificate, medals and shipping fee) and Free access Rumah Riset Application for 6 months, and consultation with a mentor for 1 month ',
          titlePlus: 'Offline can get (fee registration, booth, medals and certificate) and Free access Rumah Riset Application for 6 months, and consultation with a mentor for 1 month ',
          priceList: [
            {
              id: 1,
              Categories: 'National',
              //   Vcpus: '1 vCPU',
              //   Ssd: '125 GB',
              //   Transfer: '1 TB',
              Price: 'Rp. 2.500.000',
              Excursion: '1 TB',
              PriceS: '/Team',
            },
            {
              id: 2,
              Categories: 'Offline',
              //   Vcpus: '2 vCPU',
              //   Ssd: '100 GB',
              //   Transfer: '2 TB',
              Price: 'Rp. 2.600.000',
              PriceS: '/Team',
            },
          ],
        },
      ],
      International: [
        {
          id: 3,
          title: 'Online can get (e-certificate only) & Offline can get (fee registration, booth, medals and certificate) ',
          priceList: [
            {
              id: 1,
              Categories: 'Online',
              //   Vcpus: '1 vCPU',
              //   Ssd: '125 GB',
              //   Transfer: '1 TB',
              Price: '$35 USD',
              PriceS: '/Team',
            },
            {
              id: 2,
              Categories: 'Offline',
              //   Vcpus: '2 vCPU',
              //   Ssd: '100 GB',
              //   Transfer: '2 TB',
              Price: '$300 USD',
              PriceS: '/Team',
            },
          ],
        },
      ],
    };
  }
  render() {
    return (
      <section className="h_pricing_area sec_pad">
        <div className="container">
          <Sectitle Title="Info Payment Registration" TitleP="" sClass="hosting_title text-center" />
          <div className="h_price_inner">
            <ul className="nav nav-tabs hosting_tab" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="national-tab" data-toggle="tab" href="#national" role="tab" aria-controls="national" aria-selected="true">
                  National
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="national1-tab" data-toggle="tab" href="#national1" role="tab" aria-controls="national1" aria-selected="false">
                  National+
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="inter-tab" data-toggle="tab" href="#inter" role="tab" aria-controls="inter" aria-selected="false">
                  International
                </a>
              </li>
            </ul>
            <div className="tab-content h_price_tab" id="myTabContent">
              <div className="tab-pane fade show active" id="national" role="tabpanel" aria-labelledby="national-tab">
                {this.state.National.map((post) => (
                  <React.Fragment key={post.id}>
                    <p>{post.title}</p>
                    <div className="h_price_body">
                      <div className="price_head">
                        <div className="p_head">
                          <h5>Categories</h5>
                        </div>
                        {/* <div className="p_head">
                          <h5>Vcpus</h5>
                        </div>
                        <div className="p_head">
                          <h5>Ssd disk</h5>
                        </div>
                        <div className="p_head">
                          <h5>Transfer</h5>
                        </div> */}
                        <div className="p_head">
                          <h5>Price</h5>
                        </div>
                        <div className="p_head c_width"></div>
                      </div>
                      <div className="h_price_body">
                        {post.priceList.map((list) => {
                          return (
                            <div className="h_p_list" key={list.id}>
                              <div className="h_price_item Categories" data-title="Categories">
                                <h5>{list.Categories}</h5>
                              </div>
                              {/* <div className="h_price_item" data-title="Vcpus">
                                <h5>{list.Vcpus}</h5>
                              </div>
                              <div className="h_price_item" data-title="Ssd disk">
                                <h5>{list.Ssd}</h5>
                              </div>
                              <div className="h_price_item" data-title="Transfer">
                                <h5>{list.Transfer}</h5>
                              </div> */}
                              <div className="h_price_item" data-title="Price">
                                <h5>
                                  <span>{list.Price}</span>
                                  {list.PriceS}
                                </h5>
                              </div>
                              <div className="h_price_item c_width">
                                <h5>
                                  <a href="/SignUp" className="h_price_btn">
                                    Choose Plan
                                  </a>
                                </h5>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div className="tab-pane fade show" id="national1" role="tabpanel" aria-labelledby="national1-tab">
                {this.state.National1.map((post) => (
                  <React.Fragment key={post.id}>
                    <p>{post.title}</p>
                    <p>{post.titlePlus}</p>
                    <div className="h_price_body">
                      <div className="price_head">
                        <div className="p_head">
                          <h5>Categories</h5>
                        </div>
                        {/* <div className="p_head">
                          <h5>Vcpus</h5>
                        </div>
                        <div className="p_head">
                          <h5>Ssd disk</h5>
                        </div>
                        <div className="p_head">
                          <h5>Transfer</h5>
                        </div> */}
                        <div className="p_head">
                          <h5>Price</h5>
                        </div>
                        <div className="p_head c_width"></div>
                      </div>
                      <div className="h_price_body">
                        {post.priceList.map((list) => {
                          return (
                            <div className="h_p_list" key={list.id}>
                              <div className="h_price_item Categories" data-title="Categories">
                                <h5>{list.Categories}</h5>
                              </div>
                              {/* <div className="h_price_item" data-title="Vcpus">
                                <h5>{list.Vcpus}</h5>
                              </div>
                              <div className="h_price_item" data-title="Ssd disk">
                                <h5>{list.Ssd}</h5>
                              </div>
                              <div className="h_price_item" data-title="Transfer">
                                <h5>{list.Transfer}</h5>
                              </div> */}
                              <div className="h_price_item" data-title="Price">
                                <h5>
                                  <span>{list.Price}</span>
                                  {list.PriceS}
                                </h5>
                              </div>
                              <div className="h_price_item c_width">
                                <h5>
                                  <a href="/SignUp" className="h_price_btn">
                                    Choose Plan
                                  </a>
                                </h5>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              <div className="tab-pane fade" id="inter" role="tabpanel" aria-labelledby="inter-tab">
                {this.state.International.map((post) => (
                  <React.Fragment key={post.id}>
                    <p>{post.title}</p>
                    <div className="h_price_body">
                      <div className="price_head">
                        <div className="p_head">
                          <h5>Categories</h5>
                        </div>
                        {/* <div className="p_head">
                          <h5>Vcpus</h5>
                        </div>
                        <div className="p_head">
                          <h5>Ssd disk</h5>
                        </div>
                        <div className="p_head">
                          <h5>Transfer</h5>
                        </div> */}
                        <div className="p_head">
                          <h5>Price</h5>
                        </div>
                        <div className="p_head c_width"></div>
                      </div>
                      <div className="h_price_body">
                        {post.priceList.map((list) => {
                          return (
                            <div className="h_p_list" key={list.id}>
                              <div className="h_price_item Categories" data-title="Categories">
                                <h5>{list.Categories}</h5>
                              </div>
                              {/* <div className="h_price_item" data-title="Vcpus">
                                <h5>{list.Vcpus}</h5>
                              </div>
                              <div className="h_price_item" data-title="Ssd disk">
                                <h5>{list.Ssd}</h5>
                              </div>
                              <div className="h_price_item" data-title="Transfer">
                                <h5>{list.Transfer}</h5>
                              </div> */}
                              <div className="h_price_item" data-title="Price">
                                <h5>
                                  <span>{list.Price}</span>
                                  {list.PriceS}
                                </h5>
                              </div>
                              <div className="h_price_item c_width">
                                <h5>
                                  <a href="/SignUp" className="h_price_btn">
                                    Choose Plan
                                  </a>
                                </h5>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
              {/* <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                {this.state.General.map((post) => (
                  <React.Fragment key={post.id}>
                    <p>{post.title}</p>
                    <div className="h_price_body">
                      <div className="price_head">
                        <div className="p_head">
                          <h5>Categories</h5>
                        </div>
                        <div className="p_head">
                          <h5>Vcpus</h5>
                        </div>
                        <div className="p_head">
                          <h5>Ssd disk</h5>
                        </div>
                        <div className="p_head">
                          <h5>Transfer</h5>
                        </div>
                        <div className="p_head">
                          <h5>Price</h5>
                        </div>
                        <div className="p_head c_width"></div>
                      </div>
                      <div className="h_price_body">
                        {post.priceList.map((list) => {
                          return (
                            <div className="h_p_list" key={list.id}>
                              <div className="h_price_item Categories" data-title="Categories">
                                <h5>{list.Categories}</h5>
                              </div>
                              <div className="h_price_item" data-title="Vcpus">
                                <h5>{list.Vcpus}</h5>
                              </div>
                              <div className="h_price_item" data-title="Ssd disk">
                                <h5>{list.Ssd}</h5>
                              </div>
                              <div className="h_price_item" data-title="Transfer">
                                <h5>{list.Transfer}</h5>
                              </div>
                              <div className="h_price_item" data-title="Price">
                                <h5>
                                  <span>{list.Price}</span>
                                  {list.PriceS}
                                </h5>
                              </div>
                              <div className="h_price_item c_width">
                                <h5>
                                  <a href="/#" className="h_price_btn">
                                    Choose Plan
                                  </a>
                                </h5>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default HostingPlan;
