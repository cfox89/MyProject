Ext.define('FirstApp.store.Places', {
    extend: 'Ext.data.Store',
    
    config:{
    	model:'FirstApp.model.Place',
    	data:[
    	{
    		name: 'Name1',
    		icon: 'icon1',
    		vicinity: 'vicinity1'
    	},

    	{
    		name: 'Name2',
    		icon: 'icon2',
    		vicinity: 'vicinity2'
    	},

    	{
    		name: 'Name3',
    		icon: 'icon3',
    		vicinity: 'vicinity3'
    	}
      ]
     /* proxy: {
      	type: 'ajax',
      	url: ''
      	reader
      }*/
    }
});