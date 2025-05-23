const getNumber = callback => {
    setTimeout(() => {
        const num = 5;
        console.log('Got number:', num);
        callback(num);
    }, 500);
}

const doubleNumber = (num, callback) => {
    setTimeout(() => {
        const result = num * 2;
        console.log('Doubled:', result);
        callback(result)
    }, 500);
}
const squareNumber = (num, callback) => {
    setTimeout(() => {
        const result = num * num;
        console.log('Squared:', result);
        callback(result)
    }, 500);
} 

getNumber((num) => {
    doubleNumber(num, (doubled) => {
        squareNumber(doubled, (squared) => {
            console.log('Final result:', squared)
        })
    });
});