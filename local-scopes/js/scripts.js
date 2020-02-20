$(document).ready(function(){
    $("div#click-one").click(function(event){
        //if the var is removed from "whatToSay" it becomes a unscope
        //and can be accessed from any where
         whatToSay = "Hello!";
        alert(whatToSay);
    });
    
    $("div#click-two").click(function(event){
        alert(whatToSay);
    });
});
//by removing it 
//now both clicks work