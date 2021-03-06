import React from "react";

import Navigation from "./Navigation";

var Main = (props) => {
    return <div>
      <Navigation />
      <div className="row">
        <div className="column small-centered medium-6 large-4">
          {props.children}
        </div>
      </div>
    </div>;
};

export default Main;