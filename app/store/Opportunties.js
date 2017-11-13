
Ext.define( 'Opportunity.store.Opportunities', {
    extend: 'Ext.data.Store',
    storeId: 'opps',
    model: 'Opportunity.model.Opportunity',
    autoLoad: true,

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    }
});
