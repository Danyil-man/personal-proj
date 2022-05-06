
import { useSelector } from 'react-redux'
import { AppStateType } from '../store/redux/store'
import { CartType } from '../types/generalTypes'

const { cart } = useSelector((state: AppStateType) => state.cart)
    const cartBook = cart.map(cartItem => cartItem.cart_books)

export const totalPrice = () => {
    const cartPrice = cartBook.map(cartItem => cartItem.reduce((sum: number, book: CartType) => book.book.price + sum, 0))
    
    return { cartPrice }
}