import React from "react";
import TextField from "../moleculs/TextField";
import Flex from "../moleculs/Flex";
import Button from "../atoms/Button";
import { uiConfig } from '../../config/fireBaseAuthUI.config';
import firebaseApp from "../../config/firebaseApp";
import { StyledFirebaseAuth } from "react-firebaseui";
import { getAuth } from "firebase/auth";


/* import Flex from "../moleculs/Flex"; */

const Login = () => {

  const auth = getAuth(firebaseApp);
  const authConfig = uiConfig(auth);


  return (
    <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={authConfig} />
    /* <div className=" w-72 h-72 bg-white flex justify-center  place-items-center rounded-md  ...">
      <form className=" text-center rounded-md w-50 ... ">
        <Flex>
          <TextField title="Username" errorMessage="error" />
          <TextField title="Password" errorMessage="error" />
          <Button>Iniciar Session</Button>
        </Flex>
      </form>
    </div> */
  );
};

export default Login;
