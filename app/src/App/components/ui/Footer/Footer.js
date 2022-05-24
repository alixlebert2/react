import React, {useEffect, useState,  } from 'react'
import PropTypes from 'prop-types'
import style from './Footer.module.css';


const initialState={};

function Footer(props) {
    const [state, setstate] = useState(initialState)
    useEffect(() => { }, [props]);
    return (
        <div className={style.Footer} data-testid="Footer">
            footer
        </div>
    )
}

Footer.propTypes = {}

Footer.defaultProps = {};

export default Footer;
