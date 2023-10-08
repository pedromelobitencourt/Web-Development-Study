const http = require('http');

const getClass = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`;

    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = '';
    
            res.on('data', data => {
                result += data;
            });
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(result));
                }
                catch(e) {
                    reject(e);
                }
            });
        })
    });
}

// Simplify Promise use, making the code looks like synchronized
// Await only works with async functions
let getStudents = async () => {
    const ca = await getClass('A');
    const cb = await getClass('B');
    const cc = await getClass('C');

    return [].concat(ca, cb, cc);
} // returns a AsyncFunction object

getStudents()
    .then(students => students.map(a => a.nome))
    .then(nomes => console.log(nomes));