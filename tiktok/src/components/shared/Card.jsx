import PropTypes from 'prop-types'
function Card({children , reverse}){
    // const eventCard = document.getElementsByClassName('.card');

    // const handleClick= () =>{
    //         eventCard.classList.add("reverse");
    // }
    return (
    <>
        <div className="card" 
            style={{
                backgroundColor:reverse ? 'rgba(0,0,0,0.4)' : '#fff',
                color:reverse ?'#fff' : '#000',
            }}
        >
            {children}
        </div>
        {/* <button onClick={handleClick}>Dark Mode</button> */}
    </> 
    )
}
Card.defaultProps={
    reverse:false,
}
Card.propTypes={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}
export default Card;