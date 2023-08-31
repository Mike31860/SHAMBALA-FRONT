import React, { FC } from "react";
import PropTypes from "prop-types";
import { join } from "path";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ className, ...props }) => {
 

  return <input className={["rounded-full text-black px-3   border-2 border-sky-500  placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500", className].join(" ")} {...props} />;
};

export default Input;
