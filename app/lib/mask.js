Mask = {
	mask : function(_field, _function) {
		_field.value = _function(_field.value);
	},

	postcode : function(v) {
		v = v.replace(/D/g, "");
		v = v.replace(/^(\d{5})(\d)/, "$1-$2");
		return v.slice(0, 9);
	},

	creditcard : function(v) {
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d{4})(\d)/g, "$1 $2");
		v = v.replace(/^(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3");
		v = v.replace(/^(\d{4})\s(\d{4})\s(\d{4})(\d)/g, "$1 $2 $3 $4");
		return v;
	},

	creditcardvalid : function(v) {
		v = v.replace(/D/g, "");
		v = v.replace(/^(\d{2})(\d{2})/, "$1/$2");
		return v.slice(0, 5);
	},

	phone : function(v) {
		v = v.replace(/\D/g, "");
		v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
		v = v.replace(/(\d{4})(\d)/, "$1-$2");
		return v.slice(0, 14);
	}
}; 