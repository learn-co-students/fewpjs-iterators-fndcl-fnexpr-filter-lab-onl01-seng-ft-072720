// Code your solution here

function findMatching(array, name) {
    return array.filter( n => {
        if (n.toLowerCase() === name.toLowerCase()) {
            return name;
        }
    })
}

function fuzzyMatch(array, name) {
    return array.filter( n => {
        if (n.slice(0, name.length).toLowerCase() === name.toLowerCase()) {
            return name;
        }
    })
}

function matchName(array, name) {
    return array.filter( obj => {
        if (obj.name === name) {
            return obj
        }
    })
}