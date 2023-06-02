const botonMenu=document.querySelector(".sliderButton")
const menu=document.querySelector(".sliderPanel")
botonMenu.addEventListener("click", function()
{
    botonMenu.classList.toggle("change")
    validar ()
})
function validar ()
{
   if(botonMenu.classList.contains("change"))
    {
        menu.style="left: 0;" 
    }
    else
    {
        menu.style="left: -100vw;"
    }
}
validar ()