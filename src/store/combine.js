import { combineReducers } from 'redux';
import booksSlice from './reducer/booksSlice'
import categorySlice from './reducer/categorySlice';
import userSlice from './reducer/userSlice';
import adminSlice from './reducer/adminSlice';


export default combineReducers({
    books: booksSlice,
    categories:categorySlice,
    users:userSlice,
    admins:adminSlice,

    // loader :loaderSlice,
});
