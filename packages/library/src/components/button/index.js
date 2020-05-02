import React from "react";
import MatButton from "@material-ui/core/Button"; 

const Button = ({type,disabled,children}) =>{
    return <MatButton variant="contained" color={type} disabled={disabled}>
        {children}
    </MatButton> 
}

export default Button;