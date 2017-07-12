const Util = {
  background(ctx) {
    let sprite = new Image();
    sprite.src = 'assets/background.png';
    ctx.drawImage(sprite,0,0);
  },

  screen(ctx) {
    let sprite2 = new Image();
    sprite2.src = 'assets/startscreen.png';
    ctx.drawImage(sprite2,0,0);
  },

  endGame(ctx) {
    let sprite3 = new Image();
    sprite3.src = 'assets/endgame2.png';
    ctx.drawImage(sprite3,0,0);
  },
  // screen(ctx) {
  //   let sprite2 = new Image();
  //   sprite2.src = 'assets/startscreen.png';
  //
  //   sprite2.onload = () =>{
  //     ctx.drawImage(sprite2, 0, 0, 500, 500);
  //   };
  // },
  // endGame(ctx, level) {
  //   let sprite3 = new Image();
  //   sprite3.src = 'assets/endgame2.png';
  //
  //   sprite3.onload = () =>{
  //     ctx.drawImage(sprite3, 0, 0, 500, 500);
  //     ctx.font="25px Georgia";
  //     ctx.fillText(level-1, 253,82);
  //   };

  },

};



module.exports = Util;
