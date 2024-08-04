const items = [
    {id: 1, name: 'Xiaomi 7', price: 20*100, img: "../img/Xi5.webp"},
    {id: 2, name: 'Xiaomi 8', price: 40*100, img: "../img/Xi5.webp"},
    {id: 3, name: 'Xiaomi 9', price: 30*100, img: "../img/Xi6.webp"},
    {id: 4, name: 'Xiaomi 10', price: 20*100, img: "../img/Xi7.webp"},
    {id: 5, name: 'Xiaomi 11', price: 30*100, img: "../img/Xi8.webp"},
    {id: 6, name: 'Xiaomi 12', price: 20*100, img: "../img/Xi9.webp"},
    {id: 7, name: 'Xiaomi 13', price: 70*100, img: "../img/Xi10.webp"},
    {id: 8, name: 'Xiaomi 13pro', price: 50*100, img: "../img/Xi11.webp"},
    {id: 9, name: 'Xiaomi 14', price: 60*100, img: "../img/Xi12.webp"},
    {id: 10, name: 'Xiaomi 14 pro', price: 20*100, img: "../img/Xi13.webp"},
    {id: 11, name: 'Xiaomi 15', price: 40*100, img: "../img/Xi13T.webp"},
    {id: 12, name: 'Xiaomi 15 pro', price: 30*100, img: "../img/Xi15.webp"},
]

const findAllPhone = () =>{
    return items
} 

const findPhoneById = (id) =>{
    return items.find(item => item.id === id)
}

export { findAllPhone, findPhoneById }