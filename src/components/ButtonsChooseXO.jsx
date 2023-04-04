import React, { useEffect, useRef } from "react";

export const ButtonsChooseXO = ({ start, changePlayer }) => {
  const value = useRef();

  const handleChange = () => {
    if (value.current.checked) {
      changePlayer(true);
    } else {
      changePlayer(false);
    }
  };

  useEffect(() => {
    //cambiar valor de check
    if (start === false) {
      value.current.checked = false;
    }
  }, [start]);

  return (
    <>
      <div className="row center container-x-o">
        <div className="col-2 center">
          <span className="text-x">X</span>
        </div>
        <div className="col-2 center">
          <div className="form-check form-switch custom-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              disabled={start}
              ref={value}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="col-2 center">
          <span className="text-o">O</span>
        </div>
      </div>
    </>
  );
};
