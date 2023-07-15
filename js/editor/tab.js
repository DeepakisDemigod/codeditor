let tab_html = document.getElementById('html')
let tab_css = document.getElementById('css')
let tab_js = document.getElementById('js')
let tab_web = document.getElementById('web')


let editor_container_html = document.getElementById('editor-container-html')
let editor_container_css = document.getElementById('editor-container-css')
let editor_container_js = document.getElementById('editor-container-js')
let editor_result = document.getElementById('editor-result')

editor_container_html.style.display = "block"

// opacity
tab_html.style.opacity = "1"
tab_css.style.opacity = "0.4"
tab_js.style.opacity = "0.4"
tab_web.style.opacity = "0.4"


// font weight
tab_html.style.fontWeight = "bold"
tab_css.style.fontWeight = "normal"
tab_js.style.fontWeight = "normal"
tab_web.style.fontWeight = "normal"

// border-bottom
tab_html.style.borderBottom = "1.5px solid #00FFCA"
tab_css.style.borderBottom = "none"
tab_js.style.borderBottom = "none"
tab_web.style.borderBottom = "none"

// display
editor_container_css.style.display = "none"
editor_container_js.style.display = "none"
editor_result.style.display = "none"
runButton.style.display = "block"



tab_html.addEventListener('click', () => {
  // display
  editor_container_html.style.display = "block"
  editor_container_css.style.display = "none"
  editor_container_js.style.display = "none"
  editor_result.style.display = "none"
  runButton.style.display = "block"
  
  // border-bottom
  tab_html.style.borderBottom = "1.5px solid #00FFCA"
  tab_css.style.borderBottom = "none"
  tab_js.style.borderBottom = "none"
  tab_web.style.borderBottom = "none"
  
  // tab_html.style.background = ""
  
  // opacity
  tab_html.style.opacity = "1"
  tab_css.style.opacity = "0.4"
  tab_js.style.opacity = "0.4"
  tab_web.style.opacity = "0.4"
  
  // font-weight
  tab_html.style.fontWeight = "bold"
  tab_css.style.fontWeight = "normal"
  tab_js.style.fontWeight = "normal"
  tab_web.style.fontWeight = "normal"
  
})

tab_css.addEventListener('click', () => {
  // display
  editor_container_html.style.display = "none"
  editor_container_css.style.display = "block"
  editor_container_js.style.display = "none"
  editor_result.style.display = "none"
  runButton.style.display = "block"
  
  // border-bottom
  tab_html.style.borderBottom = "none"
  tab_css.style.borderBottom = "1.5px solid #00FFCA"
  tab_js.style.borderBottom = "none"
  tab_web.style.borderBottom = "none"
  
  tab_html.style.opacity = "0.4"
  tab_css.style.opacity = "1"
  tab_js.style.opacity = "0.4"
  tab_web.style.opacity = "0.4"  
  
  tab_html.style.fontWeight = "normal"
  tab_css.style.fontWeight = "bold"
  tab_js.style.fontWeight = "normal"
  tab_web.style.fontWeight = "normal"
})

tab_js.addEventListener('click', () => {
  editor_container_html.style.display = "none"
  editor_container_css.style.display = "none"
  editor_container_js.style.display = "block"
  editor_result.style.display = "none"
  runButton.style.display = "block"
  
  tab_html.style.borderBottom = "none"
  tab_css.style.borderBottom = "none"
  tab_js.style.borderBottom = "1.5px solid #00FFCA"
  tab_web.style.borderBottom = "none"
  
  tab_html.style.opacity = "0.4"
  tab_css.style.opacity = "0.4"
  tab_js.style.opacity = "1"
  tab_web.style.opacity = "0.4"
  
  tab_html.style.fontWeight = "normal"
  tab_css.style.fontWeight = "normal"
  tab_js.style.fontWeight = "bold"
  tab_web.style.fontWeight = "normal"
})

tab_web.addEventListener('click', () => {
  showWeb()
})


tab_web.addEventListener('dblclick', function() {
  keepRunning()
});


function showWeb() {
  editor_container_html.style.display = "none"
  editor_container_css.style.display = "none"
  editor_container_js.style.display = "none"
  editor_result.style.display = "block"
  runButton.style.display = "none"
  
  tab_html.style.borderBottom = "none"
  tab_css.style.borderBottom = "none"
  tab_js.style.borderBottom = "none"
  tab_web.style.borderBottom = "1.5px solid #00FFCA"
  
  // opacity
  tab_html.style.opacity = "0.4"
  tab_css.style.opacity = "0.4"
  tab_js.style.opacity = "0.4"
  tab_web.style.opacity = "1"
  
  tab_html.style.fontWeight = "normal"
  tab_css.style.fontWeight = "normal"
  tab_js.style.fontWeight = "normal"
  tab_web.style.fontWeight = "bold"

}

