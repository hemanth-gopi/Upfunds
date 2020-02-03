import { Button, Flex, FormControl, Heading, Input, InputRightElement, PseudoBox, InputGroup, IconButton, Link, Text } from "@chakra-ui/core";
import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import {Link as RouterLink} from 'react-router-dom';
import classnames from 'classnames';
import { getSecurityImage } from "./index";

import axios from "axios";

export function RightDiv(props) {
    const [show, setShow] = useState(false);

    const [isSubmitting,setIsSubmitting] = useState(false);

    const [username, setUsername] = useState('');

    const [email, setEmail] = useState('');

    const [name , setName] = useState('');

    const [password, setPassword] = useState('')
    
    const handleClick = () => setShow(!show);
    
    const { type } = props;
    
    const isLogin = type === "login";

    const isRegister = type === "register";



    const textContent = {
        login: {
            header: "Sign In",
            footer: "Don't have an account?",
            action: "/login"
        },
        register: {
            header: "Register",
            footer: "Already have an account?",
            action: "/register"
        }
    };

    function onSubmit(values) {
        setIsSubmitting(true);       
      }
    
    return (<Flex className="right-div" w="50%" h="100%" bg="white" justify="center" align="center" flexDirection="column" position="relative">

        <div className={classnames("square-login-image", type)} />

        {show ? getSecurityImage() : null}

        <PseudoBox>

            <Heading fontFamily=" 'Muli', sans-serif" fontWeight="800" mb="10px" fontSize="28px" color="#3281FE">{textContent[type]["header"]}</Heading>

            <div className="login-right-hr" width="30px" height="5px" mr="auto" ml="15px" height="3px" bg="#3281FE"></div>

        </PseudoBox>


        <form action={ textContent[type]["action"] } method="post" className="right-form-container" >
            
            <FormControl onSubmit={onSubmit} isRequired position="relative" padding="30px" paddingTop="10px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">

                {isRegister && <Input name="name" id="fname" value={name} onChange={ event => setName(event.target.value)} className="login-input-box" placeholder="First name" />}

                <Input id="uname" name="username" value={username} onChange={ event => setUsername(event.target.value)} className="login-input-box" placeholder="User name" />

                {isRegister && <Input id="email" name="email" value={email} onChange={ event => setEmail(event.target.value)} className="login-input-box" placeholder="Email address" type='email'/>}

                <InputGroup size="md" width="100%">
                    
                    <Input name="password" value={password} onChange={ event => setPassword(event.target.value)} className="login-input-box" type={show ? "text" : "password"} id="pword" placeholder="Password" />
                    
                    <InputRightElement width="4.5rem" top="50%" transform="translateY(-50%)">
                        
                        <IconButton backgroundColor="transparent" name="view" h="1.75rem" border="none" size="sm" onClick={handleClick} icon={show ? FiEyeOff : FiEye}>
                        
                        </IconButton>
                    
                    </InputRightElement>
                
                </InputGroup>

                <Button id="login-btn" type="submit" variantColor="#3281FE" marginTop="20px" borderRadius="40px" padding="5px 60px">{textContent[type]["header"]}</Button>

            </FormControl>
        </form>

        <PseudoBox display="flex" justifyContent="space-between" width="100%" alignItems="center" padding="0 90px" boxSizing="border-box">

            <Text>{textContent[type]["footer"]} </Text>

            <RouterLink className="register-btn" to={isLogin ? "/register" : "/login"}> 
                {textContent[isLogin ? "register" : "login"]["header"]}
            </RouterLink>
        
        </PseudoBox>

    </Flex>);
}
