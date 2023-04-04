import React from "react";

export const ButtonsHeader = () => {
  return (
    <>
      <div className="row container-mod-game">
        <div className="col">
          <div className="row">
            <div className="col-12 center">
              <div className="form-check">
                <input
                  className="form-check-input check"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
              </div>
            </div>
            <div className="col-12">
              <span className="text-col1">2 wins</span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-12 center">
              <div className="form-check">
                <input
                  className="form-check-input check"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                />
              </div>
            </div>
            <div className="col-12">
              <span className="text-col2">4 wins</span>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col-12 center">
              <div className="form-check">
                <input
                  className="form-check-input check"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                />
              </div>
            </div>
            <div className="col-12">
              <span className="text-col1">Infinity</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
