months = ["Baishak", "Jestha", "Ashad", "Shrawn", "Bhadra", "Ashwin", "kartik", "Mangshir", "Poush", "Magh", "Falgun", "Chaitra"];
nepali_dates = {
	2000:[[30,32,31,32,31,30,30,30,29,30,29,31],[4,6,3,6,3,6,1,3,5,6,1,2]],
	2001:[[31,31,32,31,31,31,30,29,30,29,30,30],[5,1,4,1,4,7,3,5,6,1,2,4]],
	2002:[[31,31,32,32,31,30,30,29,30,29,30,30],[6,2,5,2,6,2,4,6,7,2,3,5]],
	2003:[[31,32,31,32,31,30,30,30,29,29,30,31],[7,3,7,3,7,3,5,7,2,3,4,6]],
	2004:[[30,32,31,32,31,30,30,30,29,30,29,31],[2,4,1,4,1,4,6,1,3,4,6,7]],
	2005:[[31,31,32,31,31,31,30,29,30,29,30,30],[3,6,2,6,2,5,1,3,4,6,7,2]],
	2006:[[31,31,32,32,31,30,30,29,30,29,30,30],[4,7,3,7,4,7,2,4,5,7,1,3]],
	2007:[[31,32,31,32,31,30,30,30,29,29,30,31],[5,1,5,1,5,1,3,5,7,1,2,4]],
	2008:[[31,31,31,32,31,31,29,30,30,29,29,31],[7,3,6,2,6,2,5,6,1,3,4,5]],
	2009:[[31,31,32,31,31,31,30,29,30,29,30,30],[1,4,7,4,7,3,6,1,2,4,5,7]],
	2010:[[31,31,32,32,31,30,30,29,30,29,30,30],[2,5,1,5,2,5,7,2,3,5,6,1]],
	2011:[[31,32,31,32,31,30,30,30,29,29,30,31],[3,6,3,6,3,6,1,3,5,6,7,2]],
	2012:[[31,31,31,32,31,31,29,30,30,29,30,30],[5,1,4,7,4,7,3,4,6,1,2,4]],
	2013:[[31,31,32,31,31,31,30,29,30,29,30,30],[6,2,5,2,5,1,4,6,7,2,3,5]],
	2014:[[31,31,32,32,31,30,30,29,30,29,30,30],[7,3,6,3,7,3,5,7,1,3,4,6]],
	2015:[[31,32,31,32,31,30,30,30,29,29,30,31],[1,4,1,4,1,4,6,1,3,4,5,7]],
	2016:[[31,31,31,32,31,31,29,30,30,29,30,30],[3,6,2,5,2,5,1,2,4,6,7,2]],
	2017:[[31,31,32,31,31,31,30,29,30,29,30,30],[4,7,3,7,3,6,2,4,5,7,1,3]],
	2018:[[31,32,31,32,31,30,30,29,30,29,30,30],[5,1,5,1,5,1,3,5,6,1,2,4]],
	2019:[[31,32,31,32,31,30,30,30,29,30,29,31],[6,2,6,2,6,2,4,6,1,2,4,5]],
	2020:[[31,31,31,32,31,31,30,29,30,29,30,30],[1,4,7,3,7,3,6,1,2,4,5,7]],
	2021:[[31,31,32,31,31,31,30,29,30,29,30,30],[2,5,1,5,1,4,7,2,3,5,6,1]],
	2022:[[31,32,31,32,31,30,30,30,29,29,30,30],[3,6,3,6,3,6,1,3,5,6,7,2]],
	2023:[[31,32,31,32,31,30,30,30,29,30,29,31],[4,7,4,7,4,7,2,4,6,7,2,3]],
	2024:[[31,31,31,32,31,31,30,29,30,29,30,30],[6,2,5,1,5,1,4,6,7,2,3,5]],
	2025:[[31,31,32,31,31,31,30,29,30,29,30,30],[7,3,6,3,6,2,5,7,1,3,4,6]],
	2026:[[31,32,31,32,31,30,30,30,29,29,30,31],[1,4,1,4,1,4,6,1,3,4,5,7]],
	2027:[[30,32,31,32,31,30,30,30,29,30,29,31],[3,5,2,5,2,5,7,2,4,5,7,1]],
	2028:[[31,31,32,31,31,31,30,29,30,29,30,30],[4,7,3,7,3,6,2,4,5,7,1,3]],
	2029:[[31,31,32,31,32,30,30,29,30,29,30,30],[5,1,4,1,4,1,3,5,6,1,2,4]],
	2030:[[31,32,31,32,31,30,30,30,29,29,30,31],[6,2,6,2,6,2,4,6,1,2,3,5]],
	2031:[[30,32,31,32,31,30,30,30,29,30,29,31],[1,3,7,3,7,3,5,7,2,3,5,6]],
	2032:[[31,31,32,31,31,31,30,29,30,29,30,30],[2,5,1,5,1,4,7,2,3,5,6,1]],
	2033:[[31,31,32,32,31,30,30,29,30,29,30,30],[3,6,2,6,3,6,1,3,4,6,7,2]],
	2034:[[31,32,31,32,31,30,30,30,29,29,30,31],[4,7,4,7,4,7,2,4,6,7,1,3]], 
	2035:[[30,32,31,32,31,31,29,30,30,29,29,31],[6,1,5,1,5,1,4,5,7,2,3,4]],
	2036:[[31,31,32,31,31,31,30,29,30,29,30,30],[7,3,6,3,6,2,5,7,1,3,4,6]],
	2037:[[31,31,32,32,31,30,30,29,30,29,30,30],[1,4,7,4,1,4,6,1,2,4,5,7]],
	2038:[[31,32,31,32,31,30,30,30,29,29,30,31],[2,5,2,5,2,5,7,2,4,5,6,1]],
	2039:[[31,31,31,32,31,31,29,30,30,29,30,30],[4,7,3,6,3,6,2,3,5,7,1,3]],
	2040:[[31,31,32,31,31,31,30,29,30,29,30,30],[5,1,4,1,4,7,3,5,6,1,2,4]],
	2041:[[31,31,32,32,31,30,30,29,30,29,30,30],[6,2,5,2,6,2,4,6,7,2,3,5]],
	2042:[[31,32,31,32,31,30,30,30,29,29,30,31],[7,3,7,3,7,3,5,7,2,3,4,6]],
	2043:[[31,31,31,32,31,31,29,30,30,29,30,30],[2,5,1,4,1,4,7,1,3,5,6,1]],
	2044:[[31,31,32,31,31,31,30,29,30,29,30,30],[3,6,2,6,2,5,1,3,4,6,7,2]],
	2045:[[31,32,31,32,31,30,30,29,30,29,30,30],[4,7,4,7,4,7,2,4,5,7,1,3]],
	2046:[[31,32,31,32,31,30,30,30,29,29,30,31],[5,1,5,1,5,1,3,5,7,1,2,4]],
	2047:[[31,31,31,32,31,31,30,29,30,29,30,30],[7,3,6,2,6,2,5,7,1,3,4,6]],
	2048:[[31,31,32,31,31,31,30,29,30,29,30,30],[1,4,7,4,7,3,6,1,2,4,5,7]],
	2049:[[31,32,31,32,31,30,30,30,29,29,30,30],[2,5,2,5,2,5,7,2,4,5,6,1]],
	2050:[[31,32,31,32,31,30,30,30,29,30,29,31],[3,6,3,6,3,6,1,3,5,6,1,2]],
	2051:[[31,31,31,32,31,31,30,29,30,29,30,30],[5,1,4,7,4,7,3,5,6,1,2,4]],
	2052:[[31,31,32,31,31,31,30,29,30,29,30,30],[6,2,5,2,5,1,4,6,7,2,3,5]],
	2053:[[31,32,31,32,31,30,30,30,29,29,30,30],[7,3,7,3,7,3,5,7,2,3,4,6]],
	2054:[[31,32,31,32,31,30,30,30,29,30,29,31],[1,4,1,4,1,4,6,1,3,4,6,7]],
	2055:[[31,31,32,31,31,31,30,29,30,29,30,30],[3,6,2,6,2,5,1,3,4,6,7,2]],
	2056:[[31,31,32,31,32,30,30,29,30,29,30,30],[4,7,3,7,3,7,2,4,5,7,1,3]],
	2057:[[31,32,31,32,31,30,30,30,29,29,30,31],[5,1,5,1,5,1,3,5,7,1,2,4]],
	2058:[[30,32,31,32,31,30,30,30,29,30,29,31],[7,2,6,2,6,2,4,6,1,2,4,5]],
	2059:[[31,31,32,31,31,31,30,29,30,29,30,30],[1,4,7,4,7,3,6,1,2,4,5,7]],
	2060:[[31,31,32,32,31,30,30,29,30,29,30,30],[2,5,1,5,2,5,7,2,3,5,6,1]],
	2061:[[31,32,31,32,31,30,30,30,29,29,30,31],[3,6,3,6,3,6,1,3,5,6,7,2]],
	2062:[[30,32,31,32,31,31,29,30,29,30,29,31],[5,7,4,7,4,7,3,4,6,7,2,3]],
	2063:[[31,31,32,31,31,31,30,29,30,29,30,30],[6,2,5,2,5,1,4,6,7,2,3,5]],
	2064:[[31,31,32,32,31,30,30,29,30,29,30,30],[7,3,6,3,7,3,5,7,1,3,4,6]],
	2065:[[31,32,31,32,31,30,30,30,29,29,30,31],[1,4,1,4,1,4,6,1,3,4,5,7]],
	2066:[[31,31,31,32,31,31,29,30,30,29,29,31],[3,6,2,5,2,5,1,2,4,6,7,1]],
	2067:[[31,31,32,31,31,31,30,29,30,29,30,30],[4,7,3,7,3,6,2,4,5,7,1,3]],
	2068:[[31,31,32,32,31,30,30,29,30,29,30,30],[5,1,4,1,5,1,3,5,6,1,2,4]],
	2069:[[31,32,31,32,31,30,30,30,29,29,30,31],[6,2,6,2,6,2,4,6,1,2,3,5]],
	2070:[[31,31,31,32,31,31,29,30,30,29,30,30],[1,4,7,3,7,3,6,7,2,4,5,7]],
	2071:[[31,31,32,31,31,31,30,29,30,29,30,30],[2,5,1,5,1,4,7,2,3,5,6,1]],
	2072:[[31,32,31,32,31,30,30,29,30,29,30,30],[3,6,3,6,3,6,1,3,4,6,7,2]],
	2073:[[31,32,31,32,31,30,30,30,29,29,30,31],[4,7,4,7,4,7,2,4,6,7,1,3]],
	2074:[[31,31,31,32,31,31,30,29,30,29,30,30],[6,2,5,1,5,1,4,6,7,2,3,5]],
	2075:[[31,31,32,31,31,31,30,29,30,29,30,30],[7,3,6,3,6,2,5,7,1,3,4,6]],
	2076:[[31,32,31,32,31,30,30,30,29,29,30,30],[1,4,1,4,1,4,6,1,3,4,5,7]],
	2077:[[31,32,31,32,31,30,30,30,29,30,29,31],[2,5,2,5,2,5,7,2,4,5,7,1]],
	2078:[[31,31,31,32,31,31,30,29,30,29,30,30],[4,7,3,6,3,6,2,4,5,7,1,3]],
	2079:[[31,31,32,31,31,31,30,29,30,29,30,30],[5,1,4,1,4,7,3,5,6,1,2,4]],
	2080:[[31,32,31,32,31,30,30,30,29,29,30,30],[6,2,6,2,6,2,4,6,1,2,3,5]],
	2081:[[31,31,32,32,31,30,30,30,29,30,30,30],[7,3,6,3,7,3,5,7,2,3,5,7]],
	2082:[[30,32,31,32,31,30,30,30,29,30,30,30],[2,4,1,4,1,4,6,1,3,4,6,1]],
	2083:[[31,31,32,31,31,30,30,30,29,30,30,30],[3,6,2,6,2,5,7,2,4,5,7,2]],
	2084:[[31,31,32,31,31,30,30,30,29,30,30,30],[4,7,3,7,3,6,1,3,5,6,1,3]],
	2085:[[31,32,31,32,30,31,30,30,29,30,30,30],[5,1,5,1,5,7,3,5,7,1,3,5]],
	2086:[[30,32,31,32,31,30,30,30,29,30,30,30],[7,2,6,2,6,2,4,6,1,2,4,6]],
	2087:[[31,31,32,31,31,31,30,30,29,30,30,30],[1,4,7,4,7,3,6,1,3,4,6,1]],
	2088:[[30,31,32,32,30,31,30,30,29,30,30,30],[3,5,1,5,2,4,7,2,4,5,7,2]],
	2089:[[30,32,31,32,31,30,30,30,29,30,30,30],[4,6,3,6,3,6,1,3,5,6,1,3]],
	2090:[[30,32,31,32,31,30,30,30,29,30,30,30],[5,7,4,7,4,7,2,4,6,7,2,4]],
};

