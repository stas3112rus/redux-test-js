// Должна быть чистой функцией
// - должна возвращать один и тот же резултат при одинаковых входных данных
// - не вызывать побочных эфектов

const initState = {
    value: 0
  };

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

 export default reducer;