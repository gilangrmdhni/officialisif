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
            <a href="https://drive.google.com/drive/folders/195oPkTAYTc3JriGHXibKFtN0uUJCB_Er?usp=sharing" className="software_banner_btn btn_submit f_size_15 f_500">
              Download
            </a>
          </div>
          <div className="support_item">
            <img src={require('../../img/new-home/extended.png')} alt="" />
            <h4>Example Extended Abstract</h4>
            <a href="https://drive.google.com/drive/folders/1y0MEwFp17T6lxakILhS4cVHoZBq9t4fE?usp=sharing" className="software_banner_btn btn_submit f_size_15 f_500">
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportItem;
