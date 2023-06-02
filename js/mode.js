const modo = document.querySelectorAll(".switch")
const menuItem = document.querySelectorAll(".menuItem")
const botonInicio=document.querySelectorAll(".boton")

for (let i = 0; i < modo.length; i++) 
{
    modo[i].addEventListener("click", function () 
    {
        modo[0].classList.toggle("switchDark")
        modo[1].classList.toggle("switchDark")
        document.querySelectorAll(".switchPosition")[0].classList.toggle("switchPositionDark")
        document.querySelectorAll(".switchPosition")[1].classList.toggle("switchPositionDark")
        /**/
        for(let i=0;i<menuItem.length;i++)
        {
            menuItem[i].classList.toggle("menuItemDark")
        }
        /**/
        document.querySelector(".cuerpo").classList.toggle("bgDark")
        document.querySelector(".path").classList.toggle("pathDark")
        document.querySelector(".texto").classList.toggle("textoDark")
        for(let i=0;i<botonInicio.length;i++)
        {
            botonInicio[i].classList.toggle("menuItemDark")
        }
        document.querySelector(".sobre_texto").classList.toggle("sobre_textoDark")
        document.querySelector(".verMas").classList.toggle("menuItemDark")
        document.querySelector(".path2").classList.toggle("pathDark")
        document.querySelector(".iluminacion").classList.toggle("bgDark")
        document.querySelector(".iluminacion_texto").classList.toggle("sobre_textoDark")
    })
}