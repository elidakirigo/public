// portfolio
const portfolio = document.querySelector('#posts')
// const carousel_indicators_div = document.querySelector('.carousel-indicators')

let SingleComponent = []
allPosts.map((element, i) => {
	SingleComponent.push(
		`<div class="col-12 col-xl-4 col-lg-6 col-md-6 col-sm-6 mix ${element.topic}"> 
		<div class="item-card">
				<h4><a target="_blank" class="title-link" href="${element.link}">${element.title}</a></h4>
				<p>${element.content}</p> ` +
			` <div class="item-image"> 
		<a target="_blank" class="link-image" href="${element.live[1]}"> 
		<i class="fa fa-link"></i> 
		</a> 
		<a target="_blank" class="link-view" href="${element.source[1]}"> <i class="fa-solid fa-qrcode"></i></a> 
		<img src="${element.image}" alt="image ${element.title}" class="img-fluid img-elm"/></div>` +
			`<ul class="tag-link">` +
			element.stacks
				.map((stack, index) => {
					return `<li><a target="_blank" href="#">${stack}</a></li>`
				})
				.join('') +
			`</ul>` +
			`</div></div>`,
	)

	// portfolio.innerHTML += html
})
let component = [],
	indexNo = 0

for (let index = 0; index < SingleComponent.length; index++) {
	if (index % 5 === 0) {
		if (component.length !== 0) indexNo++
		component.push([SingleComponent[index]])
	} else {
		component[indexNo].push(SingleComponent[index])
	}
}

let CarouselItem = component.map((element, i) => {
	if (i == 0) return `<div class='carousel-item active row auction-filter justify-content-center'>  ${element.join(' ')} </div>`
	return `<div class='row carousel-item '> ${element.join(' ')} </div>`
})

// let carousel_Indicators = Array(CarouselItem.length).fill(' ').map((element, i) => {
// 	return `<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-label="Slide ${i + 1}"></button>`
// })
// carousel_Indicators = carousel_Indicators.join(' ')
CarouselItem = CarouselItem.join(' ')

// carousel_indicators_div.insertAdjacentHTML('beforeend', carousel_Indicators)
portfolio.insertAdjacentHTML('beforeend', CarouselItem)
