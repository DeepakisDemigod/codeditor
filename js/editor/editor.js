let editor_html = ace.edit("editor-html");
editor_html.setTheme("ace/theme/tomorrow_night_eighties");
editor_html.session.setMode("ace/mode/html");

editor_html_default = `<!DOCTYPE html>
<html>
  <head>
    <title>Clock</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
      <h1 class="title">Hello World! </h1>
      <p id="currentTime"></p>
      <script src="script.js"></script>
  </body>
</html>
`



// html code ends

// css code starts

let editor_css = ace.edit("editor-css");
editor_css.setTheme("ace/theme/tomorrow_night_eighties");
editor_css.session.setMode("ace/mode/css");
editor_css_default = `body{
  padding: 25px;
}

.title {
	color: #5C6AC4;
}

`




// css code ends

// js code starts


let editor_js = ace.edit("editor-js");
editor_js.setTheme("ace/theme/tomorrow_night_eighties");
editor_js.session.setMode("ace/mode/javascript");
editor_js_default = `function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);


`



let web = document.getElementById('output')



function showWeb() {
  let editor_container_html = document.getElementById('editor-container-html')
  let editor_container_css = document.getElementById('editor-container-css')
  let editor_container_js = document.getElementById('editor-container-js')
  let editor_result = document.getElementById('editor-result')
  editor_container_html.style.display = "none"
  editor_container_css.style.display = "none"
  editor_container_js.style.display = "none"
  editor_result.style.display = "block"
}

function run() {
  let htmlcode = editor_html.getValue();
  let csscode = editor_css.getValue();
  let jscode = editor_js.getValue();
  web.contentDocument.body.innerHTML = htmlcode + '<style>' + csscode + '</style>'
  web.contentWindow.eval(jscode)
  showWeb()
}


const runButton = document.getElementById('run')

function runAndLoad() {
  load()
  run()
}


runButton.addEventListener('click', () => {
  runAndLoad()
})


setTimeout(() => {
  setInterval(() => {
    let htmlcode = editor_html.getValue()
    let csscode = editor_css.getValue();
    let jscode = editor_js.getValue();
    localStorage.setItem('html', htmlcode);
    localStorage.setItem('css', csscode);
    localStorage.setItem('js', jscode);
  }, 1000);
}, 100)


editor_html.setValue(localStorage.getItem('html') || editor_html_default)
editor_css.setValue(localStorage.getItem('css') || editor_css_default)
editor_js.setValue(localStorage.getItem('js') || editor_js_default)

run()

