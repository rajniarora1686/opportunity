Ext.define('Opportunity.view.westPanel.WestPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'westPanel',
    controller: 'westpanel', 
    
    requires: [
        'Opportunity.view.westPanel.WestPanelController',
        'Opportunity.view.westPanel.Opportunities'
    ],

    tbar: [{
        text: 'New Opportunity',
        handler: 'onClickNewButton'
    }],

    items: [{
            xtype: 'textfield',
            emptyText: 'Search Opportunity',
            padding: 10,
            listeners: {
                change: 'onChangeText'
            }
        }, {
            xtype: 'oppsList',
            reference: 'oppsList'
        }
    ]
 
});