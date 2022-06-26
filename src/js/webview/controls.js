// Identify the WebView using 'var' and providing a custom name for that WebView, in this case 'mainWebview'.
var mainWebview = document.querySelector('webview#main');

// Controls:
function openDevTools() {
    document.querySelector('button#devTools-isClose').style.display = 'none';
    document.querySelector('button#devTools-isOpen').style.display = 'inherit';
    mainWebview.openDevTools();
}

function closeDevTools() {
    document.querySelector('button#devTools-isOpen').style.display = 'none';
    document.querySelector('button#devTools-isClose').style.display = 'inherit';
    mainWebview.closeDevTools();
}

// CSS Injection:
setTimeout(() => {
    mainWebview.insertCSS('::-webkit-scrollbar{background:#466885;width:10px;}::-webkit-scrollbar-thumb{background:#fff;border-radius:50px;border:2px #466885 solid;border-right: none;}')
}, 0500)