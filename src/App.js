import React from "react";
import Particles from "react-particles-js";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import Profile from "./components/Profile/Profile";
import ImageLinkBox from "./components/ImageLinkBox/ImageLinkBox";
import FaceDetection from "./components/FaceDetection/FaceDetection";
import Signin from "./components/Signin/Signin";
import Register from "./components/Register/Register";

import Clarifai from "clarifai";
import "./App.css";

const app = new Clarifai.App({
  apiKey: "bfa999187c9d4f528dbaeb04de3bd334",
});

const particlesOptions = {
  particles: {
    number: {
      value: 50,
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 10,
      },
    },
  },
};

const initialState = {
  input: "",
  imageUrl: "",
  route: "signin",
  isSignedIn: false,
  box: {},
  user: {
    id: "",
    name: "",
    email: "",
    password: "",
    entries: "",
    joined: "",
  },
};

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (user) => {
    this.setState({ user: user });
  };

  calculateFaceBox = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  displayFaceBox = (box) => {
    this.setState({ box: box });
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input });
    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then((response) => {
        this.displayFaceBox(this.calculateFaceBox(response));
      })
      .catch((err) => console.log(err));
  };

  onRouteChange = (route) => {
    if (route === "signout") {
      this.setState(initialState);
    } else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  };

  render() {
    const { imageUrl, route, isSignedIn, box } = this.state;
    return (
      <div className="App">
        <Particles params={particlesOptions} className="particles" />
        <Navigation
          onRouteChange={this.onRouteChange}
          isSignedIn={isSignedIn}
        />
        {route === "home" ? (
          <div>
            <Logo />
            <Profile
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkBox
              onInputChange={this.onInputChange}
              onButtonSubmit={this.onButtonSubmit}
            />
            <FaceDetection imageUrl={imageUrl} box={box} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : route === "signout" ? (
          <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
        ) : (
          <Register
            loadUser={this.loadUser}
            onRouteChange={this.onRouteChange}
          />
        )}
      </div>
    );
  }
}

export default App;
