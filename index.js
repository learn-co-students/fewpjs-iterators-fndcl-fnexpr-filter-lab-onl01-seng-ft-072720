function findMatching (drivers, testString) {
    return drivers.filter( name => 
        name.toLowerCase() == testString.toLowerCase()
    )
}
function fuzzyMatch (drivers, testString){
    return drivers.filter(name =>
        name.toLowerCase().indexOf(testString.toLowerCase()) === 0
)}
function matchName (drivers, testString){
    return drivers.filter(driver => driver.name == testString)
}