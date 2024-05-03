class Product{
    constructor(code,description){
        this.code=code;
        this.description=description;
    }
    save(products,category_name){
        const fs = require("fs").promises;
        products.forEach(category => {
            if (category.category_name === category_name) {
                category.products.push(this);
            }
        });
        fs.writeFile("./data/categories.json", JSON.stringify(products));
    }

}
module.exports={Product};