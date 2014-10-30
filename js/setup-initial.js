DevTool.setupInitial = function(multiAuth) {
    var scriptPath = '_setup/initial.php?',
        multi = 'Frog&AD&ADFS&OAuthGoogle&Frog3&',
        url = DevTool._checkout + scriptPath;

    if (multiAuth) {
        url += multi;
    }

    window.location = url;
}
