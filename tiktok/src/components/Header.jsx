import PropTypes from 'prop-types'

function Header({text}){
    const headerStyle ={
        backgroundColor: 'rgba(0,0,0,0.4)',
        color:'#ff6a95'
    }
    return (
        <header style={headerStyle}>
            <div className="header">
                <h2>{text}</h2>
            </div>
        </header>
    )
}
Header.defaultProps={
        text:'Hello world!',
        bgColor:'rgba(0,0,0,0.4)',
        textColor: '#ff6a95'
}

// Header.propTypes={
//     text: PropTypes.string,
// }
export default Header   ;