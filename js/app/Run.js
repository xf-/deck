app.run(function ($document, $rootScope, $transitions) {
    'use strict';
    $document.click(function (event) {
        $rootScope.$broadcast('documentClicked', event);
    });
    $transitions.onEnter({to: 'board.card'}, function ($state, $transition$) {
        $rootScope.sidebar.show = true;
    });
    $transitions.onEnter({to: 'board.detail'}, function ($state, $transition$) {
        $rootScope.sidebar.show = true;
    });
    $transitions.onEnter({to: 'board'}, function ($state) {
        $rootScope.sidebar.show = false;
    });
    $transitions.onExit({from: 'board.card'}, function ($state) {
        $rootScope.sidebar.show = false;
    });
    $transitions.onExit({from: 'board.detail'}, function ($state) {
        $rootScope.sidebar.show = false;
    });

    $('link[rel="shortcut icon"]').attr(
        'href',
        OC.filePath('deck', 'img', 'app-512.png')
    );

});
