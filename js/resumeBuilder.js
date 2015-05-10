var bio = {
  "name" : "Reyes Herrera, Jr",
  "Role" : "Front-End Web Developer",
  "contacts": {
    "mobile" : "415 111 22222",
    "email" : "sjobs@apple.com",
    "github" : "reyesh",
    "twitter": "http://www.twitter.com/reyesh",
    "facebook": "http://www.facebook.com/reyesh",
    "googleplus": "http://plus.google.com/reyesh",
    "linkedin": "http://www.linkedin.com/reyesh",
    "location": "Sunnyvale, CA",
    "youtube": "https://www.youtube.com/user/Reyesh"
  },

  "skills" : [
    "HTML", "CSS" , "Javascript", "JSON", "JQuery"
  ],

  "bioPic": "images/fry.jpg",

  "msg" : [
    "Hi, I'm Reyes. I love coding.",
    "Hola, Me llamo Reyes. Me gusta la programacion" ,
    "Howdy! I'm Reyes, and ready to be part of a team",
    "Hey there, I'm Reyes. I like to solve problems",
    "Hi, I'm Reyes. I have a passsion for coding!"
  ],
  "travels" : [
    "20.656031, -101.794904",
    "Cuerámaro, Mexico",
    "San Luis Potosi, Mexico",
    "Guanajuato, Gto. Mexico",
    "Colorines Rincón de La Bolsa, Álvaro Obregón, 01849 Mexico City, Federal District"
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Self Employeed (Lyft)",
      "title": "Driver",
      "date": "July 2014 - Present",
      "description": "Taking people from point A to point B, acheived a 5 star rating, safe driving, no incidents or traffic violations",
      "location": "San Francisco, CA",
      "bPoints": "<ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li><li>Nam quis justo vitae lorem consectetur bibendum.</li><li>Donec eleifend ipsum vel purus aliquam iaculis.</li><li>Nulla et lectus id erat elementum gravida.</li><li>In egestas lectus ut magna vestibulum, ut efficitur velit mollis.</li><li>Aenean vel enim at turpis placerat viverra sit amet at metus.</li></ul>"

    },
    {

      "employer": "Pear, Inc",
      "title": "Technical Support Engineer",
      "date": "Feb 2004 - Apr 2013",
      "description": "Provide technical support to 50 customers 24/7, Go-to guy for any technical (networking, programming, system administration), set up compnay email system, vpn network",
      "location": "Cupertino, CA",
      "bPoints": "<ul><li>Suspendisse quis orci et mi facilisis auctor vel at dolor.</li><li>Proin vitae libero vel diam aliquet pharetra.</li><li>Sed mattis nisl ut felis porttitor, id mattis est blandit.</li><li>Aenean condimentum risus ac posuere molestie.</li></ul>"
    },
    {

      "employer": "Googol",
      "title": "Front-End Web Developer",
      "date": "Feb 2001 - Apr 2004",
      "description": "Providing complex technical support to 50 customers 24/7",
      "location": "Mountain View, CA",
      "bPoints": "<ul><li>Sed feugiat arcu sed ligula aliquet, quis rutrum orci tristique.</li><li>Vestibulum molestie nibh et velit placerat cursus a at arcu.</li><li>Morbi luctus tellus vitae tellus vestibulum, id ultrices arcu maximus.</li><li>Curabitur in nulla sed mi rutrum pulvinar.</li><li>In cursus diam nec euismod facilisis.</li></ul>"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "P1: Build a Portfolio Site",
      "dates": "March 2014",
      "description": "Homepage of all my web development projects",
      "image": "http://placehold.it/197x148"
    },
    {
      "title": "P2: Interactive Resume",
      "dates": "March 2014",
      "description": "resume using JavaScript, jQuery, JSON",
      "image": "http://placehold.it/197x148"
    },
    {
      "title": "P3: Classic Arcade Game Clone",
      "dates": "March 2014",
      "description": "With a game engine, and the visual assets I had to recreate the classic game Frogger",
      "image": "http://placehold.it/197x148"
    }
  ]
}


var education = {
    "schools": [
        {
            "name": "Fresno State University",
            "location": "Fresno, CA, US",
            "degree": "BA",
            "date": "July 1998 - May 2003",
            "major": "Graphic Design",
            "minor": "Computer Science",
            "highlight": "Web Languages, Data Structures"
        },
        {
            "name": "O'Reily School of Technology",
            "location": "http://www.oreillyschool.com",
            "degree": "Certification",
            "date": "Jan 2013 - Nov 2013",
            "major": "Database Administration",
            "minor": "Linux Administration",
            "highlight": "Set up Mondrian OLAP server on home server"
        },
        {
            "name": "Udacity",
            "location": "http://www.udacity.com",
            "degree": "nanodegree",
            "date": "March 2014 - Present",
            "major": "Front End Web Developer",
            "minor": "",
            "highlight": "Went beyond project requirments"
        }
    ]
}


work.display = function () {

  for (i in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
    formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
    formattedDate = HTMLworkDates.replace("%data%", this.jobs[i].date);
    formattedDes = HTMLworkDescription.replace("%data%", this.jobs[i].description);
    formattedWork = formattedEmployer + formattedTitle + formattedDate + formattedDes + this.jobs[i].bPoints;
    $(".work-entry:last").append(formattedWork);
  }
}

projects.display = function (){


  for (i in this.projects) {
    $("#projects").append(HTMLprojectStart);

    formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
    formattedDate = HTMLprojectDates.replace("%data%", this.projects[i].dates);
    formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
    formattedImage = HTMLprojectImage.replace("%data%", this.projects[i].image);

    formattedProject = formattedTitle + formattedDate + formattedDescription + formattedImage;
    $(".project-entry:last").append(formattedProject);
  }

}

education.display = function () {


  for(i in this.schools){
    $("#education").append(HTMLschoolStart);
    console.log(this.schools[i].name);
    formattedName = HTMLschoolName.replace("%data%", this.schools[i].name);
    formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
    formattedDates = HTMLschoolDates.replace("%data%", this.schools[i].date);
    formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
    formattedMaj = HTMLschoolMajor.replace("%data%", this.schools[i].major);
    formattedMin = HTMLschoolMinor.replace("%data%", this.schools[i].minor);
//    formattedHlight = HTMLhighlight.replace("%data%",this.schools[i].highlight)
    formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMaj + formattedMin;
    console.log(formattedSchool);
    $(".education-entry:last").append(formattedSchool);
  }
}

work.display();
projects.display();
education.display();
