const app = new Vue ({
    el: '#app',
    data: {
        toDoAll: [
            {
                text: 'Giro',
                done: false
            },
            {
                text: 'Vedo gente',
                done: false
            },
            {
                text: 'Mi muovo',
                done: false
            },
            {
                text: 'Faccio delle cose',
                done: false
            },
        ],
    },
    methods: {
        deleteItem(index){
            this.toDoAll.splice(index, 1);
        },
        addNew(){
            let newTask = {
                text: this.newTask,
                done: false,
            };
            this.toDoAll.push(newTask);
            this.newTask = '';
        },
    }
})
