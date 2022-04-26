import { ThunkAction } from 'redux-thunk'
import { bookType, createBookType, GenresType } from '../../../types/generalTypes'
import { booksAPI } from '../../api/booksAPI'
import { AppStateType, InfernActionType } from '../store'
import { CHOOSE_GENRE, CREATE_BOOK, GET_BOOKS, SET_LIMIT, SET_PAGE, SET_TOTAL_COUNT } from '../variables/actionsType'

type initialStateType = {
    books: Array<bookType>
    genreBook: GenresType
    book: createBookType
    page: number
    totalCount: number
    limit: number
}

const initialState:initialStateType = {
    books: [],
    genreBook: {id: 0, name: ''},
    book: {
            name: undefined,
            author: undefined,
            description: undefined,
            price: undefined,
            image: '',
            genreId: undefined
    },
    page: 1,
    totalCount: 0,
    limit: 10

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
                book: action.book
            }

        case CHOOSE_GENRE:
            return{
                ...state,
                genreBook: action.genreBook
            }
        case SET_PAGE:
            return{
                ...state,
                page: action.page
            }

        case SET_TOTAL_COUNT:
            return{
                ...state,
                totalCount: action.totalCount
            }
        case SET_LIMIT:
            return{
                ...state,
                limit: action.limit
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
    createBook: (book: any) => ({
        type: CREATE_BOOK,
        book
    } as const),
    chooseGenre: (genreBook:GenresType ) => ({
        type: CHOOSE_GENRE,
        genreBook
    } as const),
    setPage: (page:number) => ({
        type: SET_PAGE,
        page
    } as const),
    setTotalCount: (totalCount:number) => ({
        type: SET_TOTAL_COUNT,
        totalCount
    } as const),
    setLimit: (limit:number) => ({
        type: SET_LIMIT,
        limit
    } as const)
}

type ActionCreatoreType = InfernActionType<typeof actions>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionCreatoreType>

export const getAllBooks = ():ThunkType => async (dispatch) => {
    const response = await booksAPI.getAllBooks()
    dispatch(actions.setBooks(response.data.rows))
}

export const createBook = (book: any):ThunkType => async (dispatch) => {
    const response = await booksAPI.createBook(book)
    dispatch(actions.createBook(response.data))
}

export const chooseGenreBook = (genreBook: GenresType):ThunkType => async (dispatch) => {
    dispatch(actions.chooseGenre(genreBook))
}

export default booksReducer;