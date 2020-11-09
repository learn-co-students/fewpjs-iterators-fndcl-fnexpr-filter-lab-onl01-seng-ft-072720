// ✓ returns all drivers that match the passed in name
// ✓ returns matching drivers if case does not match but letters do
// ✓ returns an empty array if there is no match

function findMatching(driver, string) {
    return driver.filter( possibleMatch =>
        possibleMatch.toLowerCase() === string.toLowerCase()
        )
}

// ✓ returns a driver if beginning provided letters match
// ✓ does not return drivers if only middle or ending letters match
// ✓ does not return drivers if only middle or ending letters match

function fuzzyMatch(driver, string) {
    return driver.filter( possibleMatch => 
        possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
        )
}

// ✓ accesses the data structure to check if name matches

function matchName(driver, string) {
    return driver.filter( record => record.name === string)
}