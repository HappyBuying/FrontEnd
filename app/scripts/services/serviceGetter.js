angular.module('happyBuyingApp')

.factory('serviceGetter', function(propertyImages, propertyPlans){
	console.log('serviceGetter entered');
	var obj = {
		service: ''
	};
	obj.create = function(service){
		if (service === 'propertyImages'){
			obj.service = propertyImages;
		}
		if (service === 'propertyPlans'){
			obj.service = propertyPlans;
		}
	};

	return obj;
})