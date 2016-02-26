/*
var formattedName = HTMLheaderName.replace("%data%", "Rich Cook");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").append(formattedName).append(formattedRole);
*/
var work = {
  "jobs": [
  {
    "employer": "",
    "title": "",
    "location": "",
    "startDate": 1900,
    "endDate": 2000,
    "description": ""
  }
  ]
};
var projects = {
  "projects": [
  {
    "title": "",
    "startDate": 1900,
    "endDate": 2000,
    "description": "",
    "images": []
  }
  ]
};
var bio = {
  "name": "Richard Cook",
  "role": "Front End Developer",
  "welcomeMessage": "Hello, I like to eat ice cream.",
  "skills": ["skill1", "skill2"],
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
    "name": "Santa Rosa Junion College",
    "city": "Santa Rosa, CA, US",
    "degree": "AS",
    "major": ["Chemistry"],
    "graduation": 1982
  },
  {
    "name": "UC Davis",
    "city": "Davis, CA, US",
    "degree": "BS",
    "major": ["Chemical Engineering"],
    "graduation": 1986
  },
  {
    "name": "UC Davis",
    "city": "Davis, CA, US",
    "degree": "MS",
    "major": ["Computer Science and Engineering"],
    "graduation": 1990
  }
  ],
  "onlineCourses": [
  {
    "title": "",
    "school": "",
    "startDate": 1900,
    "endDate": 2000,
    "url": ""
  }
  ]
};


/*console.log('checking skills')*/

if (bio.skills.length !== 0) {
  /*console.log("skills is true")*/
  $('#header').append(HTMLskillsStart);
  /*console.log("loop");*/
  for (skill in bio.skills) {
    var _skill = bio.skills[skill];
    /*console.log("skill is "+_skill);*/
    $('#skills').append(HTMLskills.replace("%data%", _skill));
  }

}

