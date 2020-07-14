// Задание 1:

// Реализуйте функцию-конструктор Worker (Работник), который будет иметь следующие свойства: 
// name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
// Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. 
// Вот так должен работать наш класс:

function Worker(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
    this.getSalary = function(){
        let salary = this.rate * this.days;
        return salary
    }
}

let worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31


// Задача 2:

// Создайте функцию-конструктор Calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

function Calculator(a, b) {
    this.read = function () {
        this.a = +prompt("Введите первое число")
        this.b = +prompt("Введите второе число")
    }

    this.sum = function () {
        return `Сумма ваших чисел ${this.a + this.b}`
    }

    this.mul = function () {
        return `Произведение ваших чисел ${this.a * this.b}`
    }
}

let calculator = new Calculator();
calculator.read()
console.log(calculator.sum())
console.log(calculator.mul())