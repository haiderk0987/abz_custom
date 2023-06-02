# Copyright (c) 2023, ParaLogic and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document
from frappe.model.mapper import get_mapped_doc

class PreScreening(Document):
	pass


@frappe.whitelist()
def make_customer_application(source_name, target_doc=None):
	def set_missing_values(source, target):
		pass

	doclist = get_mapped_doc("Pre Screening", source_name, {
		"Pre Screening": {
			"doctype": "Customer Application",
			"field_map": {
				"name": "pre_screening"
			}
		}
	}, target_doc, set_missing_values)

	return doclist
