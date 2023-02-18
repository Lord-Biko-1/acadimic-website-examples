const lessonsHeader = document.querySelectorAll(".lessons-section h3"),
      lessons = document.querySelectorAll(".lessons-section .lessons-wrapper");


for (let head in lessonsHeader) {
    lessonsHeader[head].onclick = () => {
        lessons[head].classList.toggle("visible")
    }
}