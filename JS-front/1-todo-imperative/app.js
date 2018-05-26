var taskArray=[];//liste des tache
//on selectione l'eélèment formulaire
var taskForm=document.getElementById('addTaskForm')

taskForm.addEventListener("submit",function (event) {
  //empeche l'envoie du formulaire sur un autre page
  event.preventDefault();
  //on récupere le champ du formualaire
  var name=taskForm.elements.namedItem("newTask").value;
  console.log(name);

  //object avec deux propriétés
  var item= {name:name,done:false}
  taskArray.push(item)
  var id=taskArray.length-1;
  console.log(taskArray);

  var li =document.createElement("li");
  li.id="item"+id;
  li.className="list-group-item list-group-item-action"
  
  var checkbox=document.createElement("input");
  checkbox.type="checkbox";
  checkbox.dataset.id=id;
  checkbox.addEventListener('click',function () {
    var id=this.dataset.id
    taskArray[id].done= !taskArray[id].done
    if (taskArray[id].done) {
      document.getElementById('item'+id).style.textDecoration="line-through";
    }else {
      document.getElementById('item'+id).style.textDecoration="";
    }
  });
  var span= document.createElement('span');
  span.innerHTML=name;
  li.appendChild(checkbox);
  li.appendChild(span);

  var list= document.getElementById('list');
  list.appendChild(li);
})
