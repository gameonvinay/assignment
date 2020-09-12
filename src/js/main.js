var scrollpos = window.scrollY;
var nav = document.getElementById("mynav");
var nav_height = nav.offsetHeight;

var add_class_on_scroll = () => nav.classList.add("nav-dropshadow");
var remove_class_on_scroll = () => nav.classList.remove("nav-dropshadow");

window.addEventListener("scroll", function () {
  scrollpos = window.scrollY;

  if (scrollpos >= nav_height) {
    add_class_on_scroll();
  } else {
    remove_class_on_scroll();
  }
});

var sliderEl3 = document.querySelector('.third [data-rangeslider]')


sliderEl3.addEventListener('input', (ev) => {
  document.querySelector('.output').innerHTML = ev.target.value
})
rangesliderJs.create(sliderEl3, {


  onSlide: function () {
    console.log(this)
  }
})



