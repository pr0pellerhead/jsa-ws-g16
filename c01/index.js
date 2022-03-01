const fs = require('fs');

console.log('hello world!');

setTimeout(() => {
    console.log('timeout');
}, 1000);

console.log('end');

const fn1 = (a, b, cb) => {
    let r = cb(a + b);
    if(r) console.log(r);
};

fn1(3, 6, (res) => {
    console.log(res * 100);
    return 200;
});

fn1(3, 6, (res) => {
    return res * 10;
});

// creating promises

// 1 - create an empty function
const pr1 = () => {

};

// 2 - setup the *promise return*
const pr2 = () => {
    return new Promise();
};

// 3 - assign the logic function
const pr3 = () => {
    return new Promise(() => {

    });
};

// 4 - set the success and fail (response and reject) callbacks
const pr4 = () => {
    return new Promise((success, fail) => {
        // your code goes here
    });
};

// 5 - finalize the function
const pr5 = (a, b) => {
    return new Promise((sucess, fail) => {
        let res = a * b;
        if(res > 100 || res < 0) {
            return fail('Result out of range'); // fail calls the "catch" function
        }
        return sucess(res); // success calls the "then" function
    });
};

pr5(1, 100)
    .then(res => {
        console.log('Your result is:', res);
    }).catch(err => {
        console.error(err);
    });

(async () => {
    try {
        let data = await pr5(1, 50);
        console.log('data:', data);
    } catch(err) {
        console.error(err);
    }
})();

// ()();
// (() => {})();
// (async () => {})();
// (async () => {
    // ... code ...
// })();

// writeFile('message.txt', 'Hello Node.js', 'utf8', callback);

const fileWrite = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, 'utf8', err => {
            if(err) return fail(err);
            return success();
        });
    });
};

fileWrite('text.txt', 'Test generacija 16')
    .then(() => {
        console.log('Successfully wrote to file');
    }).catch(err => {
        console.log(err);
    });