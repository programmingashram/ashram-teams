    //  trigger //
let trigger = document.getElementById('todotrigger');

trigger.addEventListener('click' , function(){

    let createTodo = document.querySelector('.todoCreate');
    let crateData = document.getElementById('crateData');

    // global array //

    let array = [];

    array.push({name:crateData.value});
    console.log(array);

    // data add //

    for(let i in array){
    createTodo.innerHTML += `
    <div class="mt-5">
        <form action="">
            <div class="d-flex">
                <div class="col-md-8">
                    <input type="text" class="form-control edittodo>
                </div>
                <div class="col-md-4">
                    <i class="fas fa-edit"></i>
                    <i class="fa fa-trash" aria-hidden="true"></i> 
                </div>
            </div>
        </form>
    </div>  `
    };
})
