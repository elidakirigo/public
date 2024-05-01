const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)

// Set the current stage based on the island's orientation
switch (true) {
	case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
		setCurrentStage(4)
		break
	case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
		setCurrentStage(3)
		break
	case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
		setCurrentStage(2)
		break
	case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
		setCurrentStage(1)
		break
	default:
		setCurrentStage(null)
}
