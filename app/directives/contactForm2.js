(function() {
	angular.module("app").directive("contactForm2", contactForm2)
	function contactForm2() {
		return {
			templateUrl : "app/templates/contactForm.html",
			link : function(scope,element,attr) {

				scope.saveData = function() {
					console.log(scope)
					var data = {
						name : scope.nameInput,
						age : scope.ageInput,
					}
					var JSONdata = JSON.stringify(data);
					localStorage.setItem("data", JSONdata)

				}
				scope.getData = function() {
					var data = localStorage.getItem("data")
					var parsedData = JSON.parse(data);
					alert(parsedData.name);
				}
			}
		}
	}

})();
