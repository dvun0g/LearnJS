// Так же промисы позволяют обрабатывать ошибки
// Это очень полезная функция, потому что часто асинхронный код - это работа с сервером

new Promise((resolve, reject) => {
    if (Math.random() > 0.5) resolve('Done')
    else reject('Error')
}).then(i => console.log(i)).catch(e => console.log(e)).finally(() => console.log('Finnaly'))

// Например такой код показывает что при ошибке мы попадем в блок catch и может таким образом ее обработать
// Так же в промиссах есть finnaly - который выполнить всегда

// Так же есть интересный момент
// Промис как бы обернут в невидимый try catch поэтому он находит ошибки
// Но если мы сделаем такую констуция ошибка не обработается потому что она появится позже, когда мы как бы выйдет из Promise

new Promise(() => {
    setTimeout(() => {
        throw Error('Ошибка')
    }, 500)
}).then(() => console.log('Done')).catch((e) => console.log(e))

// Этот код упадет