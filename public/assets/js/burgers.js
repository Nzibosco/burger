 $("#submit").on("submit", function(event){
        event.preventDefault();
        

        // create an object to export to the database
        var newBurger = {
            name: $("#burger").val().trim()
        };

        $.ajax("/?", {
            type: "POST", 
            data: newBurger
        }).then(function(data){
            console.log("new burger added"+ data);
            location.reload();
        });
    });