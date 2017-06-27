var $ = require('jquery');
var _ = require('underscore');

/**
  * @author ahollenbeck
  * Add validation functionality to a form
  * Supported input types:
  *  - Name (first & last)
  *  - Email
  *  - Birthday (MM/DD/YYYY)
  *  - Password (6 or more characters)
  */
exports.form = function(selector) {

	// Validation regex
	var REGEX = {
		// One first name and one last name
		name: /^[^\s]+\s[^\s]+$/,
		// Valid email
		email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		// Birthday between 1900 and 2099
		birthday: /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/,
		// Six characters or more
		password: /.{6,}/,
	};

	// Error messages
	var ERRORS = {
		empty: 'You must enter your ',
		invalid: 'Invalid ',
	};

	/**
	  * Validate the form
	  * @param {jQuery Object} $form - the form to be validated
	  */
	function validate($form) {
		var formData = $form.serializeArray();
		var valid = true;

		hideAllErrors();

		_.each(formData, function(input) {

			if (_.isEmpty(input.value)) {
				showError('empty', input.name);
				valid = false;
			} else if (!isValid(input.name, input.value)) {
				showError('invalid', input.name);
				valid = false;
			}

		});

		if (valid) {
			alert('Account created!');
		}
	}

	/**
	  * Check if the field is valid
	  * @param {String} name - the input name
	  * @param {String} value - the input value
	  * @return {Boolean} - whether the value is valid for the input name
	  */
	function isValid(name, value) {
		var regex = new RegExp(REGEX[name]);
		return regex.test(value);
	}

	// Hide all open errors
	function hideAllErrors() {
		$('[data-error-showing="true"]').attr('data-error-showing', false);
	}

	/**
	  * Show an error
	  * @param {String} type - the type of error (empty or invalid)
	  * @param {String} name - the input name to show the error for
	  */
	function showError(type, name) {
		var $error = $('[data-error-for=' + name + ']');
		var text = ERRORS[type] + name;

		$error.text(text);
		$error.attr('data-error-showing', true);
	}

	// Attach the submit listener
  $(selector).on('submit', function(evt) {
  	evt.preventDefault();
  	var $form = $(evt.currentTarget);
  	validate($form);
  });  
}
