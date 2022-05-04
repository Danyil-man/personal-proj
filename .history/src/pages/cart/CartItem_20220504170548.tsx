import React, { FC } from 'react';
import { CartType } from '../../types/generalTypes';

type CartItemType = {
    cartBook: CartType
}

const CartItem: FC<CartItemType> = ({ cartBook }) => {

    return (
        <div>

        </div>
    )
}

export default CartItem