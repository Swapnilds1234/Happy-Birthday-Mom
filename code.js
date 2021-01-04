var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a33f7290-8b5c-41dd-9c82-e4fdf9365b72","76c4dc88-f206-466b-8cfd-05ab22101131","5eac1744-29d7-4c80-9e25-f010e589f54e","23c6c1f7-3f1b-49db-b62d-15ddbc1bb563","18335b34-882e-4b84-b780-9996ebe0a2ba","183e374d-7f73-4e75-910e-2c979cf4f586","12763c05-902f-4497-bbe7-bcc9fb3f35a2","466caa14-95c0-47c6-a424-2235cd3c03a8"],"propsByKey":{"a33f7290-8b5c-41dd-9c82-e4fdf9365b72":{"name":"cupcake","sourceUrl":"assets/api/v1/animation-library/gamelab/GlKb2Xmx1bbikF.lnzvg.owV3ZoflyBq/category_food/cupcake.png","frameSize":{"x":283,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"GlKb2Xmx1bbikF.lnzvg.owV3ZoflyBq","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":283,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/GlKb2Xmx1bbikF.lnzvg.owV3ZoflyBq/category_food/cupcake.png"},"76c4dc88-f206-466b-8cfd-05ab22101131":{"name":"rainbow_Background","sourceUrl":null,"frameSize":{"x":400,"y":273},"frameCount":1,"looping":true,"frameDelay":12,"version":"7_oOKO0gzCwQgFJVbPRHTCSLtaZIVZjV","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":273},"rootRelativePath":"assets/76c4dc88-f206-466b-8cfd-05ab22101131.png"},"5eac1744-29d7-4c80-9e25-f010e589f54e":{"name":"happybirthdayText","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"hAT7h1RYVlVyMzV9ndDEigUB_8n.Ce0n","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/5eac1744-29d7-4c80-9e25-f010e589f54e.png"},"23c6c1f7-3f1b-49db-b62d-15ddbc1bb563":{"name":"red_balloon","sourceUrl":null,"frameSize":{"x":400,"y":778},"frameCount":1,"looping":true,"frameDelay":12,"version":"YzGqvreGEkCAAUEfELgvkn5RhTr7IdBc","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":778},"rootRelativePath":"assets/23c6c1f7-3f1b-49db-b62d-15ddbc1bb563.png"},"18335b34-882e-4b84-b780-9996ebe0a2ba":{"name":"yellow_balloon","sourceUrl":null,"frameSize":{"x":400,"y":778},"frameCount":1,"looping":true,"frameDelay":12,"version":"iSaz42.Dde8nUbH0mgbT3e8f4LpqPqPj","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":778},"rootRelativePath":"assets/18335b34-882e-4b84-b780-9996ebe0a2ba.png"},"183e374d-7f73-4e75-910e-2c979cf4f586":{"name":"blue_balloon","sourceUrl":null,"frameSize":{"x":400,"y":778},"frameCount":1,"looping":true,"frameDelay":12,"version":"xByqZjfsyBDQZGGsq1ORtmXejczbfsfW","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":778},"rootRelativePath":"assets/183e374d-7f73-4e75-910e-2c979cf4f586.png"},"12763c05-902f-4497-bbe7-bcc9fb3f35a2":{"name":"green_balloon","sourceUrl":null,"frameSize":{"x":400,"y":778},"frameCount":1,"looping":true,"frameDelay":12,"version":"4qT_E_.PpVCjhy.uJW0DjV63.B387RrU","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":778},"rootRelativePath":"assets/12763c05-902f-4497-bbe7-bcc9fb3f35a2.png"},"466caa14-95c0-47c6-a424-2235cd3c03a8":{"name":"cake","sourceUrl":null,"frameSize":{"x":400,"y":485},"frameCount":1,"looping":true,"frameDelay":12,"version":"mQqAivL16tgA6kKf8YmG.O8pemhMnw56","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":485},"rootRelativePath":"assets/466caa14-95c0-47c6-a424-2235cd3c03a8.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var backdrop = createSprite(120,200,400,400);
backdrop.setAnimation("rainbow_Background");
backdrop.scale = 1.5;

var cupcake = createSprite(60,340,50,50);
cupcake.setAnimation("cupcake");
cupcake.scale = 0.2;

var cake = createSprite(250,320,50,50);
cake.setAnimation("cake");
cake.scale = 0.3;

var happybirthdayText = createSprite(200,150,50,50);
happybirthdayText.setAnimation("happybirthdayText");
happybirthdayText.scale = 0.7;

var redballoon = createSprite(50,400,50,50);
redballoon.setAnimation("red_balloon");
redballoon.scale = 0.12;
redballoon.velocityY = -3;

var yellowballoon = createSprite(150,400,50,50);
yellowballoon.setAnimation("yellow_balloon");
yellowballoon.scale = 0.12;
yellowballoon.velocityY = -2;

var blueballoon = createSprite(250,400,50,50);
blueballoon.setAnimation("blue_balloon");
blueballoon.scale = 0.12;
blueballoon.velocityY = -2;

var greenballoon = createSprite(350,400,50,50);
greenballoon.setAnimation("green_balloon");
greenballoon.scale = 0.12;
greenballoon.velocityY = -3;

function draw() {
  background("backdrop");
  createEdgeSprites();
  drawSprites();
  
  if(redballoon.isTouching(topEdge)){
    redballoon.y = 400;
    redballoon.velocityY = -(Math.round(random(2,4)));
  }
  if(yellowballoon.isTouching(topEdge)){
    yellowballoon.y = 400;
    yellowballoon.velocityY = -(Math.round(random(2,4)));
  }
  if(blueballoon.isTouching(topEdge)){
    blueballoon.y = 400;
    blueballoon.velocityY = -(Math.round(random(2,4)));
  }
  if(greenballoon.isTouching(topEdge)){
    greenballoon.y = 400;
    greenballoon.velocityY = -(Math.round(random(2,4)));
  }
  
  textSize(30);
  fill("black");
  stroke("white");
  strokeWeight(3);
  textFont("Times New Roman");
  text("HAPPY BIRTHDAY MOM!",20,45);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
