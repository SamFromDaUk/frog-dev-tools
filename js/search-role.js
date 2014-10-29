window.DevTool = window.DevTool || {};

DevTool.searchRole = function(role) {
    var matches = {},
        expression;

    try {
        expression = new RegExp(role, 'i');
    } catch(Exception) {
        console.error('Invalid regular expression');
        return;
    }

    for (var i in _Roles) {
        if (!_Roles.hasOwnProperty(i)) {
            continue;
        }

        if (_Roles[i].match(expression)) {
            matches[i] = _Roles[i];
        }
    }

    console.log(matches);
}
