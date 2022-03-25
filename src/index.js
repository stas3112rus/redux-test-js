import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'


const initState = {
  value: 0
};

// Должна быть чистой функцией
// - должна возвращать один и тот же резултат при одинаковых входных данных
// - не вызывать побочных эфектов
const reducer = (state = initState, action)=>{
 
   switch(action.type){
     
      case 'INC':
        return {
          ...state, 
          value: state.value + 1
        };     
     
      case 'DEC':
        return {
          ...state, 
          value: state.value - 1
        };     
        
      case 'RND': 
        return{
        ...state, 
        value: state.value * action.payload
      };            

      default:
        return state;
   }
}

const store = createStore(reducer);

const update = () =>{
  document.querySelector('#counter').innerHTML = store.getState().value
}

store.subscribe(update);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = (value) => ({
  type: 'RND',
  payload: value
});

document.querySelector('#dec').addEventListener('click', ()=>{
  store.dispatch(dec());
})

document.querySelector('#inc').addEventListener('click', ()=>{
  store.dispatch(inc());
})

document.querySelector('#rnd').addEventListener('click', ()=>{
  const value = Math.floor(Math.random() * 10) 
  store.dispatch(rnd(value));
})


// store.dispatch({type: 'INC'});
// store.dispatch({type: 'INC'});





// let state = reducer(initState, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});
// state = reducer(state, {type: 'INC'});

// console.log(state)




ReactDOM.render(
  <React.StrictMode>
    <>

    </>
  </React.StrictMode>,
  document.getElementById('root')
);

