import React, { FC } from 'react';
import { UserCartItemsType } from '../../types/generalTypes';

type OrderType = {
    item: UserCartItemsType
}

const Orders: FC<OrderType> = ({ item }) => {

    return (
        <div>

        </div>
    )
}
export default Orders