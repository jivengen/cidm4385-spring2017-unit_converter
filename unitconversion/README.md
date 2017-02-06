# Unit Converter

Github and Markdowns

* [Git cheatsheet](https://www.git-tower.com/blog/git-cheat-sheet/)
* [Markdown sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

This application will convert metric units to imperial units and back.

This uses a locally downloaded version of angularjs, (angular.js)

This code was created to follow the interface like this website
* [Converter](http://convert.french-property.co.uk/)
 

```
	<h2>Length Converter</h2>
			<h4>Metric to Imperial</h4>

			<input type="text" id="Length_Value" name="VALUE" ng-model="ucc.lengthValue1">

			

			<select ng-model="ucc.selected_metric_length_unit" 

                    ng-options="unit.unit_name for unit in ucc.metric_length_units" 

                    ng-change="ucc.showSelectedunitMetric()"></select>

                    to

            <select ng-model="ucc.selected_imperial_length_unit" 

                    ng-options="unit.unit_name for unit in ucc.imperial_length_units" 

                    ng-change="ucc.showSelectedunitImperial()"></select>

            <button ng-click="ucc.runApplicationLength()">Convert</button>

			<div>
```