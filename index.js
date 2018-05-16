// Code your solution in this file
let newDrivers=[]

function findMatching(drivers, name){
  newDrivers=[]
  newDrivers=drivers.filter(function(element){return element.toLowerCase()===name.toLowerCase()})
  return newDrivers
}

