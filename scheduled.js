
function setdate(x){
  var index = x.parentNode.parentNode.rowIndex;
  var dataRow = document.getElementsByClassName('hold');

  // var breakline1 = document.createElement("br");
  // // var breakline2 = document.createElement("br");
  // var holddiv = document.getElementsByClassName("hold");
  //
  //   console.log(holddiv[0]);

  //
  // var template = document.getElementById('job');
  var taskDate = document.createElement("input");
  var taskDateType = document.createAttribute("type");
  taskDateType.value = "date";
  taskDate.setAttributeNode(taskDateType)
  dataRow[index].appendChild(taskDate);
  var dateSet = document.getElementsByClassName('setDate');
  dateSet[index].disabled = true
  // template.appendChild(holddiv);
  // holddiv.appendChild(breakline1);
  // holddiv.appendChild(breakline2);

}




function addToday(){
var template = document.getElementById('dataTable');



  var dataRow = document.createElement("tr");

  var holddiv = document.createElement("div");
  var holder = document.createAttribute("class");
  holder.value = "hold"
  holddiv.setAttributeNode(holder);
  dataRow.appendChild(holddiv);


  var task = document.createElement("input");
  var taskType = document.createAttribute("type");
  var taskSize = document.createAttribute("size");
  var taskClass = document.createAttribute("class");

  taskType.value="text"
  taskSize.value="100"
  taskClass.value = "workTask"

  task.setAttributeNode(taskType)
  task.setAttributeNode(taskSize)
  task.setAttributeNode(taskClass)





  var status = document.createElement("input");
  var statusType = document.createAttribute("type");
  statusType.value="radio";
  status.setAttributeNode(statusType);

// create buttons:start
  var doneButton = document.createElement("button");
  var doneText = document.createTextNode("Done");
  doneButton.appendChild(doneText);
  var doneClass = document.createAttribute("class");
  doneClass.value = "done";
  doneButton.setAttributeNode(doneClass)
  var doneClick = document.createAttribute("onclick");
  doneClick.value = "add(this)"
  doneButton.setAttributeNode(doneClick);

  var setDateButton = document.createElement("button");
  var setDateText = document.createTextNode("Set Date");
  setDateButton.appendChild(setDateText);
  var dateClass = document.createAttribute("class");
  dateClass.value = "setDate";
  setDateButton.setAttributeNode(dateClass)
  var dateClick = document.createAttribute("onclick");
  dateClick.value = "setdate(this)"
  setDateButton.setAttributeNode(dateClick);

  // console.log(doneButton)
// create buttons:end

  holddiv.appendChild(status)
  holddiv.appendChild(task)
  holddiv.appendChild(doneButton)
  holddiv.appendChild(setDateButton)

  template.appendChild(dataRow)




}

function add(t){
  var index = t.parentNode.parentNode.rowIndex;
  var doneButton = document.getElementsByClassName("done");
  doneButton[index].disabled=true

  // task[index].disabled=true
}
