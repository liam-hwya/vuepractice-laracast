Vue.component('message',{

    props: ['title','body'],

    template: `
        <div class="card" v-show="isVisible">
            <div class="card-header">
            {{ title }} <button class="btn btn-dark" type="button" @click="hideModal">x</button>
            </div>
            <div class="card-body">
            {{ body }}
            </div>
        </div>
    `,

    data() {
        
        return {

            isVisible: true
        }
    },

    methods: {

        hideModal() {

            this.isVisible = false

        }
    }
})

new Vue({
    el: "#root"
})