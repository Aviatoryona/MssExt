Ext.define('MssExt.view.main.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'maintoolbar',

    requires: [
        'Ext.button.Button',
        'Ext.Img',
        'Ext.button.Segmented'
    ],
    height: 70,

    items: [
        '',
        {
            // This component is moved to the floating nav container by the phone profile
            xtype: 'component',
            reference: 'logo',
            userCls: 'main-logo',
            html: '<h3>Systech Pension Scheme</h3>'
        }, {
            ui: 'header',
            iconCls: 'x-fa fa-bars',
            margin: '0 0 0 10',
            listeners: {
                tap: 'onToggleNavigationSize'
            }
        }, '->', {
            xtype: 'segmentedbutton',
            reference: 'toolkitSwitch',
            margin: '0 16 0 0',
            platformConfig: {
                phone: {
                    hidden: true
                }
            },
            items: [{
                width: 35,
                value: 'classic',
                iconCls: 'x-fa fa-desktop',
                handler: 'onSwitchToClassic'
            }, {
                value: 'modern',
                iconCls: 'x-fa fa-tablet',
                pressed: true
            }]
        }, {
            ui: 'header',
            iconCls: 'x-fa fa-search',
            href: '#searchresults',
            margin: '0 7 0 0',
            handler: 'toolbarButtonClick'
        }, {
            ui: 'header',
            iconCls: 'x-fa fa-envelope',
            href: '#email',
            margin: '0 7 0 0',
            handler: 'toolbarButtonClick'
        }, {
            ui: 'header',
            iconCls: 'x-fa fa-question',
            href: '#faq',
            margin: '0 7 0 0',
            handler: 'toolbarButtonClick'
        }, {
            ui: 'header',
            iconCls: 'x-fa fa-th-large',
            href: '#dashboard',
            margin: '0 7 0 0',
            handler: 'toolbarButtonClick'
        }, {
            xtype: 'image',
            userCls: 'main-user-image small-image circular',
            alt: 'Current user image',
            src: '<shared>/images/rsz_sample_logo.png',
            width: 45,
            height: 45,
        }, {
            xtype: 'component',
            html: '<h4>Hi simon</h4>',
            margin: '0 20 0 0',
            userCls: 'main-user-name'
        }]
});
