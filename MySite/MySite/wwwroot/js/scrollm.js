var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
    triggerElement: "#pintr1",
    duration: $(window).height(),
    triggerHook: 0,
    reverse: true
})
    .setPin("#pinstart1")
    //.addIndicators({ name: "kek1" })
    .addTo(controller);

var scene2 = new ScrollMagic.Scene({
    triggerElement: "#pintr2",
    duration: $(window).height(),
    triggerHook: 0.5,
})
    .setPin("#pinstart2")
    //.addIndicators({ name: "kek2" })
    .addTo(controller);

var scene3 = new ScrollMagic.Scene({
    triggerElement: "#pintr3",
    duration: $(window).height(),
    triggerHook: 0.92,
})
    .setPin("#pinstart3")
    //.addIndicators({ name: "kek3" })
    .addTo(controller);

var scene4 = new ScrollMagic.Scene({ triggerElement: "#animtr", reverse: true, duration: 207, triggerHook: 0.35})
    .setClassToggle("#animbox1", "trans")
    //.addIndicators({ name: "kek4" })
    .addTo(controller);

var mytween = TweenMax.to("#animbox2", 2, {transform: 'scale(1.5)',backgroundColor: "white",repeat: -1});

var scene5 = new ScrollMagic.Scene({
    triggerElement: "#animtr2", triggerHook:0.2, duration: 260
})    
    //.addIndicators({ name: "kek" })
    .setTween(mytween)
    .addTo(controller);

/*var scene6 = new ScrollMagic.Scene({
    triggerElement: "#pintrl",
    duration: $(window).height(),
    triggerHook: 0.5,
    reverse: true
})
    .setPin("#pinstartl")
    //.addIndicators({ name: "kek" })
    .addTo(controller);
*/
var tween = TweenMax.to("#pinstartl", 1, { rotation: 360, ease: Linear.easeNone });

var scene7 = new ScrollMagic.Scene({
    triggerElement: "#pintrl", duration: $(pintrl).height()/2,
    triggerHook: 0.5 })
    .setTween(tween)
    .setPin("#pinstartl", { pushFollowers: false })
    //.addIndicators()
    .addTo(controller);







//.addIndicators({ name: "kek" })
    