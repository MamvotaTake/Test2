var MyClass = /** @class */ (function () {
    function MyClass() {
        // Here we import the File System module of node
        this.fs = require('fs');
        
    }
    MyClass.prototype.createFile = function () {

        const array1 = [];
        const array2 = []
        for(let i = 1; i < 6 + 1; i++) {
            array1.push(i)
            array2.push(0)
            
        }

        console.log(array1.push(array2.join(" ")),'array');
        // array1.join("")

        this.fs.writeFile('file.txt', array1.join(" "), function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    };
    return MyClass;
}());
// Usage
var obj = new MyClass();
obj.createFile();
