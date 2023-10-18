// portfolio
const portfolio = document.querySelector('#posts') 

allPosts.map((element) => {
	html =
		`
      <div class="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12 mix ${element.topic}">
              <div class="item-card">
                <h4><a target="_blank" class="title-link" href="${element.link}">${element.title}</a></h4>
                <p>${element.content}</p>
               ` +
		`
		<div class="item-image"> 
                  <a target="_blank" class="link-image" href="${element.live[1]}">
                      <i class="fa fa-link"></i>
                  </a>
  
                  <a target="_blank" class="link-view" href="${element.source[1]}">
                      <i class="fa-solid fa-qrcode"></i>
                  </a>
                  <img src="${element.image}" alt="image ${element.title}" /> 
                </div>` +
		`  <ul class="tag-link">` +
		element.stacks
			.map((stack) => {
				return `<li><a target="_blank" href="${stack.link}">${stack.name}</a></li>`
			})
			.join('') +
		`
		</ul>` +
		`
              </div> 
			  </div>
      `

	portfolio.innerHTML += html
})
