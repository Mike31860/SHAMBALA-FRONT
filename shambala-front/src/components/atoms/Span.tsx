import React, { FC } from "react";
import PropTypes from "prop-types";

 export type SpanProps =  React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Span: FC<SpanProps> = ({ children, className,   ...props }) => {
  return <span className={[" text-left block text-sm text-xl font-bold text-slate-700", className].join(" ")} {...props}>{children}</span>;
};

export default Span;
