console.log("hello");

function checkEqual(a, b) {
    if (a == b) { // Noncompliant: using non-strict equality '=='
        return "Equal";
    } else {
        return "Not equal";
    }
}

console.log(checkEqual(0, false)); // Output: "Equal"

function concatenate() {
    let args = Array.prototype.slice.call(arguments);  // Noncompliant
    return args.join(', ');
}

function doSomething(isTrue) {
    var args = Array.prototype.slice.call(arguments, 1); // Noncompliant
    if (!isTrue) {
        for (var arg of args) {
        }
    }
}

if (x == 0) {
    doSomething();
} else if (x == 1) {
    doSomethingElse();
}