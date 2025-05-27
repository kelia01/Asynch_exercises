function limitedRepeat() {
  let intervalId = setInterval (() => console.log('hi for now'), 1000);
  setTimeout(() => {
    clearInterval(intervalId)
  }, 5000)
}