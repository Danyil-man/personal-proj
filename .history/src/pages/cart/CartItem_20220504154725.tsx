import React, { FC } from 'react';

type CartItemType = {
    cartItem: any
}

const CartItem: FC<CartItemType> = ({ cartItem }) => {
    console.log(cartItem);

    return (
        <div>

        </div>
    )
}

export default CartItem