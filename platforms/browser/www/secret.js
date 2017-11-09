function secretFunction() {
	return "AverySecretkey";
}

function login() {
	var url = "http://www.google.com";
	alert(url);
	var success = secretFunction();
	if (success) {
		return true;
	} else {
		return false;
	}
}