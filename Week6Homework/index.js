class Product {
    constructor(id, category, brand){
    this.id = id;
    this.name = name;
    this.brand = brand;
}
}
 let product1 = new Product(1, "shirt", "nike");
 let product2 = new Product(2, "shoes", "nike");

class Shirt extends Product {
    constructor(id, category, brand, description, price, size, color, type){
    super(id, category, brand);
    this.name = name;
    this.description = description;
    this.price = price;
    this.size  = size;
    this.color = color;
    this.type = type;
}
}
let TShirt = new Shirt(1, "shirt", "nike","short Sleeve tshirt","$50",["s","m","l"],["red","blue","black"],"clothes");

class Shoes extends Product {
    constructor(id, category, brand, name, description, price, size, color, type, typeId){
    super(id, category, brand);
    this.name = name;
    this.description = description;
    this.price = price;
    this.size  = size;
    this.color = color;
    this.type = type;
    this.typeId = typeId;
}
}

let vega = new Shoes(2, "shoes", "nike", "high top running shoes","$60",[7,8,9,10],["black","red"],"running","lightweight");

console(vega.brand);