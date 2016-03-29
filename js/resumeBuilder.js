// WORK EXPERIENCE -------------------------------------------------------------
var work = {
    "jobs": [{
        "employer": "Lawrence Livermore National Laboratory",
        "title": "Computer Scientist",
        "location": "Livermore, CA",
        "dates": "June 2001 - Present",
        "description": "Known as 'The Graphics Guy' for the Livermore Computing Center.  This loosely defined and self-directed position consisted of multiple roles, including scientific visualization, software engineering, and software support.  Worked closely with scientists to create scientific visualizations for publication and communication. Wrote software for movie playing, data conversion, software testing, and more.  Installed, maintained and supported 30 software packages installed on our clusters."
    }, {
        "employer": "Chevron Research and Technology Center",
        "title": "Chemical Engineer",
        "location": "Richmond, CA",
        "dates": "Aug 1996 - Aug 1998",
        "description": "Designed, analyzed and troubleshot oil refinery systems and components."
    }],
    "display": function() {
        $.each(work.jobs, function(index, job) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(
                HTMLworkEmployer.replace("%data%", job.employer) +
                HTMLworkTitle.replace("%data%", job.title) +
                HTMLworkDates.replace("%data%", job.dates) +
                HTMLworkLocation.replace("%data%", job.location) +
                HTMLworkDescription.replace("%data%", job.description));

        });
    }

};

work.display();

// PROJECTS -------------------------------------------------------------
var projects = {
    "projects": [{
        "title": "Udacity Personal Portfolio Project 1",
        "dates": "2016 Feb",
        "description": "Created a personal portfolio page using responsive design",
        "images": ["images/portfolio-screenshot.jpg"]
    }],
    "display": function() {
        $.each(projects.projects, function(q, theProject) {
            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(
                HTMLprojectTitle.replace("%data%", theProject.title) +
                HTMLprojectDates.replace("%data%", theProject.dates) +
                HTMLprojectDescription.replace("%data%", theProject.description)
            );
            $.each(theProject.images, function(jdex, img) {
                $(".project-entry:last").append(
                    HTMLprojectImage.replace("%data%", img)
                );
            });
        });
    }

};
projects.display();

// BIOGRAPHICAL -------------------------------------------------------------
var bio = {
    "name": "Richard Cook",
    "role": "Front End Developer",
    "welcomeMessage": "A solid computer science background, an outgoing personality, good communication skills, and an imaginative approach to work.",
    "skills": ["JavaScript", "HTML 5", "CSS 3", "python", "Drupal", "Scientific Visualization"],
    "picture": "images/IMG_7621.jpg",
    "contacts": {
        "mobile": "925-784-3077",
        "email": "wealthychef@gmail.com",
        "github": "wealthychef1",
        "twitter": "@wealthychef",
        "location": "Livermore, CA, USA"
    },
    "display": function() {

        $("title").html(bio.name + "'s Resume");
        $("#header").prepend(HTMLheaderName.replace("%data%", bio.name) + HTMLheaderRole.replace("%data%", bio.role));
        $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
        $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
        $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
        $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
        $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
        $('#footerContacts').html($('#topContacts').html());
        /*console.log('checking skills')*/
        $("#header").append(HTMLbioPic.replace("%data%", bio.picture));
        $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
        if (bio.skills.length !== 0) {
            /*console.log("skills is true")*/
            $('#header').append(HTMLskillsStart);
            /*console.log("loop");*/
            $.each(bio.skills, function(index, skill) {
                /*console.log("skill is "+_skill);*/
                $('#skills').append(HTMLskills.replace("%data%", skill));
            });
        }
    }

};
bio.display();

// EDUCATION -------------------------------------------------------------
var education = {
    "schools": [{
        "name": "Santa Rosa Junior College",
        "location": "Santa Rosa, CA, US",
        "degree": "AS",
        "majors": ["Chemistry"],
        "date": 1982,
        "url": "http://www.santarosa.edu"
    }, {
        "name": "UC Davis",
        "location": "Davis, CA, US",
        "degree": "BS",
        "majors": ["Chemical Engineering"],
        "date": 1986,
        "url": "http://www.ucdavis.edu"
    }, {
        "name": "UC Davis",
        "location": "Davis, CA, US",
        "degree": "MS",
        "majors": ["Computer Science and Engineering"],
        "date": 1990,
        "url": "http://www.ucdavis.edu"
    }],
    "onlineCourses": [{
        "title": "Front End Web Developer Nanodegree",
        "school": "Udacity",
        "date": "2016",
        "url": "https://www.udacity.com/nanodegrees/nd001"
    }],
    "display": function() {
            $.each(education.schools, function(index, theSchool) {
                $("#education").append(HTMLschoolStart);
                $(".education-entry:last").append(HTMLschoolName.replace("%data%", theSchool.name) + HTMLschoolDegree.replace("%data%", theSchool.degree));
                $(".education-entry:last").append(HTMLschoolDates.replace("%data%", theSchool.date));
                $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", theSchool.location));
                $.each(theSchool.majors, function(index, major) {

                    $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", major));
                });
            }); // end iteration through schools

            if (education.onlineCourses.length !== 0) {
                $("#education").append(HTMLonlineClasses);
            }

            $.each(education.onlineCourses, function(index, theCourse) {
                $("#education").append(HTMLschoolStart);

                $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", theCourse.title).replace("#", theCourse.url) + HTMLonlineSchool.replace("%data%", theCourse.school));
                $(".education-entry:last").append(HTMLonlineDates.replace("%data%", theCourse.date));
            }); // end iteration through online courses
        } // end "display" function

};
education.display();

$('#main').append(internationalizeButton); /* I'm not sure if this is supposed to be here for credit, so I left it in, but it's ugly and dumb */

$('.anchor-shift').each(function(index) {
    $(this).before("<div id='" + this.id + "Shifter' class='shifter'></div>");
});

$("#mapDiv").append(googleMap);

$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
    // your code goes here
});