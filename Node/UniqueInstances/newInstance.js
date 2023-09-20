module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++;
        }
    }
}