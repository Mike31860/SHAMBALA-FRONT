import React from "react";
import PropTypes from "prop-types";
import Flex from "../moleculs/Flex";
import TextField from "../moleculs/TextField";
import Button from "../atoms/Button";
import Label from "../atoms/Span";
const SignUp = () => {
  return (
    <div className=" flex flex-col  gap-4 justify-center  place-items-center rounded-lg w-96 h-96 bg-white   ...">
      <Label>{"Registre su usuario"}</Label>
      <form className=" text-center rounded-md  ...">
        <Flex className="flex flex-col  flex-nowrap">
          <Flex className="flex flex-row gap-2">
            <TextField
              labelProps={{ className: "" }}
              title="Nombre"
              errorMessage="error"
            />
            <TextField title="Apellido" errorMessage="error" />
          </Flex>
          <Flex className="flex flex-row gap-2">
            <TextField
              title="Fecha Nacimiento"
              errorMessage="error"
              type="date"
              className=" text-black" 
            />
            <TextField title="Correo" errorMessage="error" type="email" />
          </Flex>
          <Flex className="flex flex-row gap-2 items-center">
            <TextField title="Contraseña" errorMessage="error" type="password"   />
            <TextField
              title="Confirmar contraseña"
              errorMessage="error"
              type="password"
            />
          </Flex>
          <div>
            <Button>Registrarse</Button>
          </div>
        </Flex>
      </form>
    </div>
  );
};

export default SignUp;
