import React, { createContext } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { MainHome } from "../components/MainHome";





export function Home() {

  return (
    <>
      <Header />

      <MainHome />

      <Footer />
    </>
  )


}
