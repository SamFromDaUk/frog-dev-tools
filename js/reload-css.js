window.DevTool = window.DevTool || {};

DevTool.reloadCss = function() {
    $('link[rel="stylesheet"]').each(function() {
        this.href = this.href.replace(/\?.*|$/, '?reload=' + new Date().getTime());
    });
}
