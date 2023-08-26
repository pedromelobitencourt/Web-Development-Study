Array.prototype.forEach2 = function(callback) { // callback is the function
    let size = this.length;

    for(let i = 0; i < size; i++) {
        callback(this[i], i, this);
    }
}

const approved = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

approved.forEach2(function(name, index) { // element, index
    console.log(`${index + 1}: ${name}`);
});