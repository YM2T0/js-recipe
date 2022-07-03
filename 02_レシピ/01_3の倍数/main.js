const genkifunction = function (number) {
  for (let n = 3; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkifunction(100)
