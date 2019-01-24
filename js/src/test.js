var main = (function() {
    var add = function add(x, y)
    {
        return x + y;
    };

    var helloWorld = function helloWorld() {
        return 'Hello world!';
    };

    return {
        add: add,
        helloWorld: helloWorld
    }
})();

module.exports = main;
