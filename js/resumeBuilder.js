/*
var formattedName = HTMLheaderName.replace("%data%", "Rich Cook");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedName).append(formattedRole);
*/
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
    "title": "",
    "dates": "",
    "description": "",
    "images": []
  }
  ]
};
var bio = {
  "name": "Richard Cook",
  "role": "Front End Developer",
  "welcomeMessage": "Hello, I like to eat ice cream.",
  "skills": ["JavaScript", "HTML 5", "CSS 3", "python", "Drupal"],
  "contacts": {
    "mobile": "925-784-3077",
    "email": "wealthychef@gmail.com",
    "github": "wealthychef1",
    "twitter": "wealthychef",
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
  ]
};


/*console.log('checking skills')*/

if (bio.skills.length !== 0) {
  /*console.log("skills is true")*/
  $('#header').append(HTMLskillsStart);
  /*console.log("loop");*/
  for (skill in bio.skills) {
    /*console.log("skill is "+_skill);*/
    $('#skills').append(HTMLskills.replace("%data%", bio.skills[skill]));
  }
}

if (work.jobs.length !== 0) {
  console.log("jobs");
  for (j in work.jobs) {
    var job = work.jobs[j];
    console.log("appending "+job);
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(HTMLworkEmployer.replace("%data%", job.employer));
    $('.work-entry:last').append(HTMLworkTitle.replace("%data%", job.title));

  }
}

