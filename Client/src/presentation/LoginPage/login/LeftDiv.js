import { Flex, Heading, PseudoBox } from "@chakra-ui/core";
import React from 'react';

export function LeftDiv(props) {
    const { type } = props;
    return (<Flex className="left-div" bg="#3281FE" h="100%" w="50%" justify="center" align="center">

        <PseudoBox color="white" padding="20px 80px">

            <Heading fontFamily=" 'Muli', sans-serif" fontWeight="800" mb="10px" fontSize="28px">Welcome to Toter!</Heading>

            <div className="login-left-hr" width="30px" height="5px" mr="auto" ml="15px" height="3px" bg="white"></div>

            <p fontFamily=" 'Muli', sans-serif" fontWeight="300" padding="10px">
                Helloworld helps you evaluate variations in a fund's monthly returns in comparison to its Category,
                 he greater the variation, the larger the risk score. You can also use standard deviation to screen by fund volatility.
                </p>



        </PseudoBox>

    </Flex>);
}