today = new Date();
nepali_today = eng_to_nep(today.getFullYear(), today.getMonth(),today.getDate());

currentDate = nepali_today['date'];
currentMonth = nepali_today['month'] - 1;
currentYear = nepali_today['year'];

function daysInMonth(iMonth, iYear) {
	return nepali_dates[iYear][0][iMonth];
}

function unicodeText(text) {
	var chars = {'0':'०','1':'१','2':'२','3':'३','4':'४','5':'५','6':'६','7':'७','8':'८','9':'९'};
	return text.toString().replace(/[0123456789]/g, m => chars[m]);
}

function englishText(text) {
	var chars = {'०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'};
	return text.toString().replace(/[०१२३४५६७८९]/g, m => chars[m]);
}

$(document).on('click', '.xen-cell', function() {
	$('.xen-cell').removeClass('xen-bg-info');
	$(this).addClass('xen-bg-info');

	var currentDate = englishText($(this).html());
	currentDate = ('0' + currentDate).slice(-2);
	
	var showMonth = currentMonth + 1;
	showMonth = ('0' + showMonth).slice(-2);

	$(this).closest('.xen-card').prev('.xen-calendar').val(currentDate +'/'+ showMonth +'/'+ currentYear);
	// $(".xen-card").hide();
});

(function( $ ){
	$.fn.nepalicalendar = function() {
		for(var i = 0; i< this.length; i++) {
			init($(this[i]));
		}

		return this;
	}; 
})( jQuery );

