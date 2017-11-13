Ext.define('Opportunity.view.westPanel.WestPanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.westpanel',
    
    onChangeText: function(txt){
        var store = this.lookupReference('oppsList').getStore();
        store.filter('opportunityName', txt.getValue());
    },

    onClickNewButton: function(btn){
        console.log('btn clicked');
    }
});