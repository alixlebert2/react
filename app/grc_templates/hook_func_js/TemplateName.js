import React, {useEffect, useState,  } from 'react'
import PropTypes from 'prop-types'
import style from './TemplateName.module.css';


const initialState={};

function TemplateName(props) {
    const [state, setstate] = useState(initialState)
    useEffect(() => { }, [props]);
    return (
        <div className={style.TemplateName} data-testid="TemplateName">
            templateName
        </div>
    )
}

TemplateName.propTypes = {}

TemplateName.defaultProps = {};

export default TemplateName;
