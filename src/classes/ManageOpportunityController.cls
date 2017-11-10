public with sharing class ManageOpportunityController
{
	public String getAllOpportunities()
	{
		List<Opportunity> opps = [Select Id, Name From Opportunity];
		return Json.serialize(opps);
	}
}