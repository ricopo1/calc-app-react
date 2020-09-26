import React from 'react'
import Button from '../Button'
import PropTypes from 'prop-types'
import './History.css'


const History = ({history, onClickDeleteHistory}) => (
    <section className="history">
        <div className="content-history">
            <p>History: </p>
            <p>{history}</p>
        </div>
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