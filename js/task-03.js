 // Write code under this line
  class Storage{
   constructor(items){
    this.items = items
 }
 getItems(){
     return this.item
 }
 addItem(items){
     this.items.push(items)
 }
 removeItem(item){
return this.items.splice(this.items.indexOf(item),1);
 }
}
// this.goods.indexOf(item) +
// в removeItem надо проверить есть ли item в массиве)
//  Если есть, узнать его индекс и удалить item по его индексу)


 console.log(typeof Storage);
// 'function'

const goods = [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ];
  
 const storage = new Storage(goods);
  
   console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор'
  ] */
  
   storage.addItem('Дроид');
  console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */
  
   storage.removeItem('Пролонгер');
   console.log(storage.getItems());
  /* [
    'Нанитоиды',
    'Железные жупи',
    'Антигравитатор',
    'Дроид'
  ] */

//   ПОЯСНЕНИЯ 
  
//   Напиши класс Storage, который будет создавать объекты для управления складом товаров. 
//   При вызове будет получать один аргумент - начальный массив товаров, и 
//   записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив текущих товаров
// addItem(item) - получает новый товар и добавляет его к текущим
// removeItem(item) - получает товар и, если он есть, удаляет его из текущих




// for(let i = 0; i < goods.length; i += 1){
//     if(goods[i] === items){
//          this.goods.splice(this.goods.indexOf(item),1)
//     }
//    }