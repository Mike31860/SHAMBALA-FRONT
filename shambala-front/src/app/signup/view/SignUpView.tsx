import React from 'react';
import PropTypes from 'prop-types';
import SignUp from '../../../components/view/Signup';
import { NextPage } from 'next';

const SignUpView: NextPage = () => {
    return (
        <div  className="flex  place-content-start h-screen bg-gradient-to-r from-sky-500 to-indigo-500...">
       
            <SignUp/>
        </div>
    );
};



export default SignUpView;