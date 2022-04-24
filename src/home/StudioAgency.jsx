import React, { Component, Fragment } from "react";

import Header from "../component/header/Header";
import FooterTwo from "../component/footer/FooterTwo";
import { videoTagString, VideoTag } from "react-video-tag";
import Helmet from "../component/common/Helmet";
import Testimonial from "../elements/Testimonial";
import DateCountdown from "react-date-countdown-timer";
import { FaHeart } from "react-icons/fa";

videoTagString({
  src: "/assets/images/service/video.mp4",
  poster: "/assets/images/bg/bg-image-24.jpg",
});

class StudioAgency extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }
  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    return (
      <Fragment>
        <Helmet pageTitle="Enterior" />
        {/* Start Header Area  */}
        <Header />
        {/* End Header Area  */}
        <div
          style={{
            height: "100vh",
            backgroundColor: "#FFF",
            marginTop: "120px",
          }}
        >
          <div className="countdown">
            <DateCountdown
              dateTo="May 31, 2022 00:00:00 GMT+03:00"
              callback={() => console.log("done")}
            />
          </div>
        </div>

        <div className="slider-wrapper">
          <div className="video-background" style={{ width: "100%" }}>
            <VideoTag
              width="100%"
              autoPlay={`${true}`}
              muted={`${true}`}
              playsInline={`${true}`}
              loop={`${true}`}
              src={`${"/assets/images/service/landing.mp4"}`}
              poster={`${"/assets/images/bg/bg-image-24.jpg"}`}
            />
          </div>
        </div>

        <div className="rn-team-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--25 mb_sm--0">
                  <h2 className="title">Design Library</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="library__main">
            <div className="library__column">
              <div style={{ display: "flex", gap: 20 }}>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_1.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Black It Is Bedroom</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_2.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Moodsy Small Bedroom</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
              </div>
              <div className="library__big-card">
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_1.png"
                    className="library__column-image"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <div className="library__card">
                    <img
                      src="/assets/images/grid/grid_3.png"
                      className="library__column-image"
                    />
                    <p className="library__title">B House Dining</p>
                    <a className="library__heart">
                      <FaHeart />
                    </a>
                  </div>
                  <div className="library__card">
                    <img
                      src="/assets/images/grid/grid_4.png"
                      className="library__column-image"
                    />
                    <p className="library__title">B Main Area</p>
                    <a className="library__heart">
                      <FaHeart />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="library__column">
              <div style={{ display: "flex", gap: 20 }}>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_5.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Moodsy</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_6.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Hidden Hills Living Area</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
              </div>
              <div
                className="library__card"
                style={{ width: "calc(50% - 20px)" }}
              >
                <img
                  src="/assets/images/grid/grid_6.png"
                  className="library__column-image"
                />
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_7.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Moodsy Bedroom</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_8.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Hell's Kitchen</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
              </div>
            </div>
            <div className="library__column">
              <div style={{ display: "flex", gap: 20 }}>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_9.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Hidden Hills Bedroom</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_10.png"
                    className="library__column-image"
                  />
                  <p className="library__title">La Valentina Bedroom</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
              </div>

              <div style={{ display: "flex", gap: 20 }}>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_11.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Nergu Main Area</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_12.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Black It Is Living Area</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 20 }}>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_13.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Nergu Kitchen</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
                <div className="library__card">
                  <img
                    src="/assets/images/grid/grid_14.png"
                    className="library__column-image"
                  />
                  <p className="library__title">Hell's Kitchen Bedroom</p>
                  <a className="library__heart">
                    <FaHeart />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Start Team Area  */}
        <div className="rn-team-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--25 mb_sm--0">
                  <h2 className="title">Services</h2>
                </div>
                <div className="services__main_title">For clients</div>
                <div className="services__row">
                  <div className="services__card">
                    <img
                      src="/assets/images/services/client_1.png"
                      className="services__icon"
                    />
                    <p className="services__title">Choose</p>
                    <p className="services__description">
                      from the Enterior library of interior design of the best
                      designers and firms from around the world and send us the
                      dimensions of your space through our mobile scanning tools
                    </p>
                  </div>
                  <div className="services__card">
                    <img
                      src="/assets/images/services/client_2.png"
                      className="services__icon"
                    />
                    <p className="services__title">Offline scene</p>
                    <p className="services__description">
                      of your project that can be played on the platform of your
                      choosing whether PC, XBOX, or Playstation
                    </p>
                  </div>
                  <div className="services__card">
                    <img
                      src="/assets/images/services/client_3.png"
                      className="services__icon"
                    />
                    <p className="services__title">Online scene</p>
                    <p className="services__description">
                      of your project in the highest graphic quality playable on
                      your web browser and even your phone regardless of your
                      hardware specs
                    </p>
                  </div>
                  <div className="services__card">
                    <img
                      src="/assets/images/services/client_4.png"
                      className="services__icon"
                    />
                    <p className="services__title">Photoreal renders</p>
                    <p className="services__description">
                      of your project available to view and download whenever
                      you want
                    </p>
                  </div>
                  <div className="services__card">
                    <img
                      src="/assets/images/services/client_5.png"
                      className="services__icon"
                    />
                    <p className="services__title">Promo video</p>
                    <p className="services__description">
                      as an optional service for your project's needs
                    </p>
                  </div>
                </div>
                <div className="services__main_title">For designers</div>
                <div className="services__row">
                  <div className="services__card">
                    <img
                      src="/assets/images/services/designer_1.png"
                      className="services__icon"
                    />
                    <p className="services__title">Upload</p>
                    <p className="services__description">
                      your interior design work and open paths to endless
                      monetization and global recognition
                    </p>
                  </div>
                  <div className="services__card">
                    <img
                      src="/assets/images/services/designer_2.png"
                      className="services__icon"
                    />
                    <p className="services__title">Production</p>
                    <p className="services__description">
                      of your projects to populate Enterior's vast design
                      library available for everyone around the world
                    </p>
                  </div>
                  <div className="services__card">
                    <img
                      src="/assets/images/services/designer_3.png"
                      className="services__icon"
                    />
                    <p className="services__title">Marketing</p>
                    <p className="services__description">
                      to promote and feature your amazing work of art to our
                      cliens 24/7
                    </p>
                  </div>
                  <div className="services__card">
                    <img
                      src="/assets/images/services/designer_4.png"
                      className="services__icon"
                    />
                    <p className="services__title">Distribution</p>
                    <p className="services__description">
                      of your work to various clients whether home owners,
                      developers, or real estate companies
                    </p>
                  </div>
                  <div className="services__card">
                    <img
                      src="/assets/images/services/designer_5.png"
                      className="services__icon"
                    />
                    <p className="services__title">25% royalty</p>
                    <p className="services__description">
                      for every successful sale of your project and cash out at
                      the end of every month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Team Area  */}
        <div className="rn-team-area ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center mb--25 mb_sm--0">
                  <h2 className="title">The Team</h2>
                </div>
              </div>
            </div>
            <Testimonial />
          </div>
        </div>
        {/* End Team Area  */}

        {/* Start Footer Area  */}
        <FooterTwo />
        {/* End Footer Area  */}
      </Fragment>
    );
  }
}
export default StudioAgency;
