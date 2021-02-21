/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MssExt.view.main.Main', {
    extend: 'Ext.container.Container',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox'
    ],

    controller: 'main',
    viewModel: 'main',

    layout: {
        type: 'vbox'
    },

    defaults: {
        width: '100%'
    },

    items: [
    
        {
            //topbar here
            xtype: 'maintoolbar',
            docked: 'top',
            userCls: 'main-toolbar',
            shadow: true
        },
        {
            //sidebar and content here
            //use column
            xtype: 'container',
            layout: {
                type: 'column'
            },
            margin:'20 0 0 0',
            defaults: {
                xtype: 'container',
                width: '100%'
            },
            items: [
                {
                    //sidebar here
                    columnWidth: 0.2,
                    xtype: 'sidebar'
                },

                //your code goes here
                {
                    columnWidth: 0.8,
                    margin:'0 20 0 30',
                    items:[
                        {
                           xtype:'personaldetails'
                        }
                    ]
                }
            ]
        },

        {
            //footer here
            xtype: 'footer',
        }

    ]
});
