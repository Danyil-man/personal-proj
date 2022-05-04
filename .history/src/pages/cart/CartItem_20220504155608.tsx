import React, { FC } from 'react';

type CartItemType = {
    cartItem: any
}

const CartItem: FC<CartItemType> = ({ cartItem }) => {
    console.log(cartItem.map(cart => cart));

    return (
        <div>

        </div>
    )
}

export default CartItem