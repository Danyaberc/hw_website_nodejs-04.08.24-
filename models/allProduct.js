import * as productPhone from '../ctrls/phone.js'

const items = [
    {id: 1, name: productPhone}
]

console.log('allproduct',productPhone())

const findAllProd = () =>{
    return items
} 

const findAllProdById = (id) =>{
    return items.find(item => item.id === id)
}

export { findAllProd, findAllProdById }