import React, { Component } from 'react';
import Reveal from 'react-reveal/Reveal';
class Featuresitems extends Component {
  render() {
    var { rowClass, fimage, iImg, ftitle, descriptions, aClass, flink } = this.props;
    return (
      <div className={`agency_featured_item ${rowClass} `}>
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
    );
  }
}

export default Featuresitems;
