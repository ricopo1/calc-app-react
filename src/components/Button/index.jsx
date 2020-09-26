import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

const Button = ({type, text, clickHandler}) => (
    <button className={type} onClick={() => clickHandler(text)}>
        {type === "button-delete"?<i className="fa fa-trash-o"></i>:<span>{text}</span>}
    </button>
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    clickHandler: PropTypes.func.isRequired
}

export default Button 