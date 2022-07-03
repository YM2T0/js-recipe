/*ナベアツ*/
// const genkifunction = function (number) {
//   for (let n = 1; n <= number; n++) {
//     if (n % 3 === 0) {
//       console.log(n + "!!!!!!")
//     } else {
//       console.log(n)
//     }
//   }
// }
// genkifunction(100)

/* FizzBuzz */
// const FizzBuzz = function (n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0) {
//       if (i % 5 === 0) {
//         console.log("FizzBuzz")
//       } else {
//         console.log("Fizz")
//       }
//     } else if (i % 5 === 0) {
//       if (i % 3 == 0) {
//         console.log("FizzBuzz")
//       } else {
//         console.log("Buzz")
//       }
//     } else {
//       console.log(i)
//     }
//   }
// }
// FizzBuzz(30)

/*three like*/
const threelike = function (num) {
  for (let i = 1; i < num; i++) {
    if (i % 3 === 0) {
      console.log(i + "!!!!!!")
    } else if (String(i).match(/3/)) {
      console.log(i + "!!!!!")
    } else {
      console.log(i)
    }
  }
}
threelike(50)

/*元気な秒針*/
