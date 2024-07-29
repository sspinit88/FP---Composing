import { compose } from './compose.ts';

/*
  The only difference is that, with piping, 
  you apply the leftmost function first, while with composing, 
  you start with the rightmost function first. 

  This variation suggests that we could have used the flipTwo() higher-order function 
  from the Parameter order section of Chapter 7, Transforming Functions. Is it clearer?

  Функция compose работает справа налево, 
  то есть начинает с последней переданной функции и последовательно применяет функции в обратном порядке.
*/

const add = (a: number, b: number) => a + b;
const square = (x: number) => x * x;
const half = (x: number) => x / 2;

// Применение функции compose
const composedFn = compose(half, square, add);
const test = composedFn(2, 2); // Здесь передаем параметры для addWrapper

console.log('result :-)', test); // Результат будет 8
