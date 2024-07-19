import {useState} from "react"

function Hook2(){
    const [number, setNumber] = useState(10)
    console.log("render hooh 2")
    function handle_number_up(){
        setNumber(number+10)
    }
    return(
        <div>
            <h1>Tìm hiểu về Hook</h1>
            <p>Count: {number}</p>
            <button onClick={handle_number_up}>Number Up</button>
        </div>
    )
}

export default Hook2;