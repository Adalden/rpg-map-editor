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
      }
    ]
  },
  {
    name: 'Edit',
    items: []
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
        name: 'About',
        state: 'index.about',
        tmpl: 'tmpl/modals/about.html',
        ctrl: 'defaultModalCtrl'
      }
    ]
  }
];