function init(input) {
	input.addClass('xen-calendar');
	var appendData = '<div class="xen-card"><div class="xen-card-header"><div class="xen-form-wrapper"><button class="xen-btn-prev" id="previous" onclick="previous(this)"><</button><form class="xen-form-inline"><select class="xen-calendar-month" name="month" id="month" onchange="jump(this)"><option value=0>बैशाख</option><option value=1>जेठ</option><option value=2>असार</option><option value=3>श्रावण</option><option value=4>भदौ</option><option value=5>आश्विन</option><option value=6>कार्तिक</option><option value=7>मंसिर</option><option value=8>पुष</option><option value=9>माघ</option><option value=10>फाल्गुन</option><option value=11>चैत्र</option></select><select class="xen-calendar-year" name="year" id="year" onchange="jump(this)">';
	for (var i = 2000; i < 2091; i++) {
		appendData+= '<option value="'+ i +'">'+unicodeText(i)+'</option>';
	}
	appendData+= '</select></form><button class="xen-btn" id="next" onclick="next(this)">></button></div></div><table border="1" class="xen-calendar-table" id="calendar"><thead><tr><th>आइतवार <br /> Sunday</th><th>सोमवार <br /> Monday</th><th>मङ्गलवार <br /> Tuesday</th><th>बुधवार <br /> Wednesday</th><th>बिहिवार <br /> Thursday</th><th>शुक्रवार <br /> Friday</th><th>शनिवार <br /> Saturday</th></tr></thead><tbody class="calendar-body"></tbody></table></div>';
	input.html(appendData);

	showCalendar(input, currentMonth, currentYear);
}

