const Menu1=document.querySelectorAll(".menuItem")
const sections=document.querySelectorAll("section")
const menu1=document.querySelectorAll(".menuItem")
for(let i=0;i<sections.length;i++)
{
    menu1[i].addEventListener("click",function()
    {
        sections[i].scrollIntoView({
            behavior: 'smooth' })
    })
}