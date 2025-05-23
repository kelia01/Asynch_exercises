const boilWater = callback => {
    setTimeout(() => {
        console.log('Water boiled');
        callback();
    }, 1000)
}
 const addTea = callback => {
    setTimeout(() => {
        console.log('Tea added');
        callback();
    }, 1000)
 }

 const serve = () => {
    console.log('Tea is served')
}

boilWater(() => {
    addTea(() => {
        serve()
    })
})