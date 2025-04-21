var vm = new Vue({
    el: '#com_props',
    data: {
        firstName : "NEHA",
        lastName : "RATHER"
    },
    methods: {

    },
    computed :{
        fullname : {
            get : function() {
                return this.firstName+" "+this.lastName;
            },
            set : function(name) {
                var fname = name.split(" ");
                this.firstName = fname[0];
                this.lastName = fname[1]
            }
        }
    }
})