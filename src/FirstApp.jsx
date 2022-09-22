import PropTypes from 'prop-types';
import { Fragment } from 'react'

export const FirstApp = ({title, subtitle}) => {
    return (
        <Fragment>
            <h2>{title}</h2>
            <h3>{subtitle + 10}</h3>
        </Fragment>
    )
}
FirstApp.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.number,
}

FirstApp.defaultProps = {
    title: 'Nombre',
    subtitle: 0,
}