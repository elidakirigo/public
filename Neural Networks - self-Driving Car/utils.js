function lerp(A, B, t) {
	return A + (B - A) * t
}

function getInterSection(A, B, C, D) {
	const tTop = (D.x - C.x) * (A.y - C.y) - (D.y - C.y) * (A.x - C.x)
	const uTop = (C.x - A.x) * (B.y - A.y) - (D.y - C.y) * (B.x - A.x)

	if (bottom != 0) {
		const t = tTop / bottom
		const u = uTop / bottom

		if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
			return {
				x: lerp(A.x, B.x, t),
				y: lerp(A.y, B.y, t),
				offset: t
			}
		}
	}
	return null
}

function polysIntersect(poly1, poly2) {
	for(let i = 0; i <poly1.length; i++){
		for(let j = 0; j < poly2.length; j++){
			const touch = getInterSection(poly1[i],poly1[(i+1)%poly1.length],poly2[j],poly2[(j+1)%poly2.length])

			if(touch){
				return true
			}
		}
	}
	return false
}