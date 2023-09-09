$(document).ready(function() {
    var url = new URL(location.href);
    var publisher = url.searchParams.get('pub');
  if (publisher) {
    var publishers = { 
	
        '322DL0017': {
            'phone': '9310828522',
            'btn': '#myBtn'
        },
        '322PB0012': {
            'phone': '7070700864',
            'btn': '#myBtn'
        },
        '322UP0014': {
            'phone': '9971666477',
            'btn': '#myBtn'
        },
        '322UP0026': {
            'phone': '8750758660',
            'btn': '#myBtn'
        },
        '322UP0027': {
            'phone': '8920763949',
            'btn': '#myBtn'
        },
        '322DL0034': {
            'phone': '8368664411',
            'btn': '#myBtn'
        },
        '322DL0042': {
            'phone': '8287156610',
            'btn': '#myBtn'
        },
        '322UP0045': {
            'phone': '8750800814',
            'btn': '#myBtn'
        },
        '322HR0046': {
            'phone': '9899248089',
            'btn': '#myBtn'
        },
        '323RJ0052': {
            'phone': '8290977727',
            'btn': '#myBtn'
        },
        '323UP0053': {
            'phone': '8860065767',
            'btn': '#myBtn'
        },
        '323DL0054': {
            'phone': '9810102541',
            'btn': '#myBtn'
        },
        '322DL0028': {
            'phone': '7835001671',
            'btn': '#myBtn'
        },
        '322DL0038': {
            'phone': '8595465548',
            'btn': '#myBtn'
        },
        '322HR0040': {
            'phone': '9120428689',
            'btn': '#myBtn'
        },
        '322UP0047': {
            'phone': '9999573316',
            'btn': '#myBtn'
        },
        '323HR0060': {
            'phone': '8745002002',
            'btn': '#myBtn'
        } 
		
		
    };

    var defaultPublisher = {
        'phone': '01824520001',
        'btn': '#myBtn'
    };

    var publisherData = publishers[publisher] || defaultPublisher;

    var phone = publisherData.phone;
    var btn = publisherData.btn;

    $('.cell-number').attr("href", `tel:${phone}`).html(phone);
    $(btn).hide();
  }
  else {
        // Show the button if 'pub' parameter does not exist
        $('btn').show();
    }
});

$(document).ready(function() {
	//alert(window.location.href);
// Check if the current URL matches the desired URL
if (window.location.href.includes('pmax.php')) {
  // Find the <a> tag element by its ID
  $('#myBtn').hide();
  
   
 // $('#myBtn').hide();
  //var link = document.getElementById('btn');

  // Check if the <a> tag element exists
  //if (link) {
    // Hide the <a> tag by changing its style
    // link.style.display = 'none';
  // }
}

});
