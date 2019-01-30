exports.add = function add(x, y)
{
    return x + y;
};

exports.helloWorld = function helloWorld() {    
    const api = new RoadsApi();

    return api.getMsg();
};

export class RoadsApi {
    getMsg() {
        return new Promise(resolve => {
            setTimeout(() => {            
                resolve("asdfsad");    
            }, 3000);              
        });
    }
}

this.helloWorld();

exports = RoadsApi;