function showCalendar(input, month, year) {
	if(typeof nepali_dates[year] == 'undefined') {
		return false;
	}

	let firstDay = nepali_dates[year][1][month] - 1;

    // body of the calendar
    tbl = input.find('.xen-card').find(".calendar-body")
    // clearing all previous cells
    tbl.html('');

    // filing data about month and in the page via DOM.
    var selectYear = input.find('.xen-card').find('.xen-calendar-year');
	var selectMonth = input.find('.xen-card').find('.xen-calendar-month');

	selectYear.val(year);
    selectMonth.val(month);

	// creating all cells
	tbl.each(function () {
		let date = 1;
		for (let i = 0; i < 6; i++) {
			// creates a table row
			let row = document.createElement("tr");

			//creating individual cells, filing them up with data.
			for (let j = 0; j < 7; j++) {
				if (i === 0 && j < firstDay) {
					cell = document.createElement("td");
					cellText = document.createTextNode("");
					cell.appendChild(cellText);
					row.appendChild(cell);
				}
				else if (date > daysInMonth(month, year)) {
					break;
				}

				else {
					cell = document.createElement("td");
					// if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
					// 	cell.classList.add("bg-info");
					// } 
					if (date === currentDate && year === currentYear && month === currentMonth) {
						cell.classList.add("xen-bg-today");
					} // color today's date

					cell.classList.add("xen-cell");
					var nepaliDate = unicodeText(date);
					var englishDate = nep_to_eng(year, month + 1, date);
					

					var cellNepaliDateText = document.createElement('span');
					cellNepaliDateText.classList.add('nepali-date');
					cellNepaliDateText.innerHTML = nepaliDate;

					var cellEnglishDateText = document.createElement('span');
					cellEnglishDateText.classList.add('english-date');
					cellEnglishDateText.innerHTML = englishDate['date'];
					
					cell.appendChild(cellNepaliDateText);
					cell.appendChild(cellEnglishDateText);
					
					row.appendChild(cell);
					date++;
				}
			}

			this.appendChild(row); // appending each row into calendar body.
		}
	})
}

