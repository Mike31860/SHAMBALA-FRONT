import React, { FC } from "react";
import PropTypes from "prop-types";

export type FlexProps =  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;


const Flex: FC<FlexProps> = ({  children, className, ...props }) => {
 
  return (
    <div className={[" flex-row", className].join(" ")} {...props}>
      {children}
    </div>
  );
};

export default Flex;
