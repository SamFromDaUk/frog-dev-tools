(function() {
    var i = 0,
        script,
        files = [
            'js/search-role.js'
        ];

    for (; i < files.length; i++) {
        script = document.createElement('script');
        script.src = chrome.extension.getURL('js/search-role.js');

        script.onload = function() {
            this.parentNode.removeChild(this);
        };

        (document.head||document.documentElement).appendChild(script);
    }
})();
