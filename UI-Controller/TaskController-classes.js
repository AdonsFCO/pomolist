class TaskList 
{
    constructor()
    {
       this.listOfTask = [];

    }
    add(description, title)
    {
        this.listOfTask.push(
            {
                title: title,
                description: description,

            }
        )
    }


}
let taksList = new TaskList();

taksList.add("Prueba","test");
console.log(taksList);
