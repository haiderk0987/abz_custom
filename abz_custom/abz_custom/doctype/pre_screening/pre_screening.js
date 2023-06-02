// Copyright (c) 2023, ParaLogic and contributors
// For license information, please see license.txt

frappe.ui.form.on('Pre Screening', {
	setup: function(frm) {
		frm.trigger("setup_queries");
	},

	refresh: function(frm) {
		frm.trigger("setup_buttons");
	},

	setup_queries: function(frm) {
		frm.set_query("opportunity_from", function() {
			return {
				"filters": {
					"name": ["in", ["Customer", "Lead"]],
				}
			}
		});

		frm.set_query('party_name', function() {
			if (me.frm.doc.appointment_for === "Customer") {
				return erpnext.queries.customer();
			} else if (me.frm.doc.appointment_for === "Lead") {
				return erpnext.queries.lead();
			}
		});
	},

	setup_buttons: function(frm) {
		if (frm.doc.workflow_state == "Approved") {
			me.frm.add_custom_button(__("Customer Application"), () => frm.trigger('make_customer_application'),
			__("Create"));
	
			me.frm.page.set_inner_btn_group_as_primary(__("Create"));
		}
	},

	make_customer_application: function(frm) {
		frappe.model.open_mapped_doc({
			method: "abz_custom.overrides.opportunity_hooks.make_customer_application",
			frm: frm,
		});
	},

	make_customer_application: function(frm) {
		frappe.model.open_mapped_doc({
			method: "abz_custom.abz_custom.doctype.pre_screening.pre_screening.make_customer_application",
			frm: frm,
		});
	},
});
