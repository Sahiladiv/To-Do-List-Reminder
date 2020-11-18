function setdate(x){
  var index = x.parentNode.parentNode.rowIndex;
  var data = document.getElementsByClassName('hold');
  var dataRow = document.getElementsByClassName('holdclass');
  var taskDate = document.createElement("input");
  var taskDateType = document.createAttribute("type");
  taskDateType.value = "date";
  taskDate.setAttributeNode(taskDateType)
  console.log(data[index])
  dataRow[index].appendChild(taskDate)
  data[index].appendChild(dataRow[index])
}

function addReminder(){
  var template = document.getElementById('dataTable');

  var holddiv = document.createElement("div");
  var holderclass = document.createAttribute("class");
  holderclass.value = "holdclass"
  holddiv.setAttributeNode(holderclass);

  var dataRow = document.createElement("tr");
  var holder = document.createAttribute("class");
  holder.value = "hold"

  dataRow.setAttributeNode(holder);

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
  var   removeButton = document.createElement("button");
  var removeText = document.createTextNode("Remove");
  removeButton.appendChild(removeText);
  var removeClass = document.createAttribute("class");
  removeClass.value = "remove";
  removeButton.setAttributeNode(removeClass)
  var removeClick = document.createAttribute("onclick");
  removeClick.value = "remove(this)"
  removeButton.setAttributeNode(removeClick);

  var setDateButton = document.createElement("button");
  var setDateText = document.createTextNode("Set Date");
  setDateButton.appendChild(setDateText);
  var dateClass = document.createAttribute("class");
  dateClass.value = "setDate";
  setDateButton.setAttributeNode(dateClass)
  var dateClick = document.createAttribute("onclick");
  dateClick.value = "setdate(this)"
  setDateButton.setAttributeNode(dateClick);

  holddiv.appendChild(status)
  holddiv.appendChild(removeButton)
  holddiv.appendChild(task)
  holddiv.appendChild(setDateButton)
  dataRow.appendChild(holddiv);
  template.appendChild(dataRow)

}

function remove(x){
  var index = x.parentNode.parentNode.rowIndex;
  var data = document.getElementsByClassName('hold');
  data[index].remove();
}
