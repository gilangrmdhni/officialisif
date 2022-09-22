import React, { Component } from 'react';
import Sectitle from './Title/Sectitle';

class SupportIntegration extends Component {
  constructor() {
    super();
    this.state = {
      integrationItem: [
        {
          id: 100,
          iImage: 'mathematics.png',
          text: 'MATHEMATICS',
        },
        {
          id: 101,
          iImage: 'physics.png',
          text: 'PHYSICS, ENERGY & ENGINEERING',
        },
        {
          id: 102,
          iImage: 'science.png',
          text: 'LIFE SCIENCE',
        },
        {
          id: 103,
          iImage: 'cpu.png',
          text: 'TECHNOLOGY',
        },
        {
          id: 104,
          iImage: 'enviromental.png',
          text: 'ENVIRONMENT',
        },
        {
          id: 105,
          iImage: 'social-science.png',
          text: 'SOCIAL SCIENCE',
        },
        {
          id: 106,
          iImage: 'education.png',
          text: 'EDUCATION',
        },
      ],
    };
  }

  render() {
    return (
      <section className="support_integration_area" id="categories">
        <div className="container">
          <Sectitle
            sClass="sec_title text-center mb_70"
            Title="Event Categories"
            TitleP="Join our event and select your categories"
          />
          <div className="row flex-row-reverse">
            <div className="col-lg-9 col-md-10 col-sm-12">
              <div className="row">
                {this.state.integrationItem.map(
                  (post) => (
                    <div
                      className="col-lg-4 col-md-4 col-sm-6"
                      key={post.id}
                    >
                      <a
                        href="/#"
                        className="s_integration_item"
                      >
                        <img
                          src={require('../img/new-home/' +
                            post.iImage)}
                          alt=""
                        />
                        <h5>{post.text}</h5>
                      </a>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="col-lg-3 col-md-2 col-sm-12">
              <img
                className="integration_img"
                src={require('../img/new-home/tree.png')}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default SupportIntegration;
