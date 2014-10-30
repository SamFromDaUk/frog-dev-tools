window.DevTool = window.DevTool || {};

DevTool._checkout = window.location.protocol + '//' + window.location.host + '/';

if (window.location.href.match(/\/frogos\//i)) {
    DevTool._checkout += 'frogos/';
}

if (!window.$) {
    var script = document.createElement('script');

    script.src = 'https://code.jquery.com/jquery-1.11.1.min.js';

    (document.head||document.documentElement).appendChild(script);
}
