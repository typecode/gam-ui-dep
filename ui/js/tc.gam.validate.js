if(!tc){ var tc = {}; }

tc.validator_regex = {
	email: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
}

tc.validate = function(element,validators){
	tc.util.log('tc.validate');
	var valid, value, errors, i;
	
	valid = true;
	value = element.attr('value');
	errors = [];
	
	for(i in validators){
		tc.util.dump(validators[i].substring(0,3));
		if(validators[i].substring(0,3) == 'min'){
			if(value.length < (validators[i].split('-')[1]*1.0)){
				valid = false;
				errors.push("Too short.")
			}
		}
		if(validators[i].substring(0,3) == 'max'){
			if(value.length > (validators[i].split('-')[1]*1.0)){
				valid = false;
				errors.push("Too long.")
			}
		}
		switch(validators[i]){
			case 'required':
				if(!value.length){
					valid = false;
					errors.push("This is required.")
				}
				break;
			case 'email':
				tc.util.dump(tc.validator_regex.email.test(value));
				if (!tc.validator_regex.email.test(value)) {
					valid = false;
					errors.push("Invalid Email.")
				}
				break;
		}
	}
	
	if(valid){
		element.removeClass('not-valid').addClass('valid');
		element.trigger('validator-invalid',errors);
		return true;
	} else {
		element.removeClass('valid').addClass('not-valid');
		return false;
	}
}