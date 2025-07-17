// testimonials-carousel.js

// Testimonios dinámicos y auto-scroll vertical
(function(){
   const data = [
  { name: "Alejandro Pérez",     city: "La Plata",         time: "10:12 (am)", text: "¡El bono del 500% es una locura! Cargué y recibí muchísimo más para jugar. Retiré sin problemas." },
  { name: "María González",      city: "Mar del Plata",    time: "9:45 (pm)",  text: "Con el bono del 500% aproveché al máximo. Gané y cobré en minutos, increíble." },
  { name: "Lucas Rodríguez",     city: "Quilmes",          time: "2:30 (pm)",  text: "Nunca imaginé tanto por tan poco. Ese 500% me dio un impulso impresionante." },
  { name: "Valentina Suárez",    city: "Bahía Blanca",     time: "8:20 (am)",  text: "Disfruté el bono del 500% y retiré mis ganancias en el acto. Súper recomendado." },
  { name: "Federico Martínez",   city: "Morón",            time: "7:55 (pm)",  text: "Con el bono 500% me animé a jugar y terminé ganando. Pago inmediato." },
  { name: "Camila López",        city: "Tigre",            time: "6:10 (pm)",  text: "El bono del 500% fue clave. ¡Recibí 6 veces más y retiré rápido!" },
  { name: "Diego Fernández",     city: "Pilar",            time: "11:05 (am)", text: "Nunca vi algo así. El bono del 500% multiplicó mi saldo, y el retiro fue instantáneo." },
  { name: "Florencia Torres",    city: "San Isidro",       time: "4:40 (pm)",  text: "¡Qué locura este bono! 500% real y retiros al instante. Me encantó." },
  { name: "Ignacio Varela",      city: "Lomas de Zamora",  time: "9:15 (pm)",  text: "Con el bono 500% gané en mi primera sesión. El dinero llegó enseguida." },
  { name: "Martina Paredes",     city: "Avellaneda",       time: "3:50 (pm)",  text: "Lo que da el bono del 500% es impresionante. No lo podía creer." },
  { name: "Santiago Cáceres",    city: "La Matanza",       time: "8:00 (am)",  text: "No hay comparación: 500% de bono y el pago fue inmediato. Excelente." },
  { name: "Julieta Núñez",       city: "Florencio Varela", time: "1:20 (pm)",  text: "Recibí 5 veces más de lo que cargué. Todo rápido y confiable." },
  { name: "Gonzalo Romero",      city: "Escobar",          time: "5:35 (pm)",  text: "El bono del 500% es lo mejor que probé. Retiré sin complicaciones." },
  { name: "Lucía Álvarez",       city: "Malvinas Argentinas", time: "10:50 (am)", text: "¡Una bomba el bono 500%! Jugué horas con poco dinero y gané." },
  { name: "Facundo Díaz",        city: "Merlo",            time: "7:25 (pm)",  text: "Impresionante lo que rinde el 500%. Los pagos rápidos cierran todo." },
  { name: "Camilo Bravo",        city: "Lanús",            time: "11:55 (am)", text: "No hay con qué darle: 500% de bono, retiro inmediato y buena atención." },
  { name: "Noelia Salas",        city: "Berazategui",      time: "6:15 (pm)",  text: "Súper recomendable. El bono del 500% me sorprendió gratamente." },
  { name: "Ramiro Toledo",       city: "San Miguel",       time: "2:05 (pm)",  text: "Nunca vi algo así: 500% real, y el retiro llegó sin demoras." },
  { name: "Bianca Zambrano",     city: "Moreno",           time: "9:40 (am)",  text: "El bono 500% es tremendo. Llegó al instante y me cambió la experiencia." },
  { name: "Ezequiel Duarte",     city: "Merchán",          time: "4:55 (pm)",  text: "Conseguí más de lo que esperaba. Bono increíble y retiro inmediato." },
  { name: "Carolina Juárez",     city: "San Fernando",     time: "7:59 (am)",  text: "Te dan cinco veces más. ¡No lo dudés! Es real." },
  { name: "Tomás Gaitán",        city: "Campana",          time: "3:30 (pm)",  text: "Con el bono 500% me animé más y me pagaron sin esperar nada." },
  { name: "Micaela Aguirre",     city: "Lomas de Zamora",  time: "6:45 (pm)",  text: "Una de las mejores promos que vi. 500% de regalo es un montón." },
  { name: "Nicolás Escudero",    city: "José C. Paz",      time: "8:25 (am)",  text: "Multiplicás tu carga por seis. ¡Una locura! Retiros rápidos también." },
  { name: "Renata Farías",       city: "Zárate",           time: "5:10 (pm)",  text: "Con el bono 500% sentí que no tenía límites. Retiros en segundos." }
];

  const container = document.getElementById('testimonialsCarousel');
  let idx = 0, timer;

  // Crear y anexar elementos al contenedor
  data.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'testimonial-item';
   div.innerHTML = `
  <p class="header">
    <img
      src="images/usuario.png"
      alt="Usuario"
      class="icon icon-user"
    />
    ${item.name.trim()}
    <span class="time">${item.time}</span>
  </p>
  <p class="message">
    "${item.text}"
  </p>
  <p class="meta">
    <img
      src="images/pin.png"
      alt="Ubicación"
      class="icon icon-pin"
    />
    ${item.city.trim()}
  </p>
`;

    container.appendChild(div);
  });

  const items = container.querySelectorAll('.testimonial-item');

  function show(index) {
    items.forEach((el, i) => {
      el.classList.toggle('active', i === index);
    });
  }

  function next() {
    idx = (idx + 1) % items.length;
    show(idx);
  }

  // Mostrar el primero y lanzar auto-scroll
  show(0);
  timer = setInterval(next, 4000);

  // Pausar al hacer hover o touch
  container.addEventListener('mouseenter', () => clearInterval(timer));
  container.addEventListener('mouseleave', () => timer = setInterval(next, 4000));
  container.addEventListener('touchstart', () => clearInterval(timer));
  container.addEventListener('touchend', () => timer = setInterval(next, 4000));
})();


document.querySelectorAll('.carousel-item img').forEach(img => {
  img.addEventListener('load', () => {
    const skeleton = img.parentElement.querySelector('.skeleton');
    if (skeleton) skeleton.remove();
  });
});