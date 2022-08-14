let nav = document.querySelector("nav ul");
let open = document.getElementById('show')
let close = document.getElementById('close')

const handleclick = () => {
    nav.classList.add('show');
    open.style.display = "none"
    close.style.display = "block"
}
const handleClose = () => {
    nav.classList.remove('show');
    open.style.display = "block"
    close.style.display = "none"
}