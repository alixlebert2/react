import React from "react";
import style from './Button.module.css'
import PropTypes from 'prop-types';


// contenu du component
function Button(props) {
    return (
    <button className={style.Button}
        onClick={(evt) => {
            if (undefined !== props.onButtonClicked && typeof props.onButtonClicked === 'function')
            props.onButtonClicked()
        }}
        style={{
            ...props.styleNew,
            backgroundColor:props.bgcolor,
            color:props.color
        }}
        type={props.type}
    >
        {props.text}
    </button>
    );
}

Button.propTypes={
  bgcolor: PropTypes.string.isRequired, 
  styleNew: PropTypes.object,
  color: PropTypes.any.isRequired,
  onButtonClicked: PropTypes.func,
  type: PropTypes.string,
}

Button.defaultProps={
    bgcolor: 'skyblue',
    color: 'white',
    type: 'button',
}

// exportation
export default Button;