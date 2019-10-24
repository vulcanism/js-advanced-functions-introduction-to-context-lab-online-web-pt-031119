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

function createTimeInEvent(record, dateTime) {
  let [date, time] = dateTime.split(" ")

  record.timeInEvents.push({
    type: "TimeIn",
    time: parseInt(hour, 10),
    date: date
  })
  return record
}
