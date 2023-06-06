var gravity = .5;
var numChildren = 50;

var numParticles = 100;
var particlesCreated = 0;

function createParticle() {
	var particle = document.createElement("div");
	particle.className="particle";

	var y = window.innerHeight;
	var x = Math.random() * window.innerWidth;

	particle.style.top = y + "px";
	particle.style.left = x + "px";

	var velocityY = -15 - (Math.random() * 15);

	particle.setAttribute("data-velocity-y", velocityY);
	particle.setAttribute("data-velocity-x", "0");
	particle.setAttribute("data-father", "true");

	particle.style.background = getRandomColor();

	document.getElementsByTagName("body")[0].append(particle);

	particlesCreated++;

	if (particlesCreated < numParticles) {
	    setTimeout(createParticle, 50 + (Math.random() * 150));
	}
}

function start() {
	createParticle();
}

function update() {
	var particles = document.getElementsByClassName("particle");
	for (var p=0; p < particles.length; p++) {
		var particle = particles[p];

		var velocityY = parseFloat(particle.getAttribute("data-velocity-y"));
		velocityY += gravity;

		particle.setAttribute("data-velocity-y", velocityY);

		var top = particle.style.top ? particle.style.top : "0"; 
		top = parseFloat(top.replace("px", ""));
		top += velocityY;
		particle.style.top = top + "px";

		var velocityX = parseFloat(particle.getAttribute("data-velocity-x"));

		var left = particle.style.left ? particle.style.left : "0";
		left = parseFloat(left.replace("px", ""));
		left += velocityX;
		particle.style.left = left + "px";

		var father = particle.getAttribute("data-father");

		if (velocityY >= 0 && father === "true") {
			explode(particle);
		}

		if (top > window.innerHeight) {
			particle.remove();
		}
	}

	setTimeout(update, 20);
}

function explode(particle) {

	for (var h=0; h < numChildren; h++) {
		var child = document.createElement("div");
		child.className = "particle";

		child.style.top = particle.style.top;
		child.style.left = particle.style.left;
		child.style.background = particle.style.background;

		var velocityY = (Math.random() * 20) - 18;
		child.setAttribute("data-velocity-y", velocityY);
		var velocityX = (Math.random() * 16) - 8;
		child.setAttribute("data-velocity-x", velocityX);

		child.setAttribute("data-father", false);

		document.getElementsByTagName("body")[0].append(child);
	}

    particle.remove();
}

window.onload = function() {
	start();

	update();
};


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}