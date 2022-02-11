import React, {useState, useEffect} from "react"

function Frontend() {

    const [data, setData] = useState([])

    useEffect(() => {
        console.log("test")
        setData([1,2,3])
    }, [])

    return <div>TEST</div>

}

export default Frontend


