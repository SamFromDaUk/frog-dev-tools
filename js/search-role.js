DevTool.searchRole = function(role) {
    var matches = {},
        expression;

    try {
        expression = new RegExp(role, 'i');
    } catch(Exception) {
        console.error('Invalid regular expression');
        return;
    }

    try {
        _Roles.has();
    } catch(Exception) {
        console.error('window._Roles is not defined');
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
