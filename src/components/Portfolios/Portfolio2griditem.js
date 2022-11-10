import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Portfolio2griditem extends Component {
  render() {
    var { pImg, ptitle, tOne, tTwo, colClass } = this.props;
    return (
      <div className={`portfolio_item mb-30 ${colClass} `}>
        <div className="portfolio_img">
          <img src={require('../../img/portfolio/' + pImg)} alt="" />
          <div className="hover_content">
            {/* <a href=".#" className="img_popup leaf">
              <i className="ti-plus"></i>
            </a> */}
            <div className="portfolio-description leaf">
              <a
                href="https://drive.google.com/drive/folders/1g-dfsRAEqqLAVmeO3uIxtUyjE8C0UB_s?usp=sharing"
                className="portfolio-title"
              >
                <h3 className="f_500 f_size_20 f_p">{ptitle}</h3>
              </a>
              <div className="links">
                <a href=".#">{tOne}</a>
                <a href=".#">{tTwo}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio2griditem;
