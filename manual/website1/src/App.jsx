import React, { Component } from "react";
import { ExternalComponent } from "webpack-external-import";
import HelloWorld from "./components/goodbye-world";
import "react-select";
import { Form } from "tiny-mobx-form";
import lodash from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleUrl: null,
      manifestLoaded: false,
      loaded: false
    };

    console.log("Tree Shake Form", Form);
  }

  render() {
    return (
      <div>
        <HelloWorld />

        <ExternalComponent
          interleave={__webpack_require__.interleaved(
            "website-2/TitleComponent"
          )}
          export="Title"
          title="Some Heading112"
        />

        <ExternalComponent
          interleave={__webpack_require__.interleaved(
            "website-3/TitleComponentWithCSSFile"
          )}
          export="Title"
          title="Title Component With CSS File Import333"
        />
      </div>
    );
  }
}

export default App;
