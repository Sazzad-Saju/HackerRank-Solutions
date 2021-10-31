console.log(`\n*******Data Finder*******`)

function dataFinder(data) {
    function find(minRange, maxRange, value) {
        var flag = false;
        for (var i = minRange; i <= maxRange; i++) {
            if (data[i] == value) {
                flag = true;
            }
        }
        if (minRange < 0 || maxRange >= data.length) {
            throw new Error(`Invalid range`);
        } else {
            return flag;
        }
    }
    return find;
}

// test-1
/*
const finalData = [15, 1, 10, 5, 4, 20];
const join = dataFinder(finalData);
try {
    var inputs = [1, 4, 4];
    const result = join(parseInt(inputs[0]), parseInt(inputs[1]), parseInt(inputs[2]));
    console.log(result);
} catch (e) {
    console.log(e);
}
*/
//test-2
const finalData = [10, 1, 0, 13, 4, 15];
const join = dataFinder(finalData);
try {
    var inputs = [1, 10, 13];
    const result = join(parseInt(inputs[0]), parseInt(inputs[1]), parseInt(inputs[2]));
    console.log(result);
} catch (e) {
    console.log(e.message);
}