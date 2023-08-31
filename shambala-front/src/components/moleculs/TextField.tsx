import React, { FC } from "react";
import PropTypes from "prop-types";
import Button from "../atoms/Button";
import Text, { SpanProps } from "../atoms/Span";
import Input, { InputProps } from "../atoms/Input";
import Label from "../atoms/Span";

interface TextField extends InputProps {
  contentProps: string;
  title: string;
  errorMessage: string;
  labelProps?: SpanProps;

}

const TextField: FC<TextField> = ({ contentProps, title, errorMessage,  labelProps,  ...props }) => {

  return (
  
      <label className={["flex flex-row gap-4 ", contentProps].join(" ")}>
        <Label {...labelProps}>{title}</Label>
        <Input {...props} />
        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
          {errorMessage}
        </p>
      </label>
 
  );
};

export default TextField;
