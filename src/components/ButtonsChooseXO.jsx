import React from 'react'

export const ButtonsChooseXO = () => {
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
              />
            </div>
          </div>
          <div className="col-2 center">
            <span className="text-o">O</span>
          </div>
        </div>
    </>
  )
}
