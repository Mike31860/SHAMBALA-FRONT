"use client"


import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Login from '../page';
import LoginView from '../view/LoginView';
import { LoginUseCase } from '../../../domain/useCases/login';
import { FirebaseAuthRepository } from '../../../infrastructure/repositories/FireBaseImp';
import { LoginCredentials } from '../../../domain/useCases/login/model';


const LoginContainer = () => {

    const [tokenUser, settokenUser] = useState(null)

    const UseCase = new LoginUseCase(new FirebaseAuthRepository() );

  
    const credentials: LoginCredentials = {
        userName: "heloo",
        password: "123456"
        
    }

    async function login(){
        settokenUser(await UseCase.invoke(credentials));
    }

    return (
        <LoginView/>
    );
};

LoginContainer.propTypes = {
    
};

export default LoginContainer;