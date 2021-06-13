import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header>
            {/* css in js */}
             {/* <h1 style = {headingStyle}>{props.title}</h1> */}
            <h1>{title}</h1>
            <button className='btn'>Add</button>
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
