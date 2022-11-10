import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Portfolio2griditem extends Component {
  render() {
    var { pImg, vLink, tDesc, vT, colClass } = this.props;
    return (
      <div className={`portfolio_item mb-30 ${colClass} `}>
        <div className="portfolio_img">
          <img src={require('../../img/portfolio/' + pImg)} alt="" />
          <div className="hover_content">
            <a href={vLink} className="img_popup leaf">
              <i className="ti-eye"></i>
            </a>
            <div className="portfolio-description leaf">
              <a href={vLink} className="portfolio-title">
                <h3 className="f_500 f_size_20 f_p">{vT}</h3>
              </a>
              <div className="links">
                <a href={vLink}>{tDesc}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio2griditem;