function next(btn) {
	var card = btn.closest('.xen-card');
	var currentYear = parseInt($(card).find('.xen-calendar-year').val());
	var currentMonth = parseInt($(card).find('.xen-calendar-month').val());
	var input = $(card).parent();
	
	currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;

	showCalendar(input, currentMonth, currentYear);
}

function previous(btn) {
	var card = btn.closest('.xen-card');
	var currentYear = parseInt($(card).find('.xen-calendar-year').val());
	var currentMonth = parseInt($(card).find('.xen-calendar-month').val());
	var input = $(card).parent();

	currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
	currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;

	showCalendar(input, currentMonth, currentYear);
}

function jump(select) {
	var card = select.closest('.xen-card');
	var currentYear = parseInt($(card).find('.xen-calendar-year').val());
	var currentMonth = parseInt($(card).find('.xen-calendar-month').val());
	var input = $(card).parent();

	showCalendar(input, currentMonth, currentYear);
}


//Date converter -----------------------------------------
function is_range_nep($yy, $mm, $dd) {		
	if($yy<2000 || $yy>2089){
		var debug_info="Supported only between 2000-2089";
		return false;
	}
	
	if($mm<1 || $mm >12) {
		var debug_info="Error! value 1-12 only";
		return false;
	}
	
	if($dd<1 || $dd >32){
		var debug_info="Error! value 1-31 only";	
		return false;
	}		
	
	return true;
}

function is_range_eng($yy, $mm, $dd) {
	if($yy<1944 || $yy>2033){
		var debug_info = "Supported only between 1944-2022";
		return false;
	}
		
	if($mm<1 || $mm >12){
		var debug_info = "Error! value 1-12 only";
		return false;
	}
		
	if($dd<1 || $dd >31){
		var debug_info = "Error! value 1-31 only";			
		return false;
	}	
	
	return true;
}

function is_leap_year($year) {
	var $a = $year;
	if ($a%100==0) {
		if($a%400==0) {
			return true;
		} else {
			return false;
		}
	} else { 
		if ($a%4==0) {
			return true;
		} else {
			return false;
		}
	}
}

