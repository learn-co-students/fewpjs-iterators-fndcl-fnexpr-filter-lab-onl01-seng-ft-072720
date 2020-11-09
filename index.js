// Code your solution here

function findMatching(array, name) {
    return array.filter( n => n.toLowerCase() === name.toLowerCase()) 
}

function fuzzyMatch(array, name) {
    return array.filter( n => n.slice(0, name.length).toLowerCase() === name.toLowerCase()) 
}

function matchName(array, name) {
    return array.filter( obj => (obj.name === name))
}