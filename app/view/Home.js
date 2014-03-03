Ext.define('FirstApp.view.Home', {
    extend: 'Ext.Panel',
    xtype: 'home',

    config: {
    	title: 'Home',
    	iconCls: 'home',
        cls: 'home',

    	layout: 'fit',
    	scrollable: true,
    	styleHtmlContent: true,
    	
    	
    	html: [
    		'<center><img src="./resources/icons/logo3.png" /></center>',
            '<h1>Welcome to App World</h1>',
            "<p>Where all the fun begins.",
        ].join(""),

        items: {
            xtype: 'titlebar',
            title: 'Home Page',
            docked: 'top'
        }
     }
});