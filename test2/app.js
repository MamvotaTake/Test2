var MyClass = /** @class */ (function () {
    function MyClass() {
        // Here we import the File System module of node
        this.fs = require('fs');
        
    }
    MyClass.prototype.createFile = function () {

        const array1 = [];
        for(let i = 1; i < 6; i++) {
            array1.push(i)
        }
        // pass a function to map
        const map1 = array1.map(x => x);
        
        const typedArray1 = new Int8Array(map1.length);
        typedArray1[map1] = '';
        console.log(typedArray1);

        this.fs.writeFile('file.txt', typedArray1, function (err) {
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
