import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class Testimonial extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-12">
            <Tabs>
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <TabPanel>
                    <div className="rn-testimonial-content text-left">
                      <div className="author-info">
                        <h6>
                          <span> Batbold Ariunbat </span> - CEO, Co-Founder
                          (Studio Director of Mondreem LLC)
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="rn-testimonial-content text-left">
                      <div className="author-info">
                        <h6>
                          <span>Batsoyombo Batchuluun </span> - CFO
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="rn-testimonial-content text-left">
                      <div className="author-info">
                        <h6>
                          <span>Abulkhair Gylymkhan </span> - CTO
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="rn-testimonial-content text-left">
                      <div className="author-info">
                        <h6>
                          <span>Ankhmaa Batchuluun </span> - Partner (CEO,
                          Co-Founder of Mondreem LLC)
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="rn-testimonial-content text-left">
                      <div className="author-info">
                        <h6>
                          <span>Luis Herrasti </span> - Co-Founder (Co-Founder
                          of Mondreem LLC)
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="rn-testimonial-content text-left">
                      <div className="author-info">
                        <h6>
                          <span>Orthi </span> - COO, AMERIMAR ENTERPRISES, INC.
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="rn-testimonial-content text-left">
                      <div className="inner">
                        <p>
                          The standard chunk of Lorem Ipsum used since the 1500s
                          is reproduced below for those interested. Sections
                          Bonorum et Malorum original.
                        </p>
                      </div>
                      <div className="author-info">
                        <h6>
                          <span>Jaffin </span> - COO, AMERIMAR ENTERPRISES, INC.
                        </h6>
                      </div>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className="rn-testimonial-content text-left">
                      <div className="inner">
                        <p>
                          Lorem Ipsum used since the 1500s is reproduced below
                          for those interested. Sections Bonorum et Malorum
                          original.
                        </p>
                      </div>
                      <div className="author-info">
                        <h6>
                          <span>JON CUMMINS </span> - COO, AMERIMAR ENTERPRISES,
                          INC.
                        </h6>
                      </div>
                    </div>
                  </TabPanel>
                </div>
                <div className="col-lg-8 mt_md--40 mt_sm--40">
                  <TabList className="testimonial-thumb-wrapper">
                    <Tab>
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <img
                            src="/assets/images/client/testimonial-1.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <img
                            src="/assets/images/client/testimonial-2.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <img
                            src="/assets/images/client/testimonial-3.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <img
                            src="/assets/images/client/testimonial-4.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </Tab>
                    <Tab>
                      <div className="testimonial-thumbnai">
                        <div className="thumb">
                          <img
                            src="/assets/images/client/testimonial-5.jpg"
                            alt="Testimonial Images"
                          />
                        </div>
                      </div>
                    </Tab>
                  </TabList>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Testimonial;
