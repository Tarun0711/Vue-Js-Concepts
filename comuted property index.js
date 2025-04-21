var vm = new Vue({
    el: '#com_props',
    data: {
        message: '1234567'
    },
    computed: {
        //a computed getter
        reverseMessage: function () {
            //'this' points to the vm instance
            return this.message.split('').reverse().join('')
        }
    }
})