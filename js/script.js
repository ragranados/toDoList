window.onload = init;
   
function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {
            let element = document.createElement("div");
            
            let li = document.createElement("li");
            li.innerText = task;
            
            let bottonBorrar = document.createElement("button");
            bottonBorrar.innerText ="Borrar";
            bottonBorrar.style.marginLeft = ("10px");

            let bottonTachar = document.createElement("button");
            bottonTachar.innerText ="Tachar";
            /*bottonTachar.style.marginLeft = ("10px"); */

            element.appendChild(bottonTachar);
            element.appendChild(bottonBorrar);
            element.appendChild(li);
            
            bottonTachar.addEventListener('click',function(){
                let parent = this.parentElement;

                parent.getElementsByTagName("li")[0].style.textDecoration = "line-through";
            });

            bottonBorrar.addEventListener("click", function(){
               console.log(this);
               let parent = this.parentElement;
               if(parent){
                   parent.remove(parent);
               }
            });
           // Añadir un boton para marcar de finalizado
           // Elmine de la lista

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}