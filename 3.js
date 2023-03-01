let str1 = 'name-contains-fd&price-=2&quantity->5&description-ends-abc';
let str2 = 'name-starts-fd&quantity-=5';

class Product {

    constructor(name, price, quantity, description) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }

    containArray(str) {

        let nameArr = str.match(/name-(\w+)/);
        if(nameArr == null){
            this.name = '';
        }else{
            this.name = nameArr[1];
        };
        let priceArr = str.match(/price-((\W)(\d+))/);
        if(priceArr == null){
            this.price = '';
        }else{
            this.price = priceArr[1];
        };
        let quantityArr = str.match(/quantity-((\W)(\d+))/);
        if(quantityArr == null){
            this.quantity = '';
        }else{
            this.quantity = quantityArr[1];
        };
        let descriptionArr = str.match(/description-(\w+)/);
        if(descriptionArr == null){
            this.description = '';
        }else{
            this.description = descriptionArr[1];
        };
        let mass = [];
        mass.push(this.name, this.price, this.quantity, this.description);
        return mass;
    }
}

let x = new Product();
console.log(x.containArray(str1));
console.log(x.containArray(str2));