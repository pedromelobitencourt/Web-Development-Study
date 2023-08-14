const printResult = function(grade) {
    switch(Math.floor(grade)) { // value
        case 10:
        case 9:
            console.log('Honor board');
            break;
        case 8:
        case 7:
            console.log('Approved');
            break;
        case 6:
        case 5:
        case 4:
            console.log('Must go to summer classes');
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Disapproved');
            break;
        default:
            console.log('Invalid grade');
    }
}