function Class(title, videoID) {
    this.title = title,
    this.videoID = videoID
}

const class1 = new Class('Hello', 123);
const class2 = new Class('See you', 487);

console.log(class1, class2);

// Simulating 'new'
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;

    f.apply(obj, params);

    return obj;
}