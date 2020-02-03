import React from 'react'
import PropTypes from 'prop-types'
import { PseudoBox , Box} from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import './style.scss'

const propTypes = {
    
}

function RegisterSuccess(props) {
    return (
        <Box className="register-success" display="flex" justifyContent="center" alignItems="center">

            <PseudoBox display="flex" flexDirection="column" className="register-success-box" >

                <div className="register-success-img" />

                <span className="register-success-txt"> Registration successfull!</span>

                <Link className='login-btn' to="/login" > 
                    Login
                </Link>

            </PseudoBox>
            
        </Box>
    )
}

RegisterSuccess.propTypes = propTypes

export default RegisterSuccess
