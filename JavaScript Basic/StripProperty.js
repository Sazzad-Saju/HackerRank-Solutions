console.log(`\n*******Strip Property*******`)

function stripProperty(obj, prop) {
    delete obj[prop]
    return obj;
}
var obj = {};
obj.foo = 2;
obj.bar = 3;
obj.baz = 3;
console.log(stripProperty(obj, 'baz'))