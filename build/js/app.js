!function i(t,s,n){function e(c,h){if(!s[c]){if(!t[c]){var p="function"==typeof require&&require;if(!h&&p)return p(c,!0);if(o)return o(c,!0);var r=new Error("Cannot find module '"+c+"'");throw r.code="MODULE_NOT_FOUND",r}var l=s[c]={exports:{}};t[c][0].call(l.exports,function(i){var s=t[c][1][i];return e(s?s:i)},l,l.exports,i,t,s,n)}return s[c].exports}for(var o="function"==typeof require&&require,c=0;c<n.length;c++)e(n[c]);return e}({1:[function(i,t,s){var n=function(i,t){this.entity=i,this.radius=t,this.type="circle"};n.prototype.collidesWith=function(i){return"rect"==i.components.collision.type?this.collideRect(i):!1},n.prototype.collideRect=function(i){var t=function(i,t,s){return t>i?t:i>s?s:i},s=this.entity.components.physics.position,n=i.components.physics.position,e=i.components.collision.size,o={x:t(s.x,n.x-e.x/2,n.x+e.x/2),y:t(s.y,n.y-e.y/2,n.y+e.y/2)},c=this.radius,h={x:s.x-o.x,y:s.y-o.y},p=h.x*h.x+h.y*h.y;return c*c>p},s.CircleCollisionComponent=n},{}],2:[function(i,t,s){var n=function(i,t){this.entity=i,this.size=t,this.type="rect"};n.prototype.collidesWith=function(i){return"circle"==i.components.collision.type?this.collideCircle(i):"rect"==i.components.collision.type?this.collideRect(i):!1},n.prototype.collideCircle=function(i){return i.components.collision.collideRect(this.entity)},n.prototype.collideRect=function(i){return!1},s.RectCollisionComponent=n},{}],3:[function(i,t,s){var n=function(i){this.entity=i};n.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.fillStyle="#FFF2A4",i.beginPath(),i.ellipse(0,0,.045,.04,0,0,2*Math.PI),i.arc(0,.045,.03,0,2*Math.PI),i.closePath(),i.fill(),i.fillStyle="#706E6B",i.beginPath(),i.arc(-.012,.045,.006,0,2*Math.PI),i.arc(.012,.045,.006,0,2*Math.PI),i.closePath(),i.fill(),i.fillStyle="#F2A99F",i.beginPath(),i.ellipse(0,.032,.01,.005,0,0,2*Math.PI),i.closePath(),i.fill(),i.restore()},s.BirdGraphicsComponent=n},{}],4:[function(i,t,s){var n=function(i){this.entity=i};n.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle="#A8DAFF",i.fillRect(0,0,this.entity.size.x,this.entity.size.y),i.closePath(),i.restore()},s.CeilingGraphicsComponent=n},{}],5:[function(i,t,s){var n=function(i){this.entity=i};n.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle="#A8DAFF",i.fillRect(0,0,this.entity.size.x,this.entity.size.y),i.closePath(),i.restore()},s.FloorGraphicsComponent=n},{}],6:[function(i,t,s){var n=function(i,t){this.entity=i,this.size=t};n.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.beginPath(),i.fillStyle="#89898A",i.fillRect(-this.size.x/2,-this.size.y/2,this.size.x,this.size.y),i.closePath(),i.restore()},s.PipeGraphicsComponent=n},{}],7:[function(i,t,s){var n=function(i){this.entity=i};n.prototype.draw=function(i){var t=this.entity.components.physics.position;i.save(),i.translate(t.x,t.y),i.fillStyle="#A8DAFF",i.beginPath(),i.arc(0,0,.01,0,2*Math.PI),i.closePath(),i.fill(),i.restore()},s.ScoreGraphicsComponent=n},{}],8:[function(i,t,s){var n=function(i){this.entity=i,this.position={x:0,y:0},this.velocity={x:0,y:0},this.acceleration={x:0,y:0}};n.prototype.update=function(i){this.velocity.x+=this.acceleration.x*i,this.velocity.y+=this.acceleration.y*i,this.position.x+=this.velocity.x*i,this.position.y+=this.velocity.y*i},s.PhysicsComponent=n},{}],9:[function(i,t,s){var n=i("../components/graphics/bird"),e=i("../components/physics/physics"),o=i("../components/collision/circle"),c=function(){var i=new e.PhysicsComponent(this);i.position.y=.5,i.acceleration.y=-2;var t=new n.BirdGraphicsComponent(this),s=new o.CircleCollisionComponent(this,.045);s.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:s}};c.prototype.onCollision=function(){var i=document.getElementById("reset");i.style.display="block"},s.Bird=c},{"../components/collision/circle":1,"../components/graphics/bird":3,"../components/physics/physics":8}],10:[function(i,t,s){var n=i("../components/graphics/ceiling"),e=i("../components/physics/physics"),o=i("../components/collision/rect"),c=function(i,t){var s=new e.PhysicsComponent(this);s.position.y=.99,s.position.x=-.05;var c=new n.CeilingGraphicsComponent(this);this.size={x:.1,y:.01};var h=new o.RectCollisionComponent(this,this.size);this.components={physics:s,graphics:c,collision:h}};s.Ceiling=c},{"../components/collision/rect":2,"../components/graphics/ceiling":4,"../components/physics/physics":8}],11:[function(i,t,s){var n=i("../components/graphics/floor"),e=i("../components/physics/physics"),o=i("../components/collision/rect"),c=function(i,t){var s=new e.PhysicsComponent(this);s.position.y=0,s.position.x=-.05;var c=new n.FloorGraphicsComponent(this);this.size={x:.1,y:.01};var h=new o.RectCollisionComponent(this,this.size);this.components={physics:s,graphics:c,collision:h}};s.Floor=c},{"../components/collision/rect":2,"../components/graphics/floor":5,"../components/physics/physics":8}],12:[function(i,t,s){var n=i("../components/graphics/pipe"),e=i("../components/physics/physics"),o=i("../components/collision/rect"),c=function(i,t){var s=new e.PhysicsComponent(this);s.velocity.x=-.5,s.position=i;var c=new n.PipeGraphicsComponent(this,t),h=new o.RectCollisionComponent(this,t);this.components={graphics:c,physics:s,collision:h}};s.Pipe=c},{"../components/collision/rect":2,"../components/graphics/pipe":6,"../components/physics/physics":8}],13:[function(i,t,s){var n=i("../components/graphics/scoreKeeper"),e=i("../components/physics/physics"),o=i("../components/collision/circle"),c=0,h=function(){var i=new e.PhysicsComponent(this);i.position.y=0,i.position.x=-.16;var t=new n.ScoreGraphicsComponent(this),s=new o.CircleCollisionComponent(this,.02);s.onCollision=this.onCollision.bind(this),this.components={physics:i,graphics:t,collision:s}};h.prototype.onCollision=function(){var i=c+=1,t=i/23,s=t.toFixed(0);document.getElementById("score").innerHTML=s},s.ScoreKeeper=h},{"../components/collision/circle":1,"../components/graphics/scoreKeeper":7,"../components/physics/physics":8}],14:[function(i,t,s){var n=i("./systems/graphics"),e=i("./systems/physics"),o=i("./systems/pipeSystem"),c=i("./systems/input"),h=i("./systems/collision"),p=i("./entities/bird"),r=i("./entities/floor"),l=i("./entities/ceiling"),a=i("./entities/scoreKeeper"),y=function(){this.entities=[new p.Bird,new r.Floor,new l.Ceiling,new a.ScoreKeeper],this.graphics=new n.GraphicsSystem,this.physics=new e.PhysicsSystem,this.input=new c.InputSystem,this.pipes=new o.PipeSystem,this.collision=new h.CollisionSystem,this.input.entities=this.entities,this.graphics.entities=this.entities,this.pipes.entities=this.entities,this.physics.entities=this.entities,this.collision.entities=this.entities,this.collision.graphicsSystem=this.graphics,this.collision.physicsSystem=this.physics,this.collision.PipeSystem=this.pipes,this.physics.collisionSystem=this.collision};y.prototype.init=function(){this.graphics.init()},y.prototype.run=function(){this.graphics.run(),this.physics.run(),this.input.run(),this.pipes.run()},y.prototype.pause=function(){this.graphics.pause(),this.physics.pause(),this.input.pause(),this.pipes.pause()},s.GrumpyDuck=y},{"./entities/bird":9,"./entities/ceiling":10,"./entities/floor":11,"./entities/scoreKeeper":13,"./systems/collision":15,"./systems/graphics":16,"./systems/input":17,"./systems/physics":18,"./systems/pipeSystem":19}],15:[function(i,t,s){var n=i("../entities/bird"),e=function(i){this.entities=i,this.graphicsSystem=null,this.physicsSystem=null};e.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];if(!(!1 in t.components))for(var s=i+1;s<this.entities.length;s++){var e=this.entities[s];!1 in e.components||t.components.collision.collidesWith(e)&&(t.components.collision.onCollision&&(t.components.collision.onCollision(e),t instanceof n.Bird&&(this.graphicsSystem.pause(),this.physicsSystem.pause())),e.components.collision.onCollision&&e.components.collision.onCollision(t))}}},s.CollisionSystem=e},{"../entities/bird":9}],16:[function(i,t,s){var n=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.context=this.canvas.getContext("2d"),this.paused=!0};n.prototype.run=function(){window.requestAnimationFrame(this.tick.bind(this)),window.requestAnimationFrame(this.tick.bind(this)),this.paused=!1},n.prototype.init=function(){this.tick.bind(this),this.tick(1)},n.prototype.pause=function(){this.paused=!0},n.prototype.tick=function(){(this.canvas.width!=this.canvas.offsetWidth||this.canvas.height!=this.canvas.offsetHeight)&&(this.canvas.width=this.canvas.offsetWidth,this.canvas.height=this.canvas.offsetHeight),this.context.clearRect(0,0,this.canvas.width,this.canvas.height),this.context.save(),this.context.translate(this.canvas.width/2,this.canvas.height),this.context.scale(this.canvas.height,-this.canvas.height);for(var i=0;i<this.entities.length;i++){var t=this.entities[i];!1 in t.components||t.components.graphics.draw(this.context)}this.context.restore(),this.paused||window.requestAnimationFrame(this.tick.bind(this))},s.GraphicsSystem=n},{}],17:[function(i,t,s){var n=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.clickListener=null};n.prototype.run=function(){this.clickListener=this.flap.bind(this),this.canvas.addEventListener("click",this.clickListener),this.canvas.addEventListener("touchstart",this.clickListener)},n.prototype.pause=function(){this.canvas.removeEventListener("click",this.clickListener),this.clickListener=null},n.prototype.flap=function(){var i=this.entities[0];i.components.physics.velocity.y=.7},s.InputSystem=n},{}],18:[function(i,t,s){var n=i("./collision"),e=function(i){this.entities=i,this.collisionSystem=new n.CollisionSystem(i),this.interval=null};e.prototype.run=function(){this.interval=window.setInterval(this.tick.bind(this),1e3/60)},e.prototype.pause=function(){null!=this.interval&&(window.clearInterval(this.interval),this.interval=null)},e.prototype.tick=function(){for(var i=0;i<this.entities.length;i++){var t=this.entities[i];!1 in t.components||t.components.physics.update(1/60)}this.collisionSystem.tick()},s.PhysicsSystem=e},{"./collision":15}],19:[function(i,t,s){var n=i("../entities/pipe"),e=function(i){this.entities=i,this.canvas=document.getElementById("main-canvas"),this.interval=null};e.prototype.run=function(){this.interval=window.setInterval(this.tick.bind(this),2e3)},e.prototype.pause=function(){window.clearInterval(this.interval),this.interval=null},e.prototype.tick=function(){var i=.5*this.canvas.width/this.canvas.height,t=.4+.2*Math.random(),s=t-.2,e={x:i+.075,y:s/2},o={x:.15,y:s};this.entities.push(new n.Pipe(e,o));var s=.8-t,e={x:i+.075,y:1-s/2},o={x:.15,y:s};this.entities.push(new n.Pipe(e,o))},s.PipeSystem=e},{"../entities/pipe":12}],20:[function(i,t,s){$(document).ready(function(){var t=i("./grumpy_duck"),s=(i("./entities/bird"),new t.GrumpyDuck);s.init(),$("#reset").hide(),$("#score").hide(),$(".init").click(function(){s.run(),$(".init").hide(),$("#score").show()}),$("#resetBtn").click(function(){$("#reset").hide(),location.reload()}),$("body").keydown(function(){s.pause(),$(".init").show()})})},{"./entities/bird":9,"./grumpy_duck":14}]},{},[20]);