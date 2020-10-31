 // Write code under this line
const Account = function(login, email){
    this.login = login;
    this.email = email;
    
}


Account.prototype.getInfo = function(){
 return `login : ${this.login}, email: ${this.email}`;
}
console.log(typeof Account.prototype.getInfo);
 
// 'function'

 const mango = new Account('Mangozedog', 'mango@dog.woof');
console.log(mango.getInfo(Account)); 
// console.log(mango)
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account('Poly', 'poly@mail.com');
console.log(poly.getInfo());
// console.log(poly)
// 'login : Poly, email: poly@mail.com'


// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email.

// В prototype функции-конструктора добавь метод getInfo(), 
// который возвращает строку со значениями свойств login и email объекта.