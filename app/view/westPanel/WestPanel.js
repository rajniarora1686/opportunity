Ext.define('Opportunity.view.westPanel.WestPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'westPanel',
    controller: 'westpanel', 
    
    requires: [
        'Opportunity.view.westPanel.WestPanelController',
        'Opportunity.view.westPanel.Opportunities'
    ],

    items: [{
            xtype: 'oppsList',
            reference: 'oppsList'
        }
    ]
 
});