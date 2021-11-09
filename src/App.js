import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404/Page404";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignInPage from "./pages/SignInPage/SignInPage";
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
              <Routes>
                <Route exact path="/" />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/favorites" />
                <Route path="/userpage" />
                <Route path="/movies" />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </MainContainer>
          </Router>
        </Theme>
      </Provider>
    </div>
  );
}

export default App;
