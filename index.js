function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction () {
    var fn;
    return function namedFn() {
        console.log("this function is named");
    }
}

function returnsAnAnonymousFunction () {
    return (anon) => console.log("anonymous func here");
}