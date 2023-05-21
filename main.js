window.addEventListener(('load'), ()=>{ //not 'windows' & not 'loads'
    const form = document.querySelector("#add-form");
    const input = document.querySelector("#add-text");
    const list_elements = document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert('Please fill out your new task');
        }
        else{
            const t = document.createElement("div");
            t.classList.add("task");

            const t_content_element = document.createElement("div");
            t_content_element.classList.add("content");

            const t_input_element = document.createElement("input");
            t_input_element.classList.add("task-text");
            t_input_element.type = "text";
            t_input_element.value = task;
            t_input_element.setAttribute("readonly", "readonly");

            const t_action_element = document.createElement("div");
            t_action_element.classList.add("actions");

            const t_edit_element = document.createElement("button");
            t_edit_element.classList.add("edit");
            t_edit_element.innerHTML = "Edit"; // without this, the button won't be displayed

            const t_delete_element = document.createElement("button");
            t_delete_element.classList.add("delete");
            t_delete_element.innerHTML = "Delete";

            t_content_element.appendChild(t_input_element);
            t.appendChild(t_content_element);
            t_action_element.appendChild(t_edit_element);
            t_action_element.appendChild(t_delete_element);
            t.appendChild(t_action_element);
            list_elements.appendChild(t);
        }
    })
})

