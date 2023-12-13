//obtengo modales
var modalbtns = document.querySelectorAll(".modal__btn");
modalbtns.forEach(function(btn){
    btn.onclick=function(){
    var modal = btn.getAttribute("data-modal");
    document.getElementById(modal).style.display="block";
    };
})




/*=============== SHOW MODAL ===============
const showModal = (openButton, modalContent) =>{
    const openBtn = document.getElementById(openButton),
    modalContainer = document.getElementById(modalContent)
   
    if(openBtn && modalContainer){
        openBtn.addEventListener('click', ()=>{
            modalContainer.classList.add('show-modal')
        })
    }
}
showModal('open-modal','modal-container')
var modal2 = document.getElementById('modal-container2');
var btn2 =document.getElementById('open-modal2')
/*=============== CLOSE MODAL ===============
const closeBtn = document.querySelectorAll('.close-modal')

function closeModal(){
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('show-modal')
}
closeBtn.forEach(c => c.addEventListener('click', closeModal))*/