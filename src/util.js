const Util = {
  background(ctx) {
    let sprite = new Image();
    sprite.src = 'assets/background.png';
    ctx.drawImage(sprite,0,0);
  },
  screen(ctx) {
    let sprite2 = new Image();
    sprite2.src = 'assets/screen.png';

    sprite2.onload = () =>{
      ctx.drawImage(sprite2, 0, 0, 500, 500);
    };
  },

};



module.exports = Util;