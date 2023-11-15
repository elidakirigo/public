// portfolio
const portfolio = document.querySelector('#posts')

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
		<img src="${element.image}" alt="image ${element.title}" /></div>` +
			`<ul class="tag-link">` +
			element.stacks
				.map((stack) => {
					return `<li><a target="_blank" href="${stack.link}">${stack.name}</a></li>`
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
CarouselItem = CarouselItem.join(' ')

portfolio.insertAdjacentHTML('beforeend', CarouselItem)
