// В JavaScript существует такая структура данных как FormData
// В основном ее используют для отправки на сервер файлов
// Так же в нее можно поместить целую html форму и отправить, это иногда удобно

const formData = new FormData()
formData.append('name', 1)
formData.append('name', 2)

// append записывает два понял name и в некотрых моментах это может быть очень плохо
// Поэтому рекомендуется использовать set он перезаписывает ключ если такой уже существует

formData.set('name', 1)
formData.set('name', 2)

// Так же мы может удалять, получать и проверять на существования поля

formData.delete('name') // удаление
formData.has('name') // проверка на существования
formData.get('name') // получание

// Так же FormData является перебираемой структурой данных, то есть мы может использовать цикл for of или же ...

for (value of formData) console.log(value)
console.log(...formData)

// Запомнить - применяем, когда нужно отправить файл на сервер (самый простой способ это сделать)