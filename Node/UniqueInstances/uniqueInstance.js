// Instead of storing the module, we can create a new module every time, using Factory

module.exports = {
    value: 1,
    inc() {
        this.value++;
    }
}