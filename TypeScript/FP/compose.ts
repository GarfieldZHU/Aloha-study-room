// Copyright 2018-2020 @GarfieldZHU. All rights reserved. MIT license.

import compose from 'https://deno.land/x/denofun/lib/curry.ts"
// import _ from 'ramda'

//----------------------Exercise----------------------

// Exercise 1
// Rewrite the function using `compose()`

// const isLastInStock = (cars: any) => {
//   const last_car = _.last(cars)
//   return _.prop('in_stock', last_car)
// }
//==============
// const isLastInStock = _.compose(_.prop('in_stock'), _.last())
const isLastInStock = compose(prop('in_stock'), last)


// Exercise 2 
// Use `compose()`, `prop()` and `head()` to get the name of the first car
// const nameOfFirstCar = undefined
//==============
const nameOfFirstCar = compose(prop('name'), head)


// Exercise 3
// Considering the following function:
//   const average = xs => reduce(add, 0, xs) / xs.length
// Use the helper function `average` to refactor `averageDollarValue` as a composition:
//   const averageDollarValue = function(cars: Car[]) {
//   const dollar_values = map(function(c: Car) { return c.dollar_value; }, cars)
//     return average(dollar_values)
//   }
//==============
const averageDollarValue = compose(average, map(prop('dollar_value')))


// Exercise 4
// Use `compose()` to write a `sanitizeNames()` method:
//   const _underscore = replace(/\W+/g, '_'); //<-- no need change，use it in `sanitizeNames`
//   const sanitizeNames = undefined;
//==============
const sanitizeNames = compose(_underscore, toLowercase, prop('name'))


// Bonus 1
// Refactor `availablePrices` with compose.
//  const availablePrices = function(cars: Car[]) {
//    const available_cars = _.filter(_.prop('in_stock'), cars)
//    return available_cars.map((x: Car) => accounting.formatMoney(x.dollar_value)).join(', ')
//  }
//==============
const availablePrices = compose(
  join(', '),
  map(compose(
    formatMoney,
    prop('dollar_value')
  )),
  filter(prop('in_stock'))
)


// Bonus 2
// Refactor to pointfree
//   const fastestCar = function(cars: Car[]) {
//     const sorted = _.sortBy((car: Car) => car.horsepower, cars)
//     const fastest = _.last(sorted)
//     return fastest.name + ' is the fastest'
//   }
//==============
const fastestCar = compose(
  append(' is the fastest'),
  last(),
  sortBy(prop('horsepower'))
)
