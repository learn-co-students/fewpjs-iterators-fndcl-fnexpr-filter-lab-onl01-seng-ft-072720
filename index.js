// Code your solution here
function findMatching(drivers, string){
    let downcase = string.toLowerCase()
    let matches = drivers.filter(n => {return n.toLowerCase() === downcase})
    return matches
}

function fuzzyMatch(drivers, string){
    let matches = drivers.filter(n => {
        return n.startsWith(string)
    })
    return matches
}

function matchName(drivers, string){
    let matches = drivers.filter(n => {
        return n.name === string
    })
    return matches
}