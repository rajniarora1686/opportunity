/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('Opportunity.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Opportunity.view.main.MainController',
        'Opportunity.view.main.MainModel',
        'Opportunity.view.westPanel.WestPanel'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    title: 'Manage Opportunities',

    items: [{
        xtype: 'westPanel',
        region: 'west',
        flex:0.4  
    },{
        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Tab 1',
            html: '<h2>Content appropriate for the current navigation.</h2>'
        }]
    }]
});
