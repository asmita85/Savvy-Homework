class Product {
    constructor(id, category){
    this.id = id;
    this.name = name;
    this.date = date;
}
}
class TShirt extends Product {
    constructor(id, category, name, brand, description, price, size, color, type){
    super(id, category);
    this.name = name;
    this.brand = brand;
    this.description = description;
    this.price = price;
    this.size  = size;
    this.color = color;
}
}

class Shoes extends Product {
    constructor(id, category, name, brand, description, price, size, color, type, typeId){
    super(id, category);
    this.name = name;
    this.brand = brand;
    this.description = description;
    this.price = price;
    this.size  = size;
    this.color = color;
    this.type = type;
    this.typeId = typeId;
}
}