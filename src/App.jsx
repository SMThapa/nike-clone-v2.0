import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  axios.get("https://nike-api-8y6m.onrender.com/api")

  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App

