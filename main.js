Vue.component('modal',{

    template: `
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content">
        <slot></slot>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
    </div>
    `,
    
})

new Vue({
    el: "#root",
    data: {
      showModal: false
    }
})

  