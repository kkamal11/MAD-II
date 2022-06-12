var vm = new Vue({
    el:'#app',
    data:{
        placeholder:"Enter task here...",
        message:"",
        taskList: [],
        warning:"",
        filteredTasks: [],
        selectedFilter: "Select here to filter task"
    },
    methods:{
        addTask:function(event){
            if(this.message != ""){
                this.taskList.push({task:this.message, status:'Incomplete'});
                this.warning = "";
            }
            else{
                this.warning = "You forgot to enter task!!!"
            }
            this.message = "";
            event.preventDefault();
        },
        deleteTask:function(index){
            this.taskList.splice(index,1)  //remove 1 element at index index;
            this.filteredTasks = "Select here to filter task";
        },
        taskCompleted: function(index){
            if(this.taskList[index].status == 'Incomplete'){
                this.taskList[index].status = "Complete";
            }
        }
    },
    watch:{
        message(val){
            if(val.length != 0){
                this.warning = ""
            }
            let num = "0123456789";
            for(let i=0; i<val.length; i++){
                if( num.includes(val[i]) && this.warning.length == 0){
                    this.warning = "You tried entering a number. Please enter alpha character.";
                    this.message = "";
                }
            }
        },
        taskList(){
            this.filteredTasks = this.taskList
        },
        selectedFilter(val){
            if(val == "Complete" || val == "Incomplete"){
                this.filteredTasks = this.taskList.filter((task) => {
                    return task.status == val;
                })
            }
            else{
                this.filteredTasks = this.taskList;
            }
        }

    }
})

/*
create task
delete task
mark them as complete incomplete
filter task
*/