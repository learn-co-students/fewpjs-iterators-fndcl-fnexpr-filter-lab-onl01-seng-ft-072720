// Code your solution here

function fuzzyMatch(array, string) {
    let dList = array.filter(d => {
        return d[0] === string[0]
    })
    return dList
}

function matchName(array, string) {
    let dList = array.filter(d => {
        return d.name === string
    })
    return dList
}

function findMatching(array, string) {
    let dList = array.filter(d => {
        return d.toLowerCase() === string.toLowerCase()
    })
    return dList
}