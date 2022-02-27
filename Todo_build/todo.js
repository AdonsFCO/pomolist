  class TodoList {
        constructor(){
            this.tasklist = [];
            this.taskCounter = 0;

        }


        add(title, description)

        {   
            /*Get date*/
            let now = new Date();
            /*********/

            this.tasklist.push(
                {
                    title: title,
                    description: description,
                    completed: false,
                    id: this.taskCounter,
                    dateOfCreation:now,
                    completeDate:null,
                    timeSpended:[],
                    totalTimeSpended:null,
                    totalOfPomodoros:null
                }
            );
            this.taskCounter++

        }
        completeTask(id)
        {
            let now = new Date();
            this.tasklist[id].completeDate = now;
            this.tasklist[id].completed = true;
        }   
        unCompleteTask(id)
        {   

            this.tasklist[id].completed = false;

        }

    

    }   

let list1 = new TodoList();
list1.add("sopaechivo","Somethimes you need to eat soup.");
list1.add("cachoeperro","La picadura de la cobra gay.");
list1.add("sopaechivo","Somethimes you need to eat soup.");
list1.add("cachoeperro","La picadura de la cobra gay.");
console.log(list1.tasklist);
