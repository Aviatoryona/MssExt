Ext.define('MssExt.view.personalinfo.PersonalDetails', {
    extend: 'Ext.container.Container',

    xtype: 'personaldetails',
   
    defaults: {
        border: false,
        xtype: 'panel',
        flex: 1,
        layout: 'anchor',
        bodyPadding:5,
    },

    layout: 'hbox',

    items: [{
        items: [{
            xtype: 'mitextfield',
            fieldLabel: 'First Name',
            anchor: '-5',
            name: 'first'
        },
        {
            xtype: 'mitextfield',
            fieldLabel: 'Company',
            anchor: '-5',
            name: 'company'
        }]
    },
    {
        items: [
            {
                xtype: 'mitextfield',
                fieldLabel: 'Last Name',
                anchor: '100%',
                name: 'last'
            },
            {
                xtype: 'mitextfield',
                fieldLabel: 'Email',
                anchor: '100%',
                name: 'email',
                vtype: 'email'
            }
        ]
    }],

});