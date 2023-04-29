const carCanvas = document.getElementById('carCanvas');
carCanvas.width = 200;
const networkCanvas = document.getElementById('networkCanvas');
networkCanvas.width = 300;

const carCtx = carCanvas.getContext('2d');
const networkCtx = carCanvas.getContext('2d');
const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9)
// const car = new Car(100, 100, 30, 50)
// const car = new Car(road.getLaneCenter(1), 100, 30, 50, 'KEYS')
// const car = new Car(road.getLaneCenter(1), 100, 30, 50, 'AI')
const cars = generateCars(N)
car.draw(carCtx)
const traffic = [new Car(road.getLaneCenter(1), -100, 30, 50, 'DUMMY', 2)]
animate()

function generateCars(N) {
	const cars = []
	for (let i = 1; i <= N; i++) {
		cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, 'AI'))
	}
	return cars;
}

function animate(time) {

	for (let i = 0; i < traffic.length; i++) {
		traffic[i].update(road.borders, [])
	}

	for (let i = 0; i < cars.length; i++) {
		cars[i].update(road.borders, traffic)
	}

	carCanvas.height = window.innerHeight;
	networkCanvas.height = window.innerHeight;
	// add imaginary camera to car
	carCtx.save()
	carCtx.translate(0, -car[0].y + carCanvas.height * 0.7)
	road.draw(carCtx);

	for (let i = 0; i < traffic.length; i++) {
		traffic[i].draw(carCtx, 'red');
	}

	carCtx.globalAlpha = 0.2;

	for (let i = 0; i < cars.length; i++) {
		cars[i].draw(carCtx, 'blue');
	}

	carCtx.globalAlpha = 1; 

	carCtx.restore()

	networkCtx.lineDashOffset = -time / 50
	Visualizer.drawNetwork(networkCtx, car[0].brain)
	requestAnimationFrame(animate);
}