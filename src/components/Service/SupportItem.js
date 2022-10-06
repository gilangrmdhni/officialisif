import React from 'react';

const SupportItem = () => {
  return (
    <section className="support_help_area sec_pad" id="guide">
      <div className="container">
        <h2 className="f_p f_size_30 l_height50 f_600 t_color text-center wow fadeInUp mb_60">Download document!</h2>
        <div className="d-flex">
          <div className="support_item">
            <img src={require('../../img/new-home/guide.png')} alt="" />
            <h4>Guide Book</h4>
            <a href="https://drive.google.com/file/d/1ilWuOn5-sOq2yY7S-vD5WyEc53S1RS4N/view" className="software_banner_btn btn_submit f_size_15 f_500">
              Download
            </a>
          </div>
          <div className="support_item">
            <img src={require('../../img/new-home/extended.png')} alt="" />
            <h4>Example Extended Abstract</h4>
            <a href="https://drive.google.com/file/d/1ilWuOn5-sOq2yY7S-vD5WyEc53S1RS4N/edit?disco=AAAAgqC82Cc" className="software_banner_btn btn_submit f_size_15 f_500">
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportItem;
