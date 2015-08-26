/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
/* var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span> <span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span> <span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span> <span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span> <span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span> <span class="white-text">%data%</span></li>';
*/
var HTMLmobile = '<li class="flex-item"><a href="tel:%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-phone"></i></a></li>';
var HTMLemail = '<li class="flex-item"><a href="mailto:%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-envelope"></i></a></li>';
var HTMLtwitter = '<li class="flex-item"><a href="https://twitter.com/%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-twitter"></i></a></li>';
var HTMLgithub = '<li class="flex-item"><a href="https://github.com/%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-github-alt"></i></a></li>';
var HTMLlocation = '<li class="flex-item"><a href="https://www.google.com/maps/place/%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-location-arrow"></i></a></li>';


var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance <span class="badge">%data2%</span></h3><ul id="skills" class="flex-box list-inline">%data%</ul>';
var HTMLskills = '<li class="flex-item-sk"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a><br>';
var HTMLworkDates = '<div class="date-text pull-left">%data%</div>';
var HTMLworkLocation = '<div class="location-text pull-right">%data%</div><br>';
var HTMLworkDescription = '<p class="pspace">%data%</p>';

var HTMLprojectStart = '<div class="col-sm-6 col-md-4 project-entry"></div>';
var HTMLprojectTitle = '<a href="%data2%">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img data-toggle="modal" data-target="%data2%" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a><br>';
var HTMLschoolDates = '<div class="date-text pull-left">%data%</div>';
var HTMLschoolLocation = '<div class="location-text pull-right">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var HTMLschoolMinor = '<em><br>Minor: %data%</em>';
var HTMLschoolhighlight = '<div>Note: %data%</div>';

var HTMLactivitiesStart = '<div class="activities-entry"></div>';
var HTMLactivitiesTitle = '<div class="pull-left"><a href ="%data3%">%data%</a> - %data2%</div>';
var HTMLactivitiesDates = '<div class="date-text pull-right">%data%</div><br>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

// %data% id="myp1"
// %data2% aria-labelledby="myModalLabel1"
// %data3% src="http://image.png"
// %data4% <p>
// %data5% title

var HTMLmodalTemp = '<div class="modal fade" id="%data%" tabindex="-1" role="dialog" aria-labelledby="%data2%" aria-hidden="true">\
    <div class="modal-dialog">\
      <div class="modal-content">\
        <div class="modal-header">\
          <h4 class="modal-title" id="%data2%">%data5%</h4>\
        </div>\
        <div class="modal-body">\
  		<div class="text-center">\
  			<img class="img-thumbnail img-responsive" src="%data3%" alt="project 1 image">\
  		</div>\
  			<p>%data4%</p>\
        </div>\
        <div class="modal-footer">\
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
        </div>\
      </div>\
    </div>\
  </div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});
