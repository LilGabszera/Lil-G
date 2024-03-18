function toggleMode() {
  const html = document.documentElement

  //if(body.classList.contains('light')){
  //html.classList.remove('light')

  //}
  // else{
  //   html.classList.add('light')
  //}

  html.classList.toggle("light")

  const Img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    Img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    Img.setAttribute("src", "./assets/avatar.png")
  }
}
