likeBtnHandler();






/* Like Button Handle  */
function likeBtnHandler() {
    document.getElementById("heart1").addEventListener("click", function() {
        if (document.getElementById("heart1").innerHTML == '<i class="far fa-heart"></i>'){
            document.getElementById("heart1").innerHTML = '<i class="fas fa-heart"></i>';
        }else{
            document.getElementById("heart1").innerHTML = '<i class="far fa-heart"></i>';
        }
    });
    
    document.getElementById("heart2").addEventListener("click", function() {
        if (document.getElementById("heart2").innerHTML == '<i class="far fa-heart"></i>'){
            document.getElementById("heart2").innerHTML = '<i class="fas fa-heart"></i>';
        }else{
            document.getElementById("heart2").innerHTML = '<i class="far fa-heart"></i>';
        }
    });
    
    document.getElementById("heart3").addEventListener("click", function() {
        if (document.getElementById("heart3").innerHTML == '<i class="far fa-heart"></i>'){
            document.getElementById("heart3").innerHTML = '<i class="fas fa-heart"></i>';
        }else{
            document.getElementById("heart3").innerHTML = '<i class="far fa-heart"></i>';
        }
    });
}
/* --------------------------- */