class Product {
    constructor(id, category, brand){
    this.id = id;
    this.name = name;
    this.brand = brand;
}
}
class TShirt extends Product {
    constructor(id, category, brand, description, price, size, color, type){
    super(id, category, brand);
    this.name = name;
    this.description = description;
    this.price = price;
    this.size  = size;
    this.color = color;
}
}
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