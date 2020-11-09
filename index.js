function findMatching(drivers, name) {
    return drivers.filter( driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( driver => 
        driver.indexOf(string) === 0)
}

function matchName(drivers, string) {
    return drivers.filter(driver => 
        driver.name === string    
    )
}