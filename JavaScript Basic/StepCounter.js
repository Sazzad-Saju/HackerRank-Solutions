console.log(`\n*******Step Counter*******`)

const counter = (function counter() {
    let value = 0;
    return {
        getValue: function() {
            return value;
        },
        changeBy: function(k) {
            value += k;
        },
    }
})();

function getFixedCounter(k) {
    let counterObj = counter;
    return {
        increment: () => {
            counterObj.changeBy(k);
        },
        decrement: () => {
            counterObj.changeBy(-k);
        },
        getValue: () => {
            return counterObj.getValue();
        }
    }
}

// main 
/* //test1
var returnObj = getFixedCounter(1);
returnObj.increment();
console.log(returnObj.getValue());
returnObj.decrement();
console.log(returnObj.getValue());
*/

//test2
var returnObj = getFixedCounter(2);
returnObj.decrement();
console.log(returnObj.getValue());
returnObj.increment();
returnObj.increment();
console.log(returnObj.getValue());