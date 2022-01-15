function randomObject(obj) {
    const arr = Object.values(obj)
    const index = Math.floor(Math.random() * arr.length)
    return arr[index]
}

module.exports = randomObject