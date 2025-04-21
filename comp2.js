var vm = new Vue({
    el: '#computed',
    data: {
        firstname :"",
        lastname :"",


    },
    computed :{
        getfullname : function(){
            return this.firstname + " "+this.lastname;
        }
    }
})