console.log(`\n*******Staff List*******`)

class staffList {
    constructor() {
        this.staffArr = []
    }
    add(name, age) {
        if (age > 20) {
            var nameInd = this.staffArr.findIndex(a => a.name === name);
            if (nameInd < 0) {
                this.staffArr.push({
                    'name': name,
                    'age': age
                });
            }
        } else {
            throw new Error(`Staff member age must be greater than 20`);
        }
    }
    remove(name) {
        var nameInd = this.staffArr.findIndex(a => a.name === name);
        if (nameInd > -1) {
            this.staffArr.splice(nameInd, 1);
            return true;
        } else {
            return false;
        }
    }
    getSize() {
        return this.staffArr.length;
    }
}

let myStuff = new staffList();
try {
    //test-1
    /*
    myStuff.add('John', 25);
    myStuff.add('Robin', 23);
    //wouldn't add myStuff.add('john', 27); rsn same name
    */

    //test-2
    myStuff.add('John', 20);
    myStuff.add('Robin', 10);

} catch (e) {
    console.log(e);
}
console.log(myStuff.getSize())
console.log(myStuff.remove('Robin'));
console.log(myStuff.getSize())