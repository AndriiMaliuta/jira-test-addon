import React, {useState, useEffect} from "react"
import ReactDOM from 'react-dom';

function Frontend() {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log("test")
        setData([1,2,3])
    }, [])

    return <div>TEST</div>

}

export default Frontend

ReactDOM.render(<Frontend/>, document.querySelector('#react-root'))
