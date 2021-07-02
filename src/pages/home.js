import moment from "moment";
import React, { Component } from "react";
import { users, colors } from '../constants';

export default class Home extends Component {
  
  // User Images Code.
  getImages(imageName) {
    const context = require.context('../assets/images/', true);
    const image = context(`./${imageName}.png`);
    return <img
      className="w-100"
      src={`${image.default}`}
      alt={imageName}
    />;
  }
  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {users && users.map((el, i) => (
            <div className={`col-12 col-md-6 col-lg-6 col-xl-4 mb-4 ${el.name.split(' ')[0].toLowerCase()}`} key={i}>
              {/* Member Card */}
              <div className="Member-card member-card-background rounded-12 p-3">
                <div className="Member position-relative d-flex flex-column justify-content-center align-items-center">
                  {/* Member Image code */}
                  <div className="Member-Image">
                    {this.getImages(el.name.split(' ')[0].toLowerCase())}
                  </div>
                  {/* Member Image code */}
                  <div className="Member-Name position-absolute bottom-0 filter-shadow">
                    <span
                      className={`name ${colors[i].color} width-250 p-2 d-flex justify-content-center fs-2 fw-bolder font-bangers letter-spacing-2 border border-2 border-dark border-start-0 shape shape-mirror`}
                      style={{ color: colors[i].title_font_color }}
                    >
                      {el.name}
                    </span>
                  </div>
                </div>
                {/* Member Details code */}
                <div className="Member-Details mt-4">
                  <div className="row">
                    <div className="col-12 col-md-12 col-lg-8  z-index-1040">
                      <div className="Skills">
                        <ul className="p-0">
                          <li className="d-flex justify-content-between margin-bottom-10">
                            <div className="filter-shadow min-width-137 Skill-Name">
                              <label className={`${colors[i].stats_color} d-flex justify-content-left font-size-15 font-comic border border-2 border-dark border-end-0 shape fw-bold py-1 pe-4 ps-1 fst-italic`} style={{ color: colors[i].stats_font_color }}>
                                Time Alive ...
                              </label>
                            </div>
                            <div className="filter-shadow min-width-80">
                              <span className="bg-white d-flex justify-content-left font-size-15 font-bangers border border-2 border-dark border-start-0 shape shape-reverse fw-bold letter-spacing-2 py-1 px-2">
                                {moment(el.dob).format('YY')}Y {moment(el.dob).format('M')}M {moment(el.dob).format('DD')}D
                              </span>
                            </div>
                          </li>
                          <li className="d-flex justify-content-between  margin-bottom-10">
                            <div className="filter-shadow min-width-137 Skill-Name">
                              <label className={`${colors[i].stats_color} d-flex justify-content-left font-size-15 font-comic border border-2 border-dark border-end-0 shape fw-bold py-1 pe-4 ps-1 fst-italic`} style={{ color: colors[i].stats_font_color }}>
                                Technology ...
                              </label>
                            </div>
                            <div className="filter-shadow min-width-80">
                              <span className="bg-white d-flex justify-content-left font-size-15 font-bangers border border-2 border-dark border-start-0 shape shape-reverse fw-bold letter-spacing-2 py-1 px-2">
                                {el.stats.technology}
                              </span>
                            </div>
                          </li>
                          <li className="d-flex justify-content-between  margin-bottom-10">
                            <div className="filter-shadow min-width-137 Skill-Name">
                              <label className={`${colors[i].stats_color} d-flex justify-content-left font-size-15 font-comic border border-2 border-dark border-end-0 shape fw-bold py-1 pe-4 ps-1 fst-italic`} style={{ color: colors[i].stats_font_color }}>
                                Strength ...
                              </label>
                            </div>
                            <div className="filter-shadow min-width-80">
                              <span className="bg-white d-flex justify-content-left font-size-15 font-bangers border border-2 border-dark border-start-0 shape shape-reverse fw-bold letter-spacing-2 py-1 px-2">
                                {el.stats.strength}
                              </span>
                            </div>
                          </li>
                          <li className="d-flex justify-content-between margin-bottom-10">
                            <div className="filter-shadow min-width-137 Skill-Name">
                              <label className={`${colors[i].stats_color} d-flex justify-content-left font-size-15 font-comic border border-2 border-dark border-end-0 shape fw-bold py-1 pe-4 ps-1 fst-italic`} style={{ color: colors[i].stats_font_color }}>
                                Special Powers ...
                              </label>
                            </div>
                            <div className="filter-shadow min-width-80">
                              <span className="bg-white d-flex justify-content-left font-size-15 font-bangers border border-2 border-dark border-start-0 shape shape-reverse fw-bold letter-spacing-2 py-1 px-2">
                                {el.stats.special_powers}
                              </span>
                            </div>
                          </li>
                          <li className="d-flex justify-content-between margin-bottom-10">
                            <div className="filter-shadow min-width-137 Skill-Name">
                              <label className={`${colors[i].stats_color} d-flex justify-content-left font-size-15 font-comic border border-2 border-dark border-end-0 shape fw-bold py-1 pe-4 ps-1 fst-italic`} style={{ color: colors[i].stats_font_color }}>
                                Loyalty ...
                              </label>
                            </div>
                            <div className="filter-shadow min-width-80">
                              <span className="bg-white d-flex justify-content-left font-size-15 font-bangers border border-2 border-dark border-start-0 shape shape-reverse fw-bold letter-spacing-2 py-1 px-2">
                                {el.stats.loyalty}
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-4 position-relative z-index-1020 d-flex align-items-center">
                      <div className={`Member-Description ${colors[i].description_color} w-100 p-2 ps-3 position-absolute minus-left-20`} style={{ color: colors[i].description_font_color }}>
                        <p className="m-0 font-comic fw-bold font-size-14 lh-sm">
                          {el.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Member Details Code End */}
              </div>
              {/* Member Card End */}
            </div>
          ))}
        </div>
      </div>
    );
  }
};
