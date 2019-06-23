let scrollBG = [];
const time = 1000; // this var effects nothing but dont touch it the time must stay constant for time delay
anime({
    targets: ".throbber-inner-mini",
    scale: .5,
    border: "0px",
    opacity: [0,1],
    easing: "easeInOutCubic",
    direction: "reverse",
    loop: true,
    duration: 1500,
    endDelay: 1500
})
let animateBG = (el, c1, c2) => {
    return(
        anime({
            targets: el,
            backgroundColor: [c1, c2],
            easing: "linear",
            autoplay: false,
            duration: time,
            delay: time * scrollBG.length
        })
    )
}
scrollBG[scrollBG.length] = animateBG(".color-change-bg", "#134a89", "#1ea185")
scrollBG[scrollBG.length] = animateBG(".color-change-bg", "#1ea185", "#9bbb5c")
scrollBG[scrollBG.length] = animateBG(".color-change-bg", "#9bbb5c", "#e3f226")
scrollBG[scrollBG.length] = animateBG(".color-change-bg", "#3fa3db", "#134a89")
scrollBG[scrollBG.length] = animateBG(".color-change-bg", "#134a89", "#134a89")


let startColor = document.querySelector(".color-change-bg");
let fullHeight = Math.floor(document.getElementById("main").clientHeight);
startColor.style.backgroundColor = "#134a89";
window.onscroll = () => {
    let x = Math.floor(scrollBG[scrollBG.length-1].currentTime/time)
    let y = Math.floor(scrollBG[scrollBG.length-1].currentTime)

    for (i = 0; i < scrollBG.length; i++){
        scrollBG[i].seek((window.scrollY / (time * 9)) * scrollBG[i].duration);
    }
    scrollBG[x].seek((window.scrollY / (time * 9)) * scrollBG[scrollBG.length-1].duration);

};
