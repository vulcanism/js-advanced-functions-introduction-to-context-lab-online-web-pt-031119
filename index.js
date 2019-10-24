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
  let [date, hour] = dateTime.split(" ")

  record.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hour, 10),
    date: date
  })
  return record
}

function createTimeOutEvent(record, dateTime) {
  let [date, hour] = dateTime.split(" ")

  record.timeOutEvents.push({
    type: "TimeOut",
    hour: parseInt(hour, 10),
    date: date
  })
  return record
}

function hoursWorkedOnDate(record, givenDate) {
  let timeIn = record.timeInEvents.find(function(e){
    return e.date === givenDate
  })
  let timeOut = record.timeOutEvents.find(function(e){
    return e.date === givenDate
  })
  return (timeOut.hour - timeIn.hour) / 100
}

function wagesEarnedOnDate(record, givenDate) {

}
