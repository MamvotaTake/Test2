class MyClass {

    // Here we import the File System module of node
    private fs = require('fs');

    constructor() { }

    
        

    createFile() {
        const array1 = [];
        let numbers = 0
        for(let i = 1; i < 6; i++) {
            numbers = array1.push(i)
        }
        // pass a function to map
        const map1 = array1.map(x => x);

        const typedArray1 = new Int8Array(map1.length);
        typedArray1[numbers] = 0;
        console.log(typedArray1);

        this.fs.writeFile('file.txt', typedArray1,  function(err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }
}

// Usage
var obj = new MyClass();
obj.createFile();
