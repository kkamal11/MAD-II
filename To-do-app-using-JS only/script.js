function addTask(){
    const u_list = document.getElementById("all-tasks");
    let val = document.getElementById("input-task").value;

    let newli = document.createElement("li");
    let btn = document.createElement("button");


    newli.classList.add("list-group-item");
    newli.innerHTML = val;

    
    newli.appendChild(btn);
    btn.textContent = "Delete";
    btn.setAttribute("class","sp");
    btn.addEventListener('click',(event) =>{
        u_list.removeChild(event.target.parentNode)
    })

    u_list.appendChild(newli);

    document.getElementById("input-task").value = '';
    return false;
}


// const deleteItem = (event) => {

// }
// {/* <span class="badge badge-primary badge-pill">14</span> */}
// const f = document.getElementById("frm");
// f.addEventListener('onsubmit',addTask)

