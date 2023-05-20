window.addEventListener(('load'), ()=>{ //not 'windows' & not 'loads'
    const form = document.querySelector("#add-form");
    const input = document.querySelector("#add-text");
    const task_element = document.querySelector("#tasks");

    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert('Please fill out your new task');
        }
        else{
            console.log("Success");
        }

    })
})