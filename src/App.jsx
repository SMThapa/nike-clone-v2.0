import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AllRoutes } from "./routes/AllRoutes";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App

