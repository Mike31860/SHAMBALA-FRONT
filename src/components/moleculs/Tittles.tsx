import React, { FC } from "react";
import PropTypes from "prop-types";

interface Title {
  className: string;
  title: string;
}

const Tittles: FC<Title> = ({ className, title }) => {
  return (
    <div>
      <span
        className={["block text-lg font-medium¿", className].join(
          ""
        )}
      >
        {title}
      </span>
    </div>
  );
};

Tittles.propTypes = {};

export default Tittles;
