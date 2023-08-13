function treatError(error) {
    // throw new Error('...');
    // throw 10;
    throw {
        nome: error.name,
        msg: error.message
    }
}

function printName(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    }
    catch(e) {
        treatError(e);
    }
    finally {
        console.log('finally');
    }
}

const obj = { nome: 'Roberto' };
printName(obj);