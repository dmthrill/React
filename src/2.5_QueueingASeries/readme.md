[Документація React: Черга оновлень стану](https://react.dev/learn/queueing-a-series-of-state-updates)

# Черга оновлень стану (Batching, Functional Updates)

## Основні ідеї

- React “батчить” (об’єднує) всі оновлення стану всередині одного обробника події.
- Оновлення стану не відбувається одразу — React чекає завершення обробника, а потім робить рендер.
- Якщо кілька разів викликати setState зі старим значенням, оновиться лише останнє.

## Приклад: Чому number збільшується лише на 1

```jsx
const [number, setNumber] = useState(0);

<button onClick={() => {
  setNumber(number + 1);
  setNumber(number + 1);
  setNumber(number + 1);
}}>+3</button>
```
- Всі три виклики бачать старий знімок (наприклад, 0), тому результат — 1.

## Функціональний апдейт — правильний спосіб для серії оновлень
Naming conventions 

It’s common to name the updater function argument by the first letters of the corresponding state variable:

setEnabled(e => !e);
setLastName(ln => ln.reverse());
setFriendCount(fc => fc * 2);
If you prefer more verbose code, another common convention is to repeat the full state variable name, like setEnabled(enabled => !enabled), or to use a prefix like setEnabled(prevEnabled => !prevEnabled).
```jsx
<button onClick={() => {
  setNumber(n => n + 1);
  setNumber(n => n + 1);
  setNumber(n => n + 1);
}}>+3</button>
```
- Кожен виклик бачить актуальне значення, тому number збільшується на 3.

## Комбінування різних типів оновлень

```jsx
<button onClick={() => {
  setNumber(number + 5);      // замінить значення на number + 5
  setNumber(n => n + 1);      // додасть 1 до попереднього
  setNumber(42);              // замінить значення на 42
}}>Update</button>
```
- Останній setNumber(42) “перезаписує” всі попередні.

## Коли використовувати функціональний апдейт?

- Якщо потрібно кілька разів змінити стан у одному обробнику.
- Якщо оновлення залежить від попереднього значення (наприклад, лічильник, асинхронний код).

## Важливо

- Функціональний апдейт: `setState(prev => ...)` — завжди працює з актуальним значенням.
- Простий апдейт: `setState(value)` — просто замінює значення, може “перезаписати” чергу.

## Іменування аргументів функціонального апдейта

- Зазвичай аргумент називають першими літерами назви стану:
  ```jsx
  setEnabled(e => !e);
  setLastName(ln => ln.reverse());
  setFriendCount(fc => fc * 2);
  ```
- Можна використовувати повну назву або префікс:
  ```jsx
  setEnabled(enabled => !enabled);
  setEnabled(prevEnabled => !prevEnabled);
  ```
- Вибирайте стиль, який зручний для вашої команди — головне, щоб код був зрозумілим.

## Додаткові пояснення (з діалогу)

- У JavaScript функція — це теж значення, як і число чи рядок. Її можна зберігати у змінній, передавати у масив, викликати через ім’я змінної.
- Змінна у циклі for...of (наприклад, update) по черзі приймає кожен елемент масиву. Елемент може бути як числом, так і функцією.
- Оператор typeof повертає тип значення: 'number', 'string', 'function', 'object' тощо.
- typeof update === 'function' перевіряє, чи елемент є функцією.
- Якщо update — функція, її викликають для оновлення стану: finalState = update(finalState).
- Якщо update — число, воно просто замінює стан: finalState = update.

### Приклад: функція у змінній
```js
let a = 5; // a — це число
let b = function(n) { return n + 1 }; // b — це функція
let arr = [5, function(n) { return n + 1 }];
for (let update of arr) {
  // update буде спочатку числом, потім функцією
}
```

### Приклад: перевірка типу
```js
if (typeof update === 'function') {
  // update — це функція
}
```

### Приклад: виклик функції з аргументом
```js
let fn = n => n + 1;
let result = fn(5); // result буде 6
```

---
```
