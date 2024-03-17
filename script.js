const planets = document.querySelectorAll('.planet');
const orbits = [80, 120, 160, 200, 260, 320, 380, 440];
const speeds = [0.1, 0.07, 0.05, 0.03, 0.02, 0.01, 0.007, 0.005];
const moonSpeed = 0.1; // Adjusted for a slower moon orbit

function animatePlanets() {
  planets.forEach((planet, index) => {
    const orbit = orbits[index];
    const speed = speeds[index];
    const angle = performance.now() * 0.001 * speed;

    const x = orbit * Math.cos(angle);
    const y = orbit * Math.sin(angle);

    planet.style.left = `calc(50% - ${x}px)`;
    planet.style.top = `calc(50% - ${y}px)`;
  });

  const earth = document.getElementById('earth');
  const moon = document.getElementById('moon');
  const moonOrbit = 30;
  const moonAngle = performance.now() * 0.001 * moonSpeed;

  const moonX = moonOrbit * Math.cos(moonAngle);
  const moonY = moonOrbit * Math.sin(moonAngle);

  moon.style.left = `calc(50% - ${moonX}px)`;
  moon.style.top = `calc(50% - ${moonY}px)`;

  requestAnimationFrame(animatePlanets);
}

animatePlanets();
