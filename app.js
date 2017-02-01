var unitConverter = angular.module("UnitConverter", []);

/* conversion rates and UI idea from: http://convert.french-property.co.uk/ */

unitConverter.controller('UnitConverterController', [ 
	'$scope', function($scope){
		
		var ucc = this;
		
		//attributes
		ucc.weightValue = 0;
		
		  ucc.metric_volume_units = 
		[
			{
			   unit_name: "Cubic Centimeters",
			   unit_code: "cm3",
			   type: "metric"
			},
			{
				unit_name: "Cubic Decimeters",
				unit_code: "dm3",
				type: "metric"
			},
			{
				unit_name: "Cubic Meters",
				unit_code: "m3",
				type: "metric"
			},
			{
				unit_name: "Cubic Liters",
				unit_code: "l",
				type: "metric"
			},        
			{
				unit_name: "Hectoliters",
				unit_code: "hl",
				type: "metric"
			}
		];
		ucc.imperial_weightValue = 0;
		ucc.imperial_volume_units =
		[
			{
				imperial_unit_name: "Cubic Inches",
				imperial_unit_code: "in3",
				type:"imperial"
			},
			{
				imperial_unit_name: "Cubic Feet",
				imperial_unit_code: "ft3",
				type: "imperial"
			},
			{
				imperial_unit_name: "Fluid Ounce",
				imperial_unit_code: "fl oz",
				type: "imperial"
			},
			{
				imperial_unit_name: "Pint",
				imperial_unit_code: "pt",
				type: "imperial"
			},
			{
				imperial_unit_name: "Gallon",
				imperial_unit_code: "gal",
				type: "imperial"
			}
		];
		ucc.metric_massValue = 0;
		ucc.metric_mass_units =
		[
			{
				metric_unit_mass_name: "milligram",
				metric_unit_mass_code: "mg",
				type: "metric"
			},
			{
				metric_unit_mass_name: "gram",
				metric_unit_mass_code: "g",
				type: "metric"
			},
			{
				metric_unit_mass_name: "kilogram",
				metric_unit_code: "kg",
				type: "metric"
			},
			{
				metric_unit_mass_name: "tonne",
				metric_unit_mass_code: "t",
				type: "metric"
			}
		];
		ucc.imperial_massValue = 0;
		ucc.imperial_mass_units =
		[
			{
				imperial_unit_mass_name: "ounce",
				imperial_unit_mass_code: "oz",
				type: "imperial"
			},
			{
				imperial_unit_mass_name: "pound",
				imperial_unit_mass_code: "lb",
				type: "imperial"
			},
			{
				imperial_unit_mass_name: "stone",
				imperial_unit_mass_code: "stone",
				type: "imperial"
			},
			{
				imperial_unit_mass_name: "hundredweight",
				imperial_unit_mass_code: "cwt",
				type: "imperial"
			},
			{
				imperial_unit_mass_name: "long ton",
				imperial_unit_mass_code: "uk",
				type: "imperial"
			}
				
		];
		
		ucc.metric_lengthValue = 0;
		ucc.metric_length_units = 
		[
			{
				metric_length_unit_name: "millimeter",
				metric_length_unit_code: "mm",
				type: "metric"
			},
			{
				metric_length_unit_name: "centimeter",
				metric_length_unit_code: "cm",
				type: "metric"
			},
			{
				metric_length_unit_name: "meter",
				metric_length_unit_code: "m",
				type: "metric"
			},
			{
				metric_length_unit_name: "kilometer",
				metric_length_unit_code: "km",
				type: "metric"
			}
			
			
		];
		ucc.imperial_lengthValue = 0;
		ucc.imperial_length_units =
		[
			{
				imperial_length_unit_name: "inch",
				imperial_length_unit_code: "in",
				type: "imperial"
			},
			{
				imperial_length_unit_name: "feet",
				imperial_length_unit_code: "ft",
				type: "imperial"
			},
			{
				imperial_length_unit_name: "yards",
				imperial_length_unit_code: "yd",
				type: "imperial"
			},
			{
				imperial_length_unit_name: "miles",
				imperial_length_unit_code: "mi",
				type: "imperial"
			},
			{
				imperial_length_unit_name: "int nautical mile",
				imperial_length_unit_code: "int nautical mile",
				type: "imperial"
			}
		];
		
		function weightUpdated(){
			console.log(ucc.weightValue);
		}
		
		$scope.$watch('ucc.weightValue', weightUpdated);
		
		ucc.selected_metric_volume_unit = ucc.metric_volume_units[0];
		
		
		//behaviors
		ucc.showSelectedUnit = function(){
			console.log(ucc.selected_metric_volume_unit.unit_name);
		}	
		
		function imperial_weightUpdated(){
			console.log(ucc.imperial_weightValue);
		}
		
		$scope.$watch('ucc.imperial_weightValue', imperial_weightUpdated);
		ucc.selected_imperial_volume_unit = ucc.imperial_volume_units[0];
		
		//behaviors
		ucc.showSelectedImperialUnit = function(){
			console.log(ucc.imperial_weightValue);
		}
		
		
		
		function massUpdated(){
			console.log(ucc.massValue);
		}
		$scope.$watch('ucc.massValue', massUpdated);
		ucc.selected_metric_mass_unit = ucc.metric_mass_units[0];
		//behaviors
		ucc.showSelectedMassUnit = function(){
			console.log(ucc.selected_metric_mass_unit.metric_mass_unit_name);
		}	
		
		function imperial_massUpdated(){
			console.log(ucc.imperial_massValue);
		}
		
		$scope.$watch('ucc.imperial_massValue', imperial_massUpdated);
		ucc.selected_imperial_mass_unit = ucc. imperial_mass_units[0];
		// behaviors
		ucc.showSelectedImperialUnit = function(){
			console.log(ucc.imperial_massValue);
		}
		
		function lengthUpdated(){
			console.log(ucc.lengthValue);
		}
		$scope.$watch('ucc.lengthValue', lengthUpdated);
		ucc.selected_metric_length_unit = ucc.metric_length_units[0];
		//behaviors
		ucc.showSelectedLengthUnit = function(){
			console.log(ucc.metric_lengthValue);
		}
		
		function imperial_lengthUpdated(){
			console.log(ucc.imperial_lengthValue);
		}
		$scope.$watch('ucc.imperial_lengthValue', imperial_lengthUpdated);
		ucc.selected_imperial_length_unit = ucc.imperial_length_units[0];
		//behaviors
		ucc.showSelectedImperialLengthUnit = function(){
			console.log(ucc.imperial_lengthValue);
		}

	
		}
		]);
	







//$ means it came with angular which is called middle wear another one would be '$http'
