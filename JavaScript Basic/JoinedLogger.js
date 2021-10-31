console.log(`\n*******Joined Logger*******`)

function logger(msg) {
    console.log(`${msg.text}\n`);
}


function joinedLogger(level, sep) {
    function f(...args) {
        for (var i = 0; i < args.length; i++) {
            if (args[i].level < level) {
                args.splice(i, 1);
                i = i - 1;
            }
        }
        var joinedMsg = args.map(function(elem) {
            return elem.text;
        }).join(sep);
        logger({
            "text": joinedMsg
        });
    }
    return f;
}

//test-4
let messages = [{
    level: 2,
    text: 'corn'
}, {
    level: 22,
    text: 'lift'
}, {
    level: 74,
    text: 'procedure'
}, {
    level: 64,
    text: 'daughter'
}, {
    level: 90,
    text: 'being'
}, {
    level: 42,
    text: 'album'
}]
var level = 64,
    sep = ',';
const myLog = joinedLogger(level, sep);
myLog(...messages);

/*
var msg1 = {
    level: 40,
    text: "foo"
}
var msg2 = {
    level: 90,
    text: "bar"
}
var msg3 = {
    level: 20,
    text: "baz"
}
var msg3 = {
    level: 21,
    text: "bax"
}
var f = joinedLogger(21, ';');
f(msg1, msg2, msg3);
*/


//test-2
/*
var f = joinedLogger(21, ';')
var msg1 = {
    level: 40,
    text: "foo"
}
var msg2 = {
    level: 90,
    text: "bar"
}
var msg3 = {
    level: 20,
    text: "baz"
}
var msg4 = {
    level: 21,
    text: "bax"
}
f(msg1, msg2, msg3, msg4);
*/

//test3
/*
var f = joinedLogger(10, '-');
var msg1 = {
    level: 20,
    text: "item1"
}
var msg2 = {
    level: 17,
    text: "item2"
}
f(msg1, msg2);
*/