// Copyright (c) 2023, ParaLogic and contributors
// For license information, please see license.txt

frappe.ui.form.on('Opportunity', {
	onload: function(frm) {
		me.frm.add_custom_button(__("Pre Screening"), () => frm.trigger('make_pre_screening'),
		__("Create"));
	},

	make_pre_screening: function(frm) {
		frappe.model.open_mapped_doc({
			method: "abz_custom.overrides.opportunity_hooks.make_pre_screening",
			frm: frm,
		});
	}
});
