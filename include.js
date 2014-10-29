(function() {
    var i = 0,
        script,
        files = [
            'js/search-role.js',
            'js/reload-css.js',
            'js/upgrade.js'
        ];

    for (; i < files.length; i++) {
        script = document.createElement('script');
        script.src = chrome.extension.getURL(files[i]);

        script.onload = function() {
            this.parentNode.removeChild(this);
        };

        (document.head||document.documentElement).appendChild(script);
    }
})();
