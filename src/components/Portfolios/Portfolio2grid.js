import React, { Component } from 'react';
// import Isotope from 'isotope-layout/js/isotope';
// import ImagesLoaded from 'imagesloaded/imagesloaded';
import GirdVideo from './GriditemVideo';

class Portfolio2grid extends Component {
  //   state = {
  //     activeItem: '*',
  //   };

  //   componentDidMount() {
  //     var imgLoad = new ImagesLoaded('#work-portfolio');

  //     imgLoad.on('progress', function (instance, image) {
  //       this.iso = new Isotope('#work-portfolio', {
  //         itemSelector: '.portfolio_item',
  //         layoutMode: 'masonry',
  //       });
  //     });
  //   }
  //   onFilterChange = (newFilter) => {
  //     this.setState({ activeItem: newFilter });
  //     if (this.iso === undefined) {
  //       this.iso = new Isotope('#work-portfolio', {
  //         itemSelector: '.portfolio_item',
  //         layoutMode: 'masonry',
  //       });
  //     }

  //     // this.iso.arrange({ filter: newFilter });
  //     if (newFilter === '*') {
  //       this.iso.arrange({ filter: `*` });
  //     } else {
  //       this.iso.arrange({ filter: `.${newFilter}` });
  //     }
  //   };

  //   onActive = (v) => (v === this.state.activeItem ? 'active' : '');

  render() {
    return (
      <section className="portfolio_area sec_pad bg_color">
        <div className="container">
          <div className="row portfolio_gallery mb_30" id="work-portfolio">
            <GirdVideo colClass="col-lg-6" pImg="2022.jpg" vLink="/" vT="ISIF VIDEO" tDesc="description" />
            <GirdVideo colClass="col-lg-6" pImg="2022.jpg" vLink="/" vT="ISIF VIDEO" tDesc="description" />
            <GirdVideo colClass="col-lg-6" pImg="2022.jpg" vLink="/" vT="ISIF VIDEO" tDesc="description" />
            <GirdVideo colClass="col-lg-6" pImg="2022.jpg" vLink="/" vT="ISIF VIDEO" tDesc="description" />
            <GirdVideo colClass="col-lg-6" pImg="2022.jpg" vLink="/" vT="ISIF VIDEO" tDesc="description" />
            <GirdVideo colClass="col-lg-6" pImg="2022.jpg" vLink="/" vT="ISIF VIDEO" tDesc="description" />
            <GirdVideo colClass="col-lg-6" pImg="2022.jpg" vLink="/" vT="ISIF VIDEO" tDesc="description" />
            <GirdVideo colClass="col-lg-6" pImg="2022.jpg" vLink="/" vT="ISIF VIDEO" tDesc="description" />
          </div>
        </div>
      </section>
    );
  }
}
export default Portfolio2grid;
