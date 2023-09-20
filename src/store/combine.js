import { combineReducers } from 'redux';
import booksSlice from './reducer/booksSlice'
import categorySlice from './reducer/categorySlice';
import userSlice from './reducer/userSlice';
import adminSlice from './reducer/adminSlice';
import authorsSlice  from './reducer/authorSlice';


export default combineReducers({
    books: booksSlice,
    categories:categorySlice,
    users:userSlice,
    admins:adminSlice,
    authors:authorsSlice
    // loader :loaderSlice,
});
