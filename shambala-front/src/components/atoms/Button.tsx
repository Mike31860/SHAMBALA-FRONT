import React, { FC } from "react";
import { NextPage } from "next";
import PropTypes from "prop-types";


type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: FC<ButtonProps> = ({ children , className, ...props }) => {
  return <button  className={["w-36 h-11 rounded-full  bg-indigo-500  ...", className].join(" ")} {...props} >{children}</button>;
};

export default Button;
