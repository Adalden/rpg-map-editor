var mainMenu;
mainMenu = [
  {
    name: 'Non Menu Nav',
    hidden: true,
    items: [
      {
        state: 'index.changeName',
        tmpl: 'tmpl/modals/change-name.html',
        ctrl: 'changeNameCtrl'
      },
      {
        state: 'index.login',
        tmpl: 'tmpl/modals/login.html',
        ctrl: 'loginCtrl'
      },
      {
        state: 'index.signUp',
        tmpl: 'tmpl/modals/sign-up.html',
        ctrl: 'signUpCtrl'
      },
      {
        state: 'index.newEvent',
        tmpl: 'tmpl/modals/new-event.html',
        ctrl: 'newEventCtrl'
      }
    ]
  },
  {
    name: 'Menu',
    items: [
      {
        name: 'New',
        state: 'index.newMap',
        tmpl: 'tmpl/modals/new-map.html',
        ctrl: 'newMapCtrl'
      },
      {
        name: 'Open',
        state: 'index.open',
        tmpl: 'tmpl/modals/open.html',
        ctrl: 'openCtrl',
        loggedIn: true
      },
      {
        name: 'Save As',
        state: 'index.saveAs',
        tmpl: 'tmpl/modals/save-as.html',
        ctrl: 'saveAsCtrl',
        loggedIn: true
      },
      {
        name: 'Import',
        state: 'index.import',
        tmpl: 'tmpl/modals/import.html',
        ctrl: 'importCtrl'
      },
      {
        name: 'Export',
        state: 'index.export',
        tmpl: 'tmpl/modals/export.html',
        ctrl: 'defaultModalCtrl'
      }
    ]
  },
  {
    name: 'Edit',
    items: [
      {
        isCommand: true,
        name: 'Toggle Grid',
        id: 'grid'
      }
    ]
  },
  {
    name: 'Help',
    items: [
      {
        name: 'Keyboard Shortcuts',
        state: 'index.controls',
        tmpl: 'tmpl/modals/controls.html',
        ctrl: 'defaultModalCtrl'
      },
      {
        name: 'Who Am I',
        state: 'index.whoAmI',
        tmpl: 'tmpl/modals/who-am-i.html',
        ctrl: 'defaultModalCtrl',
        loggedIn: true
      },
      {
        name: 'About',
        state: 'index.about',
        tmpl: 'tmpl/modals/about.html',
        ctrl: 'defaultModalCtrl'
      }
    ]
  }
];
