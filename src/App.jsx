import React from "react";
import Header from "./assets/components/Header";
import Card from "./home/card";
import Api from "./hooks/API";
import Fotter from "./assets/components/Footer";
function App() {
  return (
    <div>
      <Header />
      <Api />
      <Card />
      <Fotter />
    </div>
  );
}

export default App;
