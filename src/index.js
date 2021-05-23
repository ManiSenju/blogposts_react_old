import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import PostIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostShow from './components/pots-show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
   <BrowserRouter >
    <div>
      <Switch>
        <Route path="/" exact component={PostIndex} />
        <Route path="/posts/new" exact component={PostsNew} />
        <Route path="/posts/:id" exact component ={PostShow} />
      </Switch>
      
    </div>
   </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
