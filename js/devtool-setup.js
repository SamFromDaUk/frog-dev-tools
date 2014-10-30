window.DevTool = window.DevTool || {};

DevTool._checkout = window.location.protocol + '//' + window.location.host + '/';

if (window.location.href.match(/\/frogos\//i)) {
    DevTool._checkout += 'frogos/';
}
