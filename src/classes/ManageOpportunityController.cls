public with sharing class ManageOpportunityController
{
    public String getAllOpportunities()
    {
        List<Opportunity> opps = [Select Id, Name From Opportunity];
        List<OpportunityC> opportunities = new List<OpportunityC>();
        for(Opportunity o : opps)
            opportunities.add(new OpportunityC(o));
        return Json.serialize(opportunities);
    }
    
    public class OpportunityC
    {
        public String opportunityName;
        public String opportunityId;
        
        public OpportunityC(Opportunity opp)
        {
            opportunityName = opp.Name;
            opportunityId = opp.Id;
        }
    }
}