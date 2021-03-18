//Create a monitorListArray array here
var monitorListArray = ["Apple", "Peach", "Berry"];
//End of monitorListArray array
function myMonitorFunction(arr) {
  var newMonitorList = [...arr];
  //Only change code below this line
    var monitorList = [];
    for (i = 0; i < newMonitorList.length; i++){
      monitorList.push([newMonitorList[i], i + 1])
    }
    return monitorList;
  //Only change code above this line
}
console.log(myMonitorFunction(monitorListArray));
module.exports = myMonitorFunction;