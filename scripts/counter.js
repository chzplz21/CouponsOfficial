//singleton object for keeping track of count

var counter = {

    checkedTotal: 0,
    
	
    setCounter: function() {
       jQuery("#counterShower").html(this.checkedTotal); 
    },

    increaseCounter: function() {
        this.checkedTotal++;
        this.setCounter();
    },

    decreaseCounter: function() {
        this.checkedTotal--;
        this.setCounter();
    }





    
}




