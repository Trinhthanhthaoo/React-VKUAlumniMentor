import { useState } from "react"

const Footer = () => {


    const [valuaaaae, setValuaaaae] = useState("") // hook useState


    const handleClickMe = (str) => {
        alert(str)
    }

    const handleValue = (e) => {
        console.log(e.target.value);
        setValuaaaae(e.target.value)
    }

    return (

        <>
            <h1>Footer</h1>
            <input type="text" value={valuaaaae} onChange={(e) => handleValue(e)} />
            <button onClick={() => handleClickMe(valuaaaae)}>Click Me</button>
            <p>{valuaaaae && "Hello, "}{valuaaaae}</p>
        </>
        
    )
}

export default Footer
