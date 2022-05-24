import React, {ReactNode, useEffect, useState} from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types';
import { IButtonProps } from "./Button.interface";


// contenu du component
const Button :React.FC<IButtonProps>= (props) => {
    const [isClicked, setisClicked] = useState(false);

    useEffect(() => {
        if (isClicked) {
            setTimeout(() => setisClicked(false), 300)
        }
    }, [isClicked])

    
    return(
    <button className={style.Button+(isClicked?' '+style.clicked:'')}
        onClick={(evt) => {
            setisClicked(true);
            
            if (undefined !== props.onButtonClicked && typeof props.onButtonClicked === 'function')
            props.onButtonClicked()
        }}
        style={{
            backgroundColor:props.bgcolor,
            color:props.color,
            ...props.styleNew,
        }}
        type={props.type}
    >
        {props.children}
    </button>
    );
} 
/*
Button.propTypes={
  bgcolor: PropTypes.string.isRequired, 
  styleNew: PropTypes.object,
  color: PropTypes.any.isRequired,
  onButtonClicked: PropTypes.func,
  //type: PropTypes.string,
  children: PropTypes.any.isRequired,
}
*/
Button.defaultProps={
    bgcolor: 'skyblue',
    color: 'white',
    type: 'button',
}

// exportation
export default Button;