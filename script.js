var crsr = document.querySelector("#cursor");
var crsrblr = document.querySelector("#cursorblur");
document.addEventListener("mousemove",(dets)=>{
    console.log("hye");
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    crsrblr.style.left = dets.x - 200 + "px";
    crsrblr.style.top = dets.y - 200 +  "px";
})



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3,
    },
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})