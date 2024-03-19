import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import movieReducer from "./reducer/movieReducer";
import { rootSaga } from './redux-saga/sagas';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
        reducer:{
           movie: movieReducer,
        },
        middleware:()=>[ sagaMiddleWare ]
});

sagaMiddleWare.run(rootSaga);

export default store;



// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from './reducer';

// let store = createStore(
//         rootReducer, 
//         composeWithDevTools(applyMiddleware(thunk))
//         );

//아래의 것들 다 적용시켜야했는데 toolkit을 쓰면 해결됨 
//combineReducer
//thunk
//applyMiddleware
//composeWithDevTools 