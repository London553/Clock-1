let container = document.querySelector('.container');
let containerinfo = container.getBoundingClientRect();
let duration = 1000;
let dist = 0;
let speed = 0.3;




function making_hotairballoon(arg) {
  let hero = document.createElement('DIV');
  let balloon = document.createElement('DIV');
  let balloon_bottom = document.createElement('DIV');
  let balloon_rope = document.createElement('DIV');
  let balloon_basket = document.createElement('DIV');
  hero.setAttribute('class', 'hero');
  balloon.setAttribute('class', 'balloon');
  balloon_bottom.setAttribute('class', 'balloon_bottom');
  balloon_rope.setAttribute('class', 'balloon_rope');
  balloon_basket.setAttribute('class', 'balloon_basket');

  //container.appendChild(balloon)
  container.appendChild(hero);
  hero.appendChild(balloon);
  balloon.appendChild(balloon_bottom);
  balloon.appendChild(balloon_rope);
  balloon.appendChild(balloon_basket);

  //console.log(balloon_container);
}


function making_clouds() {
  for (i = 0; i < 5; i++) {

    let clouds = document.createElement('DIV');
    let cloudsinfo = clouds.getBoundingClientRect();
    let rndtop = Math.round(Math.random() * (containerinfo.height - (cloudsinfo.height * 2.7)));
    let rndleft = Math.round(Math.random() * (containerinfo.width - (cloudsinfo.width * 3.5)));
    // let rndsize = Math.round(Math.random())

    // console.log(rndleft);

    clouds.setAttribute('class', 'clouds');
    container.appendChild(clouds);
    clouds.style.top = `${rndtop + 5}px`;
    clouds.style.left = `${rndleft}px`;

  }

}

function moving_clouds(dist, speed) {
  let clouds = document.querySelectorAll('.clouds');

  clouds.forEach(function(clouds) {
    let cloudsinfo = clouds.getBoundingClientRect();

    // console.log(cloudsinfo.x);
    let motion = cloudsinfo.x + dist;
    clouds.style.left = `${motion-(dist-speed)}px`;
    //console.log(motion);

    if (cloudsinfo.x > containerinfo.width) {
      let rndtop = Math.round(Math.random() * (containerinfo.height - (cloudsinfo.height * 2.7)));
      clouds.style.left = `-${(cloudsinfo.x-(cloudsinfo.width*2.5))}px`;
      clouds.style.top = `${rndtop -5}px`

    }


  });

}



making_clouds();
making_hotairballoon();



function animate({ timing }) {
  let start = performance.now()
  //console.log(start);

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration
    let progress = timing(timeFraction)


    dist += speed;

    // Animating clouds
    moving_clouds(dist, speed);

    requestAnimationFrame(animate);
  })
}

animate({
  timing(timeFraction) {
    return timeFraction
  }
})
