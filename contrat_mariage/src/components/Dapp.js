import React from "react";
import CreateMariage from "./CreateMariage";
// import Divorcer from "./Divorcer";
// import InscrireEnfant from "./InscrireEnfant";

class Dapp extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <CreateMariage />
          </div>
          {/* <div className="col">
            <Divorcer />
          </div>
          <div className="col">
            <InscrireEnfant />
          </div> */}
        </div>
      </div>
    );
  }
}

export default Dapp;