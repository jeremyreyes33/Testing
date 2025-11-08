let slider = document.getElementById("slider");
let _nav = document.querySelectorAll(".navbar > span");

function getNthChild(element) {
    let parent = element.parentNode;
    let children = Array.from(parent.children);
    return children.indexOf(element);
}

_nav.forEach((span) => {
    span.addEventListener("mouseover",(event)=> {
        let nthChild = getNthChild(event.target);
        slider.style.setProperty("--value",nthChild);
    });
});