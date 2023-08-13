Number.prototype.between = function(begin, end) {
    return this >= begin && this <= end;
}

const printResult = function(grade) {
    if(grade.between(9, 10))
        console.log('Honor Board');
    else if(grade.between(7, 8.99))
        console.log('Approved');
    else if(grade.between(4, 6.99))
        console.log('Must go to summer school classes');
    else if(grade.between(0, 3.99))
        console.log('Disapproved');
    else
        console.log('Invalid grade');
}