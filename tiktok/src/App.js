import { useState } from "react"
import Header from "./components/Header"
import Navigation from "./components/Navigation"
import FeedbackList from "./components/FeedbackList"
import FeedbackData from "./data/FeedbackData"

function App(){
    // const comment= [
    //     {id:1,text: 'Hello babe'},
    //     {id:2,text: 'Hi hony!'},
    // ]

    // const loading= true
    // const  showComment = true
    const [feedback, setFeedback]= useState(FeedbackData)

    
    // if(loading) return <h1>Loading...</h1>
    const deleteFeedback =(id) =>{
        if(window.confirm('Bạn có chắc muốn xóa?'))
        {
            setFeedback(feedback.filter((item)=> item.id !== id))

        }

    }
    return(
        <div className="main">
            <Header/>
            <Navigation/>
            <FeedbackList feedback={feedback} 
                handleDelete={deleteFeedback}
            />
            
            {/* {showComment && (
                <div className="listUl">
                        <h1> Comment{(comment.length)}</h1>
                        <ul>
                            {comment.map((comment, index)=>(
                                <li key={index}>{comment.text}</li>
                            ))}
                        </ul>
            </div>
            )} */}
            
        </div>
        
    )
}
export default App;