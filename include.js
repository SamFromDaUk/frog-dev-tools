(function() {
    var i = 0,
        script,
        files = [
            'js/search-role.js',
            'js/reload-css.js',
            'js/upgrade.js'
        ],
        addScript = function(path) {
            script = document.createElement('script');
            script.src = chrome.extension.getURL(path);

            script.onload = function() {
                this.parentNode.removeChild(this);

                for (; i < files.length; i++) {
                    script = document.createElement('script');
                    script.src = chrome.extension.getURL(files[i]);

                    script.onload = function() {
                        this.parentNode.removeChild(this);
                    };

                    (document.head||document.documentElement).appendChild(script);
                }
            };

            (document.head||document.documentElement).appendChild(script);

            return script;
        };

    addScript('js/devtool-setup.js');
})();
