// una funcion que retorna otra funcion

export const logger  = (store) => (next) => (action) =>{    
    console.log('action', action);
    next(action)
}
//
//export const featuring = (store) => 
    //    (next) => (action) => {
//
//    const featured = [{
//        name:'eddi'
//        },
 //       ...action.payload   
//    ]    
 //   const updatedActionInfo = { 
 //       ...action, 
  //      payload: featured
  //  }    
  //  next(updatedActionInfo)
//
//}