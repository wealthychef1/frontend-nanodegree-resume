var work = {
  "jobs": [
  {
    "employer": "Lawrence Livermore National Laboratory",
    "title": "Computer Scientist",
    "location": "Livermore, CA",
    "dates": "June 2001 - Present",
    "description": "Known as 'The Graphics Guy' for the Livermore Computing Center.  This loosely defined and self-directed position consisted of multiple roles, including scientific visualization, software engineering, and software support.  Worked closely with scientists to create scientific visualizations for publication and communication. Wrote software for movie playing, data conversion, software testing, and more.  Installed, maintained and supported 30 software packages installed on our clusters."
  },
  {
    "employer": "Chevron Research and Technology Center",
    "title": "Chemical Engineer",
    "location": "Richmond, CA",
    "dates": "Aug 1996 - Aug 1998",
    "description": "Designed, analyzed and troubleshot oil refinery systems and components."
  }
  ]
};
var projects = {
  "projects": [
  {
    "title": "Udacity Personal Portfolio Project 1",
    "dates": "2016 Feb",
    "description": "Created a personal portfolio page using responsive design",
    "images": ["images/portfolio-screenshot.jpg"]
  }
  ],
  "display": function() {
    for (proj in projects.projects) {
      var theProject = projects.projects[proj];
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(
        HTMLprojectTitle.replace("%data%", theProject.title) +
        HTMLprojectDates.replace("%data%", theProject.dates) +
        HTMLprojectDescription.replace("%data%", theProject.description)
        );
      for (img in theProject["images"]) {
        $(".project-entry:last").append(
          HTMLprojectImage.replace("%data%", theProject.images[img])
          );
      }
    }
  }

};
projects.display();

var bio = {
  "name": "Richard Cook",
  "role": "Front End Developer",
  "welcomeMessage": "Hello recruiter or hiring manager!  If you are hiring for a position where an outgoing personality, good communication skills, an imaginative approach, and a solid computer science background would be valuable, I hope you will consider me.",
  "skills": ["JavaScript", "HTML 5", "CSS 3", "python", "Drupal", "Scientific Visualization"],
  "picture": "images/IMG_7621.jpg",
  "contacts": {
    "mobile": "925-784-3077",
    "email": "wealthychef@gmail.com",
    "github": "wealthychef1",
    "twitter": "@wealthychef",
    "location": "Livermore, CA, USA"
  }
};
var education = {
  "schools": [
  {
    "name": "Santa Rosa Junior College",
    "location": "Santa Rosa, CA, US",
    "degree": "AS",
    "majors": ["Chemistry"],
    "date": 1982,
    "url": "http://www.santarosa.edu"
  },
  {
    "name": "UC Davis",
    "location": "Davis, CA, US",
    "degree": "BS",
    "majors": ["Chemical Engineering"],
    "date": 1986,
    "url": "http://www.ucdavis.edu"
  },
  {
    "name": "UC Davis",
    "location": "Davis, CA, US",
    "degree": "MS",
    "majors": ["Computer Science and Engineering"],
    "date": 1990,
    "url": "http://www.ucdavis.edu"
  }
  ],
  "onlineCourses": [
  {
    "title": "Front End Web Developer Nanodegree",
    "school": "Udacity",
    "date": "2016",
    "url": "https://www.udacity.com/nanodegrees/nd001"
  }
  ],
  "display": function () {
    for (school in education.schools) {
      var theSchool = education.schools[school];
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", theSchool.name).replace("#",theSchool.url));
      $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", theSchool.degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", theSchool.date));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", theSchool.location));
      for (major in theSchool.majors) {

        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", theSchool.majors[major]));
      }
    }
  }
};
education.display();


$("title").html(bio.name + "'s Resume")
$("#header").prepend(HTMLheaderName.replace("%data%", bio.name)
  + HTMLheaderRole.replace("%data%", bio.role));
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
/*console.log('checking skills')*/
$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
if (bio.skills.length !== 0) {
  /*console.log("skills is true")*/
  $('#header').append(HTMLskillsStart);
  /*console.log("loop");*/
  for (skill in bio.skills) {
    /*console.log("skill is "+_skill);*/
    $('#skills').append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
}

function displayWork() {
  if (work.jobs.length !== 0) {
    console.log("jobs");
    for (j in work.jobs) {
      var job = work.jobs[j];
      console.log("appending "+job);
      $('#workExperience').append(HTMLworkStart);
      $('.work-entry:last').append(
        HTMLworkEmployer.replace("%data%", job.employer) +
        HTMLworkTitle.replace("%data%", job.title) +
        HTMLworkDates.replace("%data%", job.dates) +
        HTMLworkLocation.replace("%data%", job.location) +
        HTMLworkDescription.replace("%data%", job.description));

    }
  }
}
displayWork();

$('#main').append(internationalizeButton);

function inName() {
  var names = bio.name.split(" ");
  names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
  names[1] = names[1].toUpperCase();
  var newname = names.join(" ");
  console.log("inName converted " + bio.name + " to " + newname);
  return newname;
}

$("#mapDiv").append(googleMap);

/* Stuff from Lesson 2, flow control
function locationizer(work_obj) {
  var locations = [];
  for (wo in work_obj) {
    locations.push(work_obj[wo].location);
  }
  return locations;
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
  // your code goes here
});
*/