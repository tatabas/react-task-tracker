import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {

    return (
        <header>
            {/* css in js */}
             {/* <h1 style = {headingStyle}>{props.title}</h1> */}
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close' : 'Add'} 
            onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// css in js
// const headingStyle = { 
//     color: 'red', 
//     backgroundColor: 'black'
// }

export default Header
