import React from 'react'
import PropTypes from 'prop-types'

const History = ({history}) => (
    <section className="history">
        {history}
    </section>
)

History.propTypes = {
    history: PropTypes.string.isRequired
}

History.defaultProps = {
    history: ""
}

export default History