window.DevTool = window.DevTool || {};

DevTool.upgrade = function(deployment, params) {
    var scriptPath = 'lib/_upgrade.php?',
        options = {
            log: params.log || true,
            reset_db: params.reset_db || true,
            v: params.v || 'latest-dev',
            deployment: deployment
        };

    window.location = DevTool._checkout + scriptPath + $.param(options);
}
