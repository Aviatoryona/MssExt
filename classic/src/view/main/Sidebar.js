Ext.define('MSS.view.main.Sidebar', {
    extend: 'Ext.container.Container',
    xtype: 'sidebar',
    cls: 'sidebar',

    margin: '0 0 0 50',
    width:'100%',

    defaults: {
        bodyPadding: 10,
        width: '100%'
    },

    controller: 'main',

    items: [
        {
            xtype: 'container',
            defaults: {
                bodyPadding: 10,
                width: '100%'
            },
            cls: 'widget-menu',
            layout: 'vbox',
            padding: 10,
            items: [
                {
                    xtype: 'dataview',
                    scrollable: 'x',
                    store: {
                        data: [
                            {
                                id: 'home',
                                xtype: 'home',
                                text: 'Home',
                                icon: 'home'
                            }, {
                                id: 'personalinfo',
                                xtype: 'personalinfo',
                                text: 'Personal Info',
                                icon: 'user'
                            }, {
                                id: 'contributions',
                                xtype: 'contributions',
                                text: 'Contributions',
                                icon: 'sitemap'
                            }, {
                                id: 'balances',
                                xtype: 'Balances',
                                text: 'Balances',
                                icon: 'money-bill'
                            }
                        ]
                    },
                    weight: 0,
                    flex: 1,
                    ui: 'dark large',
                    selectable: {
                        deselectable: false
                    },
                    itemTpl: [
                        `<div class="widget-item"><span class="menuicon icon x-fa fa-{icon}"></span>`,
                        `<span class="menutext text">{text}</span></div>`
                    ],
                    listeners: {
                        itemclick: 'onMenuItemClick',
                    }
                },
            ]
        },

        {
            xtype: 'container',
            defaults: {
                bodyPadding: 10,
                width: '100%'
            },
            cls: 'widget-menu',
            layout: 'vbox',
            margin: '8 0',
            padding: 10,
            items: [
                {
                    xtype: 'dataview',
                    scrollable: 'x',
                    store: {
                        data: [
                            {
                                id: 'claims',
                                xtype: 'claims',
                                text: 'Claims',
                                icon: 'leaf'
                            }, {
                                id: 'projections',
                                xtype: 'projections',
                                text: 'Projections',
                                icon: 'cog'
                            }]
                    },
                    weight: 0,
                    flex: 1,
                    ui: 'dark large',
                    selectable: {
                        deselectable: false
                    },
                    itemTpl: [
                        `<div class="widget-item"><span class="menuicon icon x-fa fa-{icon}"></span>`,
                        `<span class="menutext text">{text}</span></div>`
                    ],
                    listeners: {
                        itemclick: 'onMenuItemClick'
                    }
                },
            ]
        },

        {
            xtype: 'container',
            defaults: {
                bodyPadding: 10,
                width: '100%'
            },
            cls: 'widget-menu',
            layout: 'vbox',
            margin: '8 0',
            padding: 10,
            items: [
                {
                    xtype: 'dataview',
                    scrollable: 'x',
                    store: {
                        data: [
                            {
                                id: 'tickets',
                                xtype: 'tickets',
                                text: 'Tickets',
                                icon: 'list'
                            }, {
                                id: 'manageaccount',
                                xtype: 'manageaccount',
                                text: 'Manage Account',
                                icon: 'cogs'
                            }]
                    },
                    weight: 0,
                    flex: 1,
                    ui: 'dark large',
                    selectable: {
                        deselectable: false
                    },
                    itemTpl: [
                        `<div class="widget-item"><span class="menuicon icon x-fa fa-{icon}"></span>`,
                        `<span class="menutext text">{text}</span></div>`
                    ],
                    listeners: {
                        itemclick: 'onMenuItemClick'
                    }
                },
            ]
        },

        {
            xtype: 'container',
            defaults: {
                bodyPadding: 10,
                width: '100%'
            },
            cls: 'widget-menu',
            layout: 'vbox',
            margin: '8 0',
            padding: 10,
            items: [
                {
                    xtype: 'dataview',
                    scrollable: 'x',
                    store: {
                        data: [
                            {
                                id: 'activitylog',
                                xtype: 'activitylog',
                                text: 'Activity Log',
                                icon: 'rss'
                            }, {
                                id: 'logout',
                                xtype: 'logout',
                                text: 'Logout',
                                icon: 'sign-out-alt'
                            }]
                    },
                    weight: 0,
                    flex: 1,
                    ui: 'dark large',
                    selectable: {
                        deselectable: false
                    },
                    itemTpl: [
                        `<div class="widget-item"><span class="menuicon icon x-fa fa-{icon}"></span>`,
                        `<span class="menutext text">{text}</span></div>`
                    ],
                    listeners: {
                        itemclick: 'onMenuItemClick'
                    }
                },
            ]
        },
    ]

});