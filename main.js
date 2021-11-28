Vue.component('task-list',{

    template: `
        <div>
            <task v-for="task in tasks">{{ task.title }}</task>
        </div>
    `,

    data() {
        return {
            tasks: [
                {title: 'Go to the store', completed: false},
                {title: 'Go to the school', completed: true},
                {title: 'Date with my GF', completed: false},
                {title: 'Have lunch', completed: false}
            ]
        }
    }
})


Vue.component('task',{
    template: '<li><slot></slot></li>'
})

new Vue({
    el: "#root"
})