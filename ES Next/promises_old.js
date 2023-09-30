// Asynchronized processing
function talkAfter(seconds, phrase) {
    return new Promise((resolve, reject) => { // resolve: function that will be called when the promise is attended
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}

talkAfter(3, 'Cool').
    then(phrase => phrase.concat('?!?!')).
    then(anotherPhrase => console.log(anotherPhrase)).
    catch(e => console.log(e));