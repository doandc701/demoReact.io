
function Navigation(){
    const styleSheet={
        display:'flex',
        justifyContent:'center',
        alignItem:'center',
        color:'pink',
    }
    const styleUl={
        display:'flex',
        justifyContent:'space-around',
        alignItem:'center',
        color:'pink',
        listStyle:'none'
    }
    const listMenu=[
        {id: 1, menu:'TRANG CHỦ'},
        {id: 2, menu:'NFT GAME'},
        {id: 3, menu:'KIẾN THỨC'},
        {id: 4, menu:'KIẾM TIỀN'},
        {id: 5, menu:'VIDEO'},
        {id: 6, menu:'TIN TỨC'},

    ]
    const styleLi={
       paddingInline:'10px',
       cursor:'pointer',
    }
    return (
        <div className="nav">
            <div className="nav-list" style={styleSheet}>
                <ul style={styleUl}>
                    {listMenu.map((listMenu, index)=>(
                        <li key={index} style={styleLi}><a href="#">{listMenu.menu}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
Navigation.defaultProps={

}
export default Navigation;