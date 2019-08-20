
TweenMax.set('svg', {visibility: 'visible'})

const selectAll = function(s) {
  return document.querySelectorAll(s)
}  

TweenMax.to('#back-light rect', 0.5, {rotation: 360, svgOrigin: "130 215", transformOrigin: "50% 50%", repeat: -1, ease: Linear.easeNone})


TweenMax.to('#front-light rect', 0.5, {rotation: 360, svgOrigin: "380 215", transformOrigin: "50% 50%", repeat: -1, ease: Linear.easeNone})
// TweenMax.set(".loading", {ease: Circ.easeIn });
TweenMax.fromTo('.loading', 1, {y: 0, ease: Circ.easeOut}, 
                {y: 6, ease: Circ.easeOut, repeat: -1, yoyo: true})



// TweenMax.to(selectAll('#wheel-light rect'), 6, {
//   bezier: {
//     curviness: 1.5,
//     values: [{x: 5, y: 5}, 
//              {x: -57, y:57}, 
//              {x: 0, y:114}, 
//              {x: 54, y:54}, 
//              {x: 0, y: 0}],
//     autoRotate: true,
//     ease: Circ.easeInOut,
//   },
//   repeat: -1
// })