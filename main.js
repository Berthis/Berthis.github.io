let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #a70c7e;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a70c7e;">Te enseño como clonar y crear páginas web.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
