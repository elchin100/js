let hours = new Date().getHours()

function Mode(){

    if (hours > 9 && hours < 18){
        document.body.style.background = "green";
    
    } else if (hours > 18 && hours < 7){
        document.body.style.background = "red";
    }
}


Mode();