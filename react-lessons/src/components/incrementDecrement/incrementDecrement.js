import { useState } from "react"

const incrementDecrement = () => {
    let [counter,setCounter] = useState (0)

    const onClickIncrement = () => {
        setCounter(++counter)
    }

    const onClickDecrement = () => {
        setCounter(--counter)
    }
}

return (

    <div>
        <h2>value is {counter}</h2>

        <button onClick={onClickIncrement}>
            increment
            </button>

            <button onClick={onClickDecrement}>
            Decrement
            </button>

    </div>
)

export default incrementDecrement 