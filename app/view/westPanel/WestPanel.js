Ext.define('Opportunity.view.westPanel.WestPanel', {
    extend: 'Ext.panel.Panel',
    xtype: 'westPanel',
    controller: 'westpanel', 
    
    requires: [
        'Opportunity.view.westPanel.WestPanelController',
        'Opportunity.view.westPanel.Opportunities'
    ],

    tbar: {layout: { type: 'vbox', align: 'left'},
        items: [{
                text: 'New Opportunity',
                handler: 'onClickNewButton'
            },{
                xtype: 'textfield',
                emptyText: 'Search Opportunity',
                padding: 10,
                listeners: {
                    change: 'onChangeText'
                }
            }]
        },

    autoScroll: true,
    items: [{
            xtype: 'oppsList',
            reference: 'oppsList'
        }
    ]
 
});