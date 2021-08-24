// elements
const Cards = document.querySelectorAll(".card")
const ProjectsNo = document.querySelector("#ProjectsNo")
const Topscroll = document.querySelector(".Topscroll")

// events
Topscroll.addEventListener("click", ()=>{
    window.scrollTo(0, 0)
})
// cards manipulation
Cards.forEach(card=>{
    card.addEventListener("mouseover",(e)=>{
            const span = card.querySelector("span")
            const h3 = card.querySelector("h3")
            span.classList.toggle("Active")
            h3.classList.toggle("Active")
        }
    )
})

