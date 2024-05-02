import React from 'react'

const Cart = (props: any) => {
    return (
        <div>
            <h2> {props.name}</h2>
            <h2> {props.nam}</h2>
            <h2> {props.fname || "def"}</h2>

        </div>
    )
}

export default Cart