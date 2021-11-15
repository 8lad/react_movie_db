import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesList from "./routes/RoutesList";
import Header from "./components/Header/Header";
import "./App.scss";
import MainContainer from "./components/MainContainer/MainContainer";
import { Provider } from "react-redux";
import { store } from "./store";
import Theme from "./components/UI/Theme/Theme";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Theme>
          <Router>
            <MainContainer>
              <Header />
              <RoutesList />
            </MainContainer>
          </Router>
        </Theme>
      </Provider>
    </div>
  );
}

export default App;
