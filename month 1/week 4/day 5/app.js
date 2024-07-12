var taskCount = 0;

function addEntry(e){
    let task = e.target.previousSibling.previousSibling.value;
    e.target.previousSibling.previousSibling.value = null;
    const list_container = document.querySelector("#list");
    const new_task = document.createElement("li");
    const new_task_div = document.createElement("div");
    const new_task_p = document.createElement("p");
    const new_task_x = document.createElement("p");
    const new_task_index = document.createElement("p");
    
    new_task_index.innerText = taskCount.toString();
    taskCount++;
    new_task_p.innerText = task;
    new_task_x.innerText = "X";

    new_task_div.appendChild(new_task_index);
    new_task_div.appendChild(new_task_p);
    new_task_div.appendChild(new_task_x);
    new_task.appendChild(new_task_div);
    new_task_index.classList.add("task_ID");
    new_task_div.classList.add("task_list");
    new_task_x.classList.add("remove_task")

    list_container.appendChild(new_task);

    if(list_container.firstChild.nextSibling.firstChild.firstChild.classList.contains('task_ID_hidden')){
        new_task_index.classList.add("task_ID_hidden");
    }
    
    new_task_x.addEventListener("click", function(e){
        e.target.parentElement.parentElement.remove();
    })
}


function removeAllTasks(){
    const list = document.querySelectorAll(".task_list");
    list.forEach(task => {
        task.parentElement.remove();
    })
    taskCount = 0;
}

function toggleIndex(e){
    const obj = document.querySelectorAll(".task_ID");

    const btnText = document.querySelector(".toggle_Index");

    if(btnText.innerText == "Show Indexing"){
        btnText.innerText = "Hide Indexing";
    }
    else{
        btnText.innerText = "Show Indexing";
    }

    // obj.forEach(task =>{
    //     if(btnText.innerText == "Show Indexing"){
    //         task.style.display = "none";
    //     }else{
    //         task.style.display = "block";
    //     }
    // })

    obj.forEach(task =>{
            if(task.classList.contains('task_ID_hidden')){
                task.classList.remove('task_ID_hidden');
            }else{
                task.classList.add('task_ID_hidden');
            }
    })

}


