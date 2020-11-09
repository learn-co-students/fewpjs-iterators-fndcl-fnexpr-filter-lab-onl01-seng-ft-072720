function findMatching(array, string) {
    return array.filter(n => {
        return n === string || n.toLowerCase() === string.toLowerCase();
    })
}

function fuzzyMatch(drivers, string) {
    let test = new RegExp(`^${string}`, 'i')
    return drivers.filter(n => {
        return test.test(n)
    })
}

function matchName(drivers, string) {
    return drivers.filter(n => {
        return n.name === string
    })
}