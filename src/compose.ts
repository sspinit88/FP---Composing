/*
  The only difference is that, with piping, 
  you apply the leftmost function first, while with composing, 
  you start with the rightmost function first. 

  This variation suggests that we could have used the flipTwo() higher-order function 
  from the Parameter order section of Chapter 7, Transforming Functions. Is it clearer?

  Функция compose работает справа налево, 
  то есть начинает с последней переданной функции и последовательно применяет функции в обратном порядке.
*/

type Func<T = any> = (...args: T[]) => any;

export function compose(...fns: Func[]) {
  return (...args: any[]) => {
    // Начинаем с последней функции и её аргументо
    let result = fns[fns.length - 1](...args);
    // Применяем остальные функции в обратном порядке
    for (let i = fns.length - 2; i >= 0; i--) {
      result = fns[i](result);
    }
    return result;
  };
}
