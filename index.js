let driver = {}

let updateDriverWithKeyAndValue = function(driver, key, value){
  // nondestructive update
  return Object.assign({}, driver, {[key]: value})
}

let destructivelyUpdateDriverWithKeyAndValue = function(driver, key, value){
  driver[key] = value
  return driver
}

let deleteFromDriverByKey = function(driver, key){
  let newObj = Object.assign({}, driver)
  delete newObj[key]
  return newObj
}

let destructivelyDeleteFromDriverByKey = function(driver, key){
  delete driver[key]
  return driver
}

updateDriverWithKeyAndValue(driver, 'name', 'Sam')
