function createEmployeeRecord(array) {
  const employeeRecord = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return employeeRecord
}

function createEmployeeRecords(array) {
  return array.map(function(element) {
    return createEmployeeRecord(element)
  })
}
