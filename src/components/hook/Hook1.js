import {useState} from "react"

function Hook1(){
    const [count, setCount] = useState(1)
    console.log("render hooh 1")
    function handle_count_up(){
        setCount(count+1)
    }
    return(
        <div>
            <h1>Tìm hiểu về Hook</h1>
            <p>Count: {count}</p>
            <button onClick={handle_count_up}>Count Up</button>
        </div>
    )
}

export default Hook1;