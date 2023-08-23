const data = [{
        user_name: ' Tanya Sinclair ',
        user_image: ' ./images/image-tanya.jpg ',
        user_job_title: 'UX Engineer',
        user_quote: ' “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” '
    },
    {
        user_name: ' John Tarkpor ',
        user_image: ' ./images/image-john.jpg ',
        user_job_title: 'Junior Front-end Developer',
        user_quote: '   “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ” '
    },
];

let dataIndex = 0;

window.addEventListener('load', buttonClick)
const clear = () => {
    const main_html = document.querySelector('#container').children;
    main_html[0].remove()
    main_html[0].remove()
}
const buttonClickedprev = () => {
    dataIndex--;
    if (dataIndex < 0) dataIndex = data.length - 1
    clear()
    buttonClick()
}
const buttonClickedNext = () => {
    dataIndex++;
    if (dataIndex > data.length - 1) dataIndex = 0
    clear()
    buttonClick()
}

function buttonClick() {
    const main_html = document.querySelector('#container');
    console.log(dataIndex);
    let element = data[dataIndex];
    const htmlFormat = ` 
                                    <div class="testimonial">
                                        <img src="./images/pattern-quotes.svg" alt="pattern quote">
                                        <p>
                                            <blockquote title="${element.user_name}'s quote">${element.user_quote}</blockquote>
                                        </p>
                                        <h1> ${element.user_name} <small>${element.user_job_title}</small> </h1>
                                    </div>
                                    <div class="user-image">
                                        <img src="${element.user_image}" alt="${element.user_name}" title="${element.user_name}" id="profile_image">
                                        <!-- <img src="./images/pattern-bg.svg" alt="" class="bg-2"> -->
                                        <div class="button-container">
                                            <div class="previous" onclick="buttonClickedprev()">
                                                <img src="./images/icon-prev.svg" alt="previousSVG">
                                            </div>
                                            <div class="next" onclick="buttonClickedNext()">
                                                <img src="./images/icon-next.svg" alt="nextSVG">
                                            </div>
                                         </div>
                                    </div>
                                    `;

    main_html.insertAdjacentHTML('afterbegin', htmlFormat)
}