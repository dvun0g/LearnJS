// 1.
// Можно ли перевыполнить промис?
// Что выведет код ниже?

const promise = new Promise((resolve, reject) => {
    resolve(1)

    setTimeout(() => {
        resolve(2)
    }, 500)
})

promise.then((i) => console.log(i)) // 2

// Перевыполнить промис нельзя, если мы передали какое-то значение в resolve, повторные вызове resolve не дадут никакого результата

// 2.
// Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу, использующую промисы.
// Функция delay(ms) должна возвращать промис, который перейдёт в состояние «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then:

const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}
delay(3000).then(() => console.log('Done'))

// Промисы в основном используются при работате с асинхронным кодов, чтобы избежать ада калллбэков