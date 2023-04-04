import React, { useEffect } from "react";

export const ButtonsHeader = ( {start}) => {

  useEffect(() => {
    //cambiar valor de check
    if (start === false) {
      document.getElementById("flexRadioDefault1").checked = true;
    }
  }, [start])
  
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
                  defaultChecked
                  disabled={start}
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
                  disabled={start}
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
                  disabled={start}
                />
              </div>
            </div>
            <div className="col-12">
            <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  className="icon-infinity"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z" />
                </svg>
              </span>
              <span className="text-col1">Infinity</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
