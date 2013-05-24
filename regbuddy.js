function RegBuddy(string, reg, opt){
  'use strict';
	var reg = eval(reg);
	var result = string.match(new RegExp(reg));
	return result;
}
