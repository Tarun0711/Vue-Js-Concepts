new Vue({
    el: '#app',
    data: {
        counter : 0
    },
    methods: {
        increment : function(){
            this.counter += 2
        },
        decrement : function(){
            this.counter -= 1
        }
    }
})