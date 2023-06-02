import frappe
from frappe.model.mapper import get_mapped_doc


@frappe.whitelist()
def make_pre_screening(source_name, target_doc=None):
	def set_missing_values(source, target):
		target.salutation = frappe.db.get_value(target.opportunity_from, target.party_name, 'salutation')
		target.gender = frappe.db.get_value(target.opportunity_from, target.party_name, 'gender')
		lead_name = frappe.db.get_value(target.opportunity_from, target.party_name, 'lead_name')
		lead_name = lead_name.split()
		target.first_name = lead_name[0] if len(lead_name) else ''
		target.last_name = ' '.join(lead_name[1:]) if len(lead_name) > 1 else ''

	doclist = get_mapped_doc("Opportunity", source_name, {
		"Opportunity": {
			"doctype": "Pre Screening",
		}
	}, target_doc, set_missing_values)

	return doclist
