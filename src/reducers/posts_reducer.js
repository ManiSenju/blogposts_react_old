import _ from 'lodash';
import React from 'react';
import { CREATE_POSTS, DEL_POST, FETCH_POST, FETCH_POSTS } from '../actions';

export default (state={},action)=>{
    switch(action.type){
        case FETCH_POST:
            //in ES5 
            // var newState = {...state};
            // newState[action.payload.data.id]=action.payload.data;
            return {...state ,[action.payload.data.id]:action.payload.data};
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id');
        case DEL_POST:
            return _.omit(state,action.payload);
        default:
            return state;
    }
}