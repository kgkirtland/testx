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

main.add(3,6);

module.exports = main;
