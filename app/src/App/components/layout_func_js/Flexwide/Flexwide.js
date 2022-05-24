import React, {useEffect, useState,  } from 'react'
import PropTypes from 'prop-types'
import style from './Flexwide.module.css';


const initialState={};

function Flexwide(props) {
    const [state, setstate] = useState(initialState)
    useEffect(() => { }, [props]);
    return (
        <div className={style.Flexwide} data-testid="Flexwide">
            {props.children}
        </div>
    )
}

Flexwide.propTypes = {
    children:PropTypes.any.isRequired,
}

Flexwide.defaultProps = {};

export default Flexwide;
