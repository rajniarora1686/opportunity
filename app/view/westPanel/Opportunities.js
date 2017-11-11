Ext.define('Opportunity.view.westPanel.Opportunities', {
        extend: 'Ext.grid.Panel',
        xtype: 'oppsList',
        controller: 'westpanel', 
        bind: {
            store: 'opps'  
        },

        requires: [
            'Opportunity.view.westPanel.WestPanelController'
        ],

       
        header:false,
        columns: [{
            text: 'Name',
            dataIndex: 'opportunityName',
            flex:1
        }]
});