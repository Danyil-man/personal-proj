import React from 'react';


const OrderValues = () => {
    return (
        <div>
            <label>Id</label>
            <input name='bookId' onChange={handleChange} key={orderItem.book.id} value={orderItem.book.id} type='text' />
            <label>Name</label>
            <input name='bookName' onChange={handleChange} key={orderItem.book.id} value={orderItem.book.author} type='text' />
        </div>
    )
}

export default OrderValues