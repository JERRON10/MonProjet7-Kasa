import React from "react";
import logoWhite from "../../assets/logo-white.png"
import styled from "styled-components";

const StyleBackground = styled.div`
background-color: black;
text-align: center;
padding: 20px;
`
const StyleCopyRight = styled.p`
color: white;
`

export default function Footer (){
    return (
        <StyleBackground>
            <img src= {logoWhite} alt="logo" width= "50" />
            <StyleCopyRight>
                c 2020 Kasa. All rights reserved
            </StyleCopyRight>
        </StyleBackground>

    )

}