var taskArray=[];//liste des tache
//on selectione l'eélèment formulaire
var taskForm=document.getElementById('addTaskForm')

taskForm.addEventListener("submit",monCallback);

var monCallback =function (event) {
  event.preventDefault();
  //on récupere le champ du formualaire
  var name=taskForm.elements.namedItem("newTask").value;
  //object avec deux propriétés
  var item= {name:name,done:false}
  taskArray.push(item)
  var id=taskArray.length-1;

  var htmlTask =displayHTML(id,name)

  document.getElementById('list').innerHTML+=htmlTask

}
function displayHTML(id,name) {
  var htmlTask=`
  <li id="item${id}" class="list-group-item list-group-item-action">
    <input onclick="check(this)" data-id="${id}" type="checkbox" name="" value="">
    <span>${name}</span>
  </li>
  `
  return htmlTask;
}
function check(element) {
  console.log(this);
  console.log(element);
  var id=element.dataset.id
  taskArray[id].done= !taskArray[id].done
  if (taskArray[id].done) {
    document.getElementById('item'+id).style.textDecoration="line-through";
  }else {
    document.getElementById('item'+id).style.textDecoration="";
  }
}
