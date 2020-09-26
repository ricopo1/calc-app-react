import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
import './History.css'


const History = ({history, onClickDeleteHistory}) => (
    <section className="history">
        <p>{history}</p>
        <Button text="delete" type="button-delete" clickHandler={onClickDeleteHistory}/>
    </section>
)

History.propTypes = {
    history: PropTypes.string.isRequired,
    onClickDeleteHistory: PropTypes.func.isRequired
}

History.defaultProps = {
    history: ""
}

export default History