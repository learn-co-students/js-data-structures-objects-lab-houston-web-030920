// Write your solution in this file!
const driver = {key: "value"}
function updateDriverWithKeyAndValue(driver, key, value) {
    // Object.assign() is passing the key and value pairs into the empty object
return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  //since this is a destructive way to update the driver, you can basically change the value like this:
    driver[key] = value;
    return driver;
}

function deleteFromDriverByKey(driver, key) {
    //not deleting the key value pair directly because that's not a destructive one.
    //we are using a variable instead. And Object.assign().
  const newObject = Object.assign({}, driver);
  delete newObject[key];

  return newObject;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];

  return driver;
}