Ext.define('Opportunity.controller.DataLoader', {
    extend: 'Ext.app.Controller',
   
    onLaunch: function(){ 
        var allOpportunities = Ext.JSON.decode($Params.AllOpportunities);
        var me = this;
        
        var store = Ext.create('Opportunity.store.Opportunities', {
            data: allOpportunities
        });

        var sorters1 = [  {
            property: 'opportunityName',
            direction: 'ASC'
            }];

        store.sort(sorters1);
    }
});