exports.add = function add(x, y)
{
    return x + y;
};

exports.helloWorld = function helloWorld(api) {    
    return api.getMsg();
};

exports.RoadsApi = class RoadsApi {   
    getMsg() {
        return new Promise(resolve => {
            setTimeout(() => {            
                resolve("asdfsad");    
            }, 3000);              
        });
    }
}

