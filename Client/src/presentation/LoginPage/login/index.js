import { Flex} from "@chakra-ui/core";
import React, { useState } from 'react';
import './style.scss';
import {randomInt} from '../../../utils/utils'
import classnames from 'classnames'
import { RightDiv } from "./RightDiv";
import { LeftDiv } from "./LeftDiv";
import { Route } from "react-router-dom";
import RegisterSuccess from "../RegisterSuccess";


const propTypes = {
    
}

export function getSecurityImage() {

    const securityRiskImageMale = <div className="security-risk-image-male" />
    
    const securityRiskImageFemale = <div className="security-risk-image-female" />
    
    const securityRiskImages = [ securityRiskImageMale, securityRiskImageFemale ]
    
    return securityRiskImages[randomInt(0,2)];
}

function LoginContainer({type}) {
    console.log("Debug: LoginContainer -> type", type)
    return <Flex className="login-container-background" w="100%" h="100%" align="center" justify="center">

        <Flex borderRadius="60px" className="login-container" overflow="hidden">

            <div className={classnames("round-image-login", type)}></div>

            <LeftDiv type={type} />

            <RightDiv type={type} />

        </Flex>

    </Flex>;
}

function Login(props) {

    const {match} = props;
    console.log("Debug: Login -> props", props)

    const type = match.path.includes("/register") 
                ? 'register' : 'login';

    

    return (

        <React.Fragment>
            
            { <Route path={match.url + '/success'} component={RegisterSuccess}/>}

            <Route 
                exact path={match.url} 
                render={routeProps => (<LoginContainer {...routeProps} type={type} />)} />

        </React.Fragment>
    )
}

Login.propTypes = propTypes

export default Login



