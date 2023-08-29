import React from "react";
import PropTypes from "prop-types";
import { NextPage } from "next";
import Login from "../../../components/view/Login";

const LoginView: NextPage = () => {


      
  return (
    <div   className="flex justify-center items-center h-screen bg-gradient-to-r from-sky-500 to-indigo-500...">
      <Login />
    </div>
  );
};

export default LoginView;
