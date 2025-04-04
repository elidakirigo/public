const testimonial1 = document.querySelector(".first-testimonial")
const testimonial2 = document.querySelector(".sec-testimonial")

const buttonClick = () => {
    console.log('clicked');
      testimonial1.classList.toggle("none");
      testimonial2.classList.toggle("none");
}