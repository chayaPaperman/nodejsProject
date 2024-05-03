
  class Category{
     constructor(category_name){
        this.category_name = category_name;
        this.products=[];
    }
    save(categories){
        const fs = require("fs").promises;
        categories.push(this);
        fs.writeFile("./data/categories.json", JSON.stringify(categories));
    }
}
 module.exports= {Category};

