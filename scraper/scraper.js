var Nightmare = require('nightmare')

var nm = new Nightmare();

var data = {
	'ddlday1': '01',
	'ddlmonth1': '01',
	'ddlyear1': '1950',
	'ddlday2': '31',
	'ddlmonth2': '12',
	'ddlyear2': '2015'
};

var handlePopup = function(a, b, c) {
	console.log("handling popup", a, b, c);
	debugger;
}

nm.on('pageCreated', handlePopup);

nm.goto('http://judis.nic.in/supremecourt/DateQry.aspx')
		    .select('select[name="ddlday1"]', data.ddlday1)
		    .select('select[name="ddlmonth1"]', data.ddlmonth1)
		    .select('select[name="ddlyear1"]', data.ddlyear1)
		    .select('select[name="ddlday2"]', data.ddlday2)
		    .select('select[name="ddlmonth2"]', data.ddlmonth2)
		    .select('select[name="ddlyear2"]', data.ddlyear2)
		    .click('input[type="submit"]')
		    .wait()
		    .screenshot('kurona.jpeg')
		    // .click('button[onclick*="case"]')
		    // .wait()
		    // .evaluate(parseLinks, handleResult, project.ctype, project.cno, project.cyear)
		    .run();