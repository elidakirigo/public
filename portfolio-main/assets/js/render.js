const skills = document.querySelector('#render-skills')
const social = document.querySelectorAll('#social')
const topic = document.querySelector('#topic')

// Skills

const allSkills = [
	{ skill_name: 'React.js', percentage: 85 }, 
	{ skill_name: 'Typescript', percentage: 80 },
	{ skill_name: 'JavaScript', percentage: 90 },
	{ skill_name: 'Material UI', percentage: 80 },
	{ skill_name: 'Redux', percentage: 80 },
	{ skill_name: 'Next.js', percentage: 80 },
	{ skill_name: 'CSS', percentage: 100 },
	{ skill_name: 'Bootstrap', percentage: 100 },
	{ skill_name: 'Tailwind css', percentage: 80 }, 
	{ skill_name: 'Node js', percentage: 80 },
	{ skill_name: 'SCSS', percentage: 100 },
	{ skill_name: 'Solidity', percentage: 55 },
	{ skill_name: 'HTML', percentage: 100 },
]

allSkills.map((skill) => {
	html = `
    <div class="col-lg-2 col-md-3 col-6">
            <div class="progress" data-percentage="${skill.percentage}">
              <span class="progress-left">
                <span class="progress-bar"></span>
              </span>
              <span class="progress-right">
                <span class="progress-bar"></span
              ></span>
              <div class="progress-value">
                <h3>${skill.skill_name}</h3>
              </div>
            </div>
          </div>
    `
	skills.innerHTML += html
})

// Social link

const social_link = [
	{
		link: 'https://github.com/elidakirigo/',
		icon: 'fa-brands fa-github',
	},
	{
		link: 'https://www.linkedin.com/in/elidakirigo/',
		icon: 'fa-brands fa-linkedin-in',
	},
	{
		link: 'https://twitter.com/kirkieui/',
		icon: 'fa-brands fa-twitter',
	},
]

social_link.map((item) => {
	html = `
    <li>
        <a href="${item.link}" target="_blank"><i class="${item.icon}"></i></a>
    </li>
    `

	for (const element of social) {
		element.innerHTML += html
	}
})

// Topic

const allTopics = [
	{ title: 'All works', class: 'all' },
	{ title: 'FullStack', class: '.web' },
	{ title: 'BlockChain', class: '.responsive' },
	{ title: 'SAAS Features', class: '.feature' },
]

allTopics.map((item) => {
	html = `
    <button type="button" data-filter="${item.class}">${item.title}</button>
    `
	topic.innerHTML += html
})
