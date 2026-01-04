import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer";
import { AuthContext } from "../Context/AuthContext";
import Loadingspinner from "../Components/Loadingspinner";



const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  const navigation = useNavigation();
  const inPageLoading = navigation.state === "loading";
  return (
    <div className="bg-gray-50">
      <Navbar />

      {loading || inPageLoading ? <Loadingspinner /> : <Outlet  />}

      <Footer />
    </div>
  );
};

export default MainLayout;