function nep_to_eng(yy,mm,dd) {
	var def_eyy = 1943; var def_emm = 4; var def_edd = 14-1;		// init english date.
	var def_nyy = 2000; var def_nmm = 1; var def_ndd = 1;		// equivalent nepali date.
	var total_eDays=0; var total_nDays=0; var a=0; var day=4-1;		// initializations...
	var m = 0; var y = 0; var i=0;
	var k = 2000; var numDay = 0;
	
	var month = [0,31,28,31,30,31,30,31,31,30,31,30,31];
	var lmonth = [0,31,29,31,30,31,30,31,31,30,31,30,31];
	
	if(this.is_range_nep(yy, mm, dd) === false) {
		return false;
	} else {
		// count total days in-terms of year
		for(var i=0; i < (yy - def_nyy); i++){	
			for(var j=0; j <= 11; j++){
				total_nDays += nepali_dates[k][0][j];
			}
			k++;
		}
		

		// count total days in-terms of month			
		for(j = 0; j<(mm-1); j++){
			total_nDays += nepali_dates[k][0][j];
		}
		

		// count total days in-terms of dat
		total_nDays += dd;
		
		//calculation of equivalent english date...
		total_eDays = def_edd;
		m = def_emm;
		y = def_eyy;

		while(total_nDays != 0){
			if(this.is_leap_year(y)) {
				a = lmonth[m];
			} else {
				a = month[m];
			}
			total_eDays++;
			day++;
			if(total_eDays > a) {
				m++;
				total_eDays = 1;
				if(m > 12) {
					y++;
					m = 1;
				}
			}
			if(day > 7)
				day = 1;
			total_nDays--;	
		}
		numDay = day;
		
		var eng_date = [];
		eng_date["year"] = y;					
		eng_date["month"] = m;					
		eng_date["date"] = total_eDays;		
		// eng_date["day"] = day;					
		// eng_date["emonth"] = m;  			
		// eng_date["num_day"] = numDay;			
		
		return eng_date;			
	}
}

function eng_to_nep(yy,mm,dd) {
	if (this.is_range_eng(yy, mm, dd) == false){
		return false;
	} else {
		// english month data.
	 	var month = [31,28,31,30,31,30,31,31,30,31,30,31];
	 	var lmonth = [31,29,31,30,31,30,31,31,30,31,30,31];
		
		var def_eyy = 1944;									//spear head english date...
		var def_nyy = 2000; var def_nmm = 9; var def_ndd = 17-1;		//spear head nepali date...
		var total_eDays=0; var total_nDays=0; var a=0; var day=7-1;		//all the initializations...
		var m = 0; var y = 0; var i =0; var j = 0;
		var numDay=0;
		
		// count total no. of days in-terms of year
		for(var i=0; i<(yy-def_eyy); i++){	//total days for month calculation...(english)
			if(is_leap_year(def_eyy+i)==1) {
				for(var j=0; j<12; j++){
					total_eDays += lmonth[j];
				}
			} else {
				for(var j=0; j<12; j++)
					total_eDays += month[j];
			}
		}

		// count total no. of days in-terms of month
		for(var i=0; i<mm; i++){
			if(is_leap_year(yy)==1)
				total_eDays += lmonth[i];
			else
				total_eDays += month[i];
		}

		// count total no. of days in-terms of date
		total_eDays += dd;
		
		i = 2000; j = def_nmm;					
		total_nDays = def_ndd;
		m = def_nmm;
		y = def_nyy;
		
		// count nepali date from array
		while(total_eDays != 0) {
	        a = nepali_dates[i][0][j - 1];
			total_nDays++;						//count the days
			day++;								//count the days interms of 7 days
			if(total_nDays > a){
				m++;
				total_nDays=1;
				j++;
			}
			if(day > 7)
				day = 1;
			if(m > 12){
				y++;
				m = 1;
			}
		    if(j > 12){
				j = 1; i++;
			}
			total_eDays--;
		}
		
		numDay=day;
		
		var nep_date = [];
		nep_date["year"] = y;
		nep_date["month"] = m;
		nep_date["date"] = total_nDays;
		// nep_date["day"] = $this->get_day_of_week($day);
		// nep_date["nmonth"] = $this->get_nepali_month($m);
		// nep_date["num_day"] = $numDay;
		
		return nep_date;
	}
}