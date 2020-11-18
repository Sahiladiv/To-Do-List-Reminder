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
  var doneClick = document.createAttribute("onclick");
  doneClick.value = "removeData(this)"
  status.setAttributeNode(doneClick)
  status.setAttributeNode(statusType);


  var   removeButton = document.createElement("button");
  var removeText = document.createTextNode("Remove");
  removeButton.appendChild(removeText);
  var removeClass = document.createAttribute("class");
  removeClass.value = "remove";
  removeButton.setAttributeNode(removeClass)
  var removeClick = document.createAttribute("onclick");
  removeClick.value = "remove(this)"
  removeButton.setAttributeNode(removeClick);

// create buttons:start


  var setTimeButton = document.createElement("button");
  var setTimeText = document.createTextNode("Set Time");
  setTimeButton.appendChild(setTimeText);
  var timeClass = document.createAttribute("class");
  timeClass.value = "setime";
  setTimeButton.setAttributeNode(timeClass)
  var timeClick = document.createAttribute("onclick");
  timeClick.value = "setTime(this)"
  setTimeButton.setAttributeNode(timeClick);

  // console.log(doneButton)
// create buttons:end

  holddiv.appendChild(status)
  holddiv.appendChild(removeButton)
  holddiv.appendChild(task)
  holddiv.appendChild(setTimeButton)
  template.appendChild(dataRow)




}

function add(t){
  var saveButton = document.getElementsByClassName("save");
  var taskInput = document.getElementsByClassName('workTask')

  for (var i = 0; i < taskInput.length; i++) {
       localStorage.setItem(i,taskInput[i].value)
  }



}
function removeData(t){
  var index = t.parentNode.parentNode.rowIndex;
}




function setTime(x){
  var index = x.parentNode.parentNode.rowIndex;
  var hourSpan = document.createElement("span");
  var hourText = document.createTextNode(":");
  hourSpan.appendChild(hourText)

  var minutesSpan = document.createElement("span");
  var minutesText = document.createTextNode(":");
  minutesSpan.appendChild(minutesText)

  var secondsSpan = document.createElement("span");
  var secondsText = document.createTextNode(":");
  secondsSpan.appendChild(secondsText)

  var hour = document.createElement("input");
  var hourType = document.createAttribute("type");
  hourType.value="number";
  hourMax = document.createAttribute("max");
  hourMax.value=23;
  hourMin = document.createAttribute("min");
  hourMin.value=0;
  hour.setAttributeNode(hourType);
  hour.setAttributeNode(hourMax);
  hour.setAttributeNode(hourMin);
  var holder = document.getElementById('hold');



  var minutes = document.createElement("input");
  var minutesType = document.createAttribute("type");
  minutesType.value="number";
  minutesMax = document.createAttribute("max");
  minutesMax.value=59;
  minutesMin = document.createAttribute("min");
  minutesMin.value=0;
  minutes.setAttributeNode(minutesType);
  minutes.setAttributeNode(minutesMax);
  minutes.setAttributeNode(minutesMin);

  var seconds = document.createElement("input");
  var secondsType = document.createAttribute("type");
  secondsType.value="number";
  secondsMax = document.createAttribute("max");
  secondsMax.value=59;
  secondsMin = document.createAttribute("min");
  secondsMin.value=0;
  seconds.setAttributeNode(secondsType);
  seconds.setAttributeNode(secondsMax);
  seconds.setAttributeNode(secondsMin);


  var holder = document.getElementsByClassName('hold');
  holder[index].appendChild(hour)
  holder[index].appendChild(hourSpan)

  holder[index].appendChild(minutes)
  holder[index].appendChild(minutesSpan)

  holder[index].appendChild(seconds)




}
