//obtengo modales
var modalbtns = document.querySelectorAll(".modal-open");
modalbtns.forEach(function(btn){
    btn.onclick=function(){
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display="block";
    };
});
var closebtns =document.querySelectorAll(".modal__close");
closebtns.forEach(function(btn){
    btn.onclick=function(){
        var modal=(btn.closest(".modal").style.display="none");
    };
});
