// una funcion que retorna otra funcion

export const logger  = (store) => (next) => (action) =>{
    console.log(action)
    next(action)
}