import * as productPhoneModel from '../models/phone.js';
console.log('productPhoneModel',productPhoneModel)

const findAllPhone = () =>{
    return productPhoneModel.findAllPhone();
}

const findPhoneById = (id) =>{
    return productPhoneModel.findPhoneById(id);
}

export { findAllPhone, findPhoneById }