//First level: // Задача 1. Вывести в консоли:
// а) все ноутбуки. лучше с разметкой HTML
// б) все ноутбуки, цена которых больше 40000.
// в) Посчитать сумму цен всех ноутбуков. Итого.

let laptops = [
    {
        mark : "Acer",
        price : 25000
    },
    {
        mark : "Apple",
        price : 37000
    },
    {
        mark : "Asus",
        price : 125500,
    },
    {
        mark : "HP",
        price : 42000
    },
    {
        mark : "Samsung",
        price : 52000
    }
]

let sum1 = 0
for (i = 0; i < laptops.length; i++) {
     if (laptops[i].price > 40000) {
         console.log(`
         <p>mark: ${laptops[i].mark}</p>
         <p>price: ${laptops[i].price}</p>
     `);
     }
     sum1 += laptops[i].price
 }
 console.log(`<p>amount: ${sum1}</p>`);

// Задача.2
 // а) Вывести все ноутбуки, у которых есть категория "laptop"
 // б) Вывести все ноутбуки, у которых категория "premium"
 // в) Вывести все ноутбуки, у которых категория "tech"
 
 
 let laptopsSecond = [
   {
     mark: "Acer",
     category: ["laptop", "tech"],
     price: 25000,
   },
   {
     mark: "Apple",
     category: ["notebook", "tech"],
     price: 37000,
   },
   {
     mark: "Asus",
     category: ["computer", "premium"],
     price: 125500,
   },
   {
     mark: "HP",
     category: ["computer", "tech"],
     price: 42000,
   },
   {
     mark: "Samsung",
     category: ["notebook", "premium"],
     price: 52000,
   },
 ];
 
 for (let i = 0; i < laptopsSecond.length; i++) {
  if(laptopsSecond[i].category[i] == "laptop")
  console.log(laptopsSecond[i].mark)
 
 }
 for (let i = 0; i < laptopsSecond.length; i++) {
     for (let j = 0; j < laptopsSecond[i].category.length; j++) {
         if (laptopsSecond[i].category[j] == "tech" ){
             console.log(laptopsSecond[i]);
         }
 
     }
     console.log(laptopsSecond[i].mark);
 }
// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.
 
 let laptops_three = []
 for (let i = 0; i < 5; i++) {
     mark1 = prompt("введи марку ноутбука")
     price1 = +prompt("введи цену ноутбука")
     laptops_three.push({mark : mark1, price : price1})
 }
 console.log(laptops_three)
 
// Задача 4.
 //У пользователя с prompta запрашивать марку/цену. 
// По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
 //На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене
 
 let laptopsSecond1 = [
   {
     mark: "Acer",
     category: ["laptop", "tech"],
     price: 25000,
   },
   {
     mark: "Apple",
     category: ["notebook", "tech"],
     price: 37000,
   },
   {
     mark: "Asus",
     category: ["computer", "premium"],
     price: 125500,
   },
   {
     mark: "HP",
     category: ["computer", "tech"],
     price: 42000,
   },
   {
     mark: "Samsung",
     category: ["notebook", "premium"],
     price: 52000,
   },
 ];
 
 let mark_new = prompt("Введите название ноутбука который вы ищите");
 let price_new = +prompt("Введите приемлемую цену для вас");
 for (let i = 0; i < laptopsFourth.length; i++) {
     if (laptopsFourth[i].mark == mark_new) {
 console.log(laptopsFourth[i]);
 }
     if (laptopsFourth[i].price <= price_new) {
 console.log(laptopsFourth[i]);
 }
 }
console.log(`<div> 
<h1>${laptops[1].mark}<h1>
<p>${laptops[1].price}</p>
</div>





`)
console.log(`<div class="laptops">
<h1>${laptops.mark}</h1>
<p>${laptops.price}</p>
</div>
`)