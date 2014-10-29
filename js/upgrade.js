window.DevTool = window.DevTool || {};

DevTool.upgrade = function(deployment, reset_db) {
    var host = window.location.protocol + '//' + window.location.host + '/',
        scriptPath = 'lib/_upgrade.php?',
        options = {
            log: true,
            reset_db: reset_db || true,
            v: 'latest-dev',
            deployment: deployment
        };

    if (window.location.href.match(/\/frogos\//i)) {
        host += 'frogos/';
    }

    window.location = host + scriptPath + $.param(options);
}
