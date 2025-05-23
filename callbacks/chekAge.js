const checkAge = (age, callback) => {
    setTimeout (() => {
        age >= 18 ? callback(null, 'Acess granted') : callback('Access denied')
    }, 500)
}

checkAge((20, () => {
    
}))