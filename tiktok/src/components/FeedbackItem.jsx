import {FaTimes} from 'react-icons/fa'
import {useState} from 'react'
import FeedbackData from '../data/FeedbackData'
import Card from './shared/Card';
import PropTypes from 'prop-types'

function FeedbackItem({item, handleDelete}){
    // const [rating , setRating]= useState(0)
    // const [text , setText]= useState('This is an example of a feedback item')



    // const handleClick=()=>{
    //     setRating((prev)=>{
    //         return prev + 1
    //     })
    //     setText("Developer Sociu")
    // }
   
    return (
        <Card>
            {/* <button onClick={handleClick}>Click Me</button> */}
            <div className="num-display">{item.rating}</div>
            <button onClick={()=> handleDelete(item.id)} className="close" style={{width:'50px', height:'50px'}}>
                <FaTimes color='green' />
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}
FeedbackItem.protoType ={
    item: PropTypes.object.isRequired,
}
export default FeedbackItem;