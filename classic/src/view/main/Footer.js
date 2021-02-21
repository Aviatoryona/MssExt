Ext.define('mssphenix.view.main.layouts.Footer', {
    extend: 'Ext.container.Container', 
    xtype: 'footer',
    cls: 'footer',
    height: 30,
    layout: 'fit',
    items: [
        {
            xtype: 'component',
            width: 350,
            componentCls: 'app-footer-title',
            padding:'0 0 0 100',
            html: '&COPY; 2021 Systech Ltd. All rights reserved'
        },
    ]
});