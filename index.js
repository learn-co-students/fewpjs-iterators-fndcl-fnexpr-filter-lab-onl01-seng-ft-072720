function findMatching(drivers, str){
   return drivers.filter(name => {
      return name === str
  })
}

function fuzzyMatch(drivers, str){
  return drivers.filter(name => {
    return name.startsWith(str)
  })
}

function matchName(drivers, str) {
  return drivers.filter(obj => {
    return obj.name === str 
  })
}