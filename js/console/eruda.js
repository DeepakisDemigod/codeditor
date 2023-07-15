
var erudaInitialized = false; // Track whether Eruda has been initialized

function load() {
  if (erudaInitialized) {
    // Eruda is already initialized, no need to load it again
    keepRunning();
    return;
  }

  var script = document.createElement('script');
  script.src = "//cdn.jsdelivr.net/npm/eruda";
  document.getElementById("output").appendChild(script);

  script.onload = function () {
    eruda.init({
      tool: ['console','settings'], // Only include 'console' and 'settings' tabs
      theme: 'material-deep-ocean',
    });
    erudaInitialized = true; // Mark Eruda as initialized
    keepRunning();
  };
}

function keepRunning() {
  // Get the Eruda console instance
  var erudaConsole = eruda.get('console');

  // Redirect console methods to Eruda console
  console.log = erudaConsole.log.bind(erudaConsole);
  console.warn = erudaConsole.warn.bind(erudaConsole);
  console.error = erudaConsole.error.bind(erudaConsole);
  // You can redirect other console methods if needed

  // Example usage
  let jscode = editor_js.getValue(); // Assuming "getValue()" is a valid method for retrieving the editor's value
  eval(jscode);
}

// Call the load() function to start the process
// load();
