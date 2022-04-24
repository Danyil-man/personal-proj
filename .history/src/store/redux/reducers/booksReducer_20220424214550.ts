import { ThunkAction } from 'redux-thunk'
import { bookType, GenresType } from '../../../types/generalTypes'
import { booksAPI } from '../../api/booksAPI'
import { AppStateType, InfernActionType } from '../store'
import { CHOOSE_GENRE, CREATE_BOOK, GET_BOOKS } from '../variables/actionsType'



type initialStateType = {
    books: Array<bookType>
    genreBook: GenresType
}

const initialState:initialStateType = {
    books: [],
    genreBook: {id: 0, name: ''}
}

const booksReducer = (state=initialState, action:ActionCreatoreType):initialStateType => {
    switch(action.type){
        case GET_BOOKS:
            return{
                ...state,
                books: action.books
            }

        case CREATE_BOOK:
            return{
                ...state,
                
            }
        
        default:
            return state
    }
}

const actions = {
    setBooks: (books: Array<bookType>) => ({
        type: GET_BOOKS,
        books
    } as const),
    createBook: (book: bookType) => ({
        type: CREATE_BOOK,
        book
    } as const),
    chooseGenre: (genreBook:GenresType ) => ({
        type: CHOOSE_GENRE,
        genreBook
    } as const)
}


type ActionCreatoreType = InfernActionType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatoreType>

export const getAllBooks = ():ThunkType => async (dispatch) => {
    const response = await booksAPI.getAllBooks()
    dispatch(actions.setBooks(response.data.rows))
}

export const createBook = ():ThunkType => async (dispatch) => {
    const response = await booksAPI.createBook()

}

export const chooseGenreBook = (genreBook: GenresType):ThunkType => async (dispatch) => {
    dispatch(actions.chooseGenre(genreBook))
}

export default booksReducer;