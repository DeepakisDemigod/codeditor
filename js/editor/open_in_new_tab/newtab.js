function openInNewTab() {
  var web = document.getElementById("output");
  var iframeContent = web.contentWindow.document.documentElement.outerHTML;

  var newWindow = window.open();
  newWindow.document.write(iframeContent);
}

//openInNewTab()