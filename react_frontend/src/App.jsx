import { useState } from "react";
import Header from "./assets/components/header/navbar.jsx";
import Footer from "./assets/components/footer/footer.jsx";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
