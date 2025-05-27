function resolving(){
   return new Promise(resolve => {
    setTimeout(() => {
        resolve('Hello, world!');
    }, 1000);
})}
resolving().then(result => console.log(result));
