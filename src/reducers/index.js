import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

const MainReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBookReducer
});

export default MainReducer;
