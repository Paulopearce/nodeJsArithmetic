// function add(num1, num2) {
//   console.log(`${num1} + ${num2} = ${num1+num2}`)
// }

// function subtract(num1, num2) {
//   console.log(`${num1} - ${num2} = ${num1-num2}`)
// }

// function multiply(num1, num2) {
//   console.log(`${num1} * ${num2} = ${num1*num2}`)
// }

// function divide(num1, num2) {
//   console.log(`${num1} + ${num2} = ${num1/num2}`)
// }
// function exponential(num1, num2){
//   console.log(`${num1} to the power of ${num2} = ${num1**num2}`)
// }

// add(5,7)

// subtract(5,7)

// multiply(5,7)

// divide(5,7)

// exponential(5,7)

const [, , num1, num2] = process.argv

console.log(`${process.argv[2]} + ${process.argv[3]} = ${JSON.parse(process.argv[2])+JSON.parse(process.argv[3])}`)
console.log(`${process.argv[2]} - ${process.argv[3]} = ${JSON.parse(process.argv[2])-JSON.parse(process.argv[3])}`)
console.log(`${process.argv[2]} / ${process.argv[3]} = ${JSON.parse(process.argv[2])/JSON.parse(process.argv[3])}`)
console.log(`${process.argv[2]} * ${process.argv[3]} = ${JSON.parse(process.argv[2])*JSON.parse(process.argv[3])}`)
console.log(`${process.argv[2]} to the power of ${process.argv[3]} = ${JSON.parse(process.argv[2])**JSON.parse(process.argv[3])}`)

// let movie = require('./movie.js')
// let song = require('./song.js')
// let food = require('./food.js')
// let game = require('./game.js')

// const [,,favorites] = process.argv

// switch (favorites) {
//   case 'movie':
//     console.log(song)
//     break
//   case 'song':
//     console.log(movie)
// }

const fs = require('fs')
// fs.writeFile('some.txt', 'some other text', err =>{
//   if(err){console.log(err)}
// })

// fs.appendFile('some.txt', ' some more text', err =>{
//   if(err){console.log(err)}
// })

// fs.readFile('some.txt', 'utf8', (err,data) =>{
//   if(err){console.log(err)}
//   console.log(data)
// })

// const [,,inputType, input] = process.argv

// switch (inputType) {
//   case 'movie':
//     fs.appendFile('movies.txt', `${input}`, err =>{if(err){console.log(err)}})
//   break
//   case 'song':
//     fs.appendFile('songs.txt', `${input}`, err =>{if(err){console.log(err)}})
//   break
//   case 'food':
//     fs.appendFile('foods.txt', `${input}`, err =>{if(err){console.log(err)}})
//   break
//   case 'game':
//     fs.appendFile('games.txt', `${input}`, err =>{if(err){console.log(err)}})
//   break
//   case 'view':
//     switch (input) {
//       case 'movie':
//         fs.readFile('movies.txt', 'utf8', (err,data) =>{
//           if(err){console.log(err)}
//           console.log(data)
//         })
//         break
//       case 'food':
//         fs.readFile('foods.txt', 'utf8', (err,data) =>{
//           if(err){console.log(err)}
//           console.log(data)
//         })
//         break
//       case 'game':
//         fs.readFile('games.txt', 'utf8', (err,data) =>{
//           if(err){console.log(err)}
//           console.log(data)
//         })
//         break
//       case 'song':
//         fs.readFile('songs.txt', 'utf8', (err,data) =>{
//           if(err){console.log(err)}
//           console.log(data)
//         })
//         break
//     }
// }