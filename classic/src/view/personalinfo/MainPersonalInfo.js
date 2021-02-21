Ext.define('MssExt.view.personalinfo.MainPersonalInfo', {
    extend: 'Ext.container.Container',

    xtype: 'mainpersonalinfo',
    layout: {
        type: 'column'
    },
    style: {
        'background-color': '#eee'
    },
    bodyPadding: 16,

    height: '100%',

    items: [
        //left column
        {

            columnWidth: 0.5,
            xtype: 'container',
            layout: 'vbox',
            margin:5,
            defaults: {
                width: '100%',
                bodyPadding:16,
            },
            items: [
                {
                    html: `<h3>Personal Info</h3>`,
                },
                {
                    xtype: 'personaldetails'
                }
            ]

        },

        //Right column
        {
            columnWidth: 0.5,
            xtype: 'container',
            margin:5,
            layout: 'vbox',
            defaults: {
                width: '100%',
                bodyPadding:16,
            },
            items: [
                {
                    html: `<h3>Contact Details</h3>`,
                },
                {
                    xtype: 'personaldetails',
                    
                }
            ]

        }
    ]
});