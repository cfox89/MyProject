Ext.define('FirstApp.view.Places', {
    extend: 'Ext.Panel',
    xtype: 'places',

    config: {
    	title: 'Places',
    	iconCls: 'maps',
        layout: 'fit',
       
       items: [
           {
            xtype: 'titlebar',
            title: 'Place Listing',
            docked: 'top'
        },

            {
            xtype: 'list',
            store: 'Places',
            itemTpl: '{name}, {icon}, {vicinity}'
            }
        ]
    }
});