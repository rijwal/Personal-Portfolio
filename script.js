// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation (if needed for future contact section)
document.querySelector('form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return;
    }

    alert('Message sent successfully!');
    this.reset();
});
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: "Academia Pro: Full-Stack Application",
            description: "Academia Pro is a full-stack web application created for the FBLA-CNLC Programming Demonstration. The prompt was to develop an app that helps teachers better track student participation while encouraging students to engage in school events. The web application was built using the MERN stack, which includes Mongoose, Express, ReactJS, and NodeJS. To ensure secure user authentication, the application incorporates multiple security measures such as JSON Web Tokens, Redux Toolkit, and several middleware programs.",
            image: "assets/images/project1.jpg"
        },
        {
            title: "Alpha Racer: Game",
            description: "Alpha Racer is a Car-Racing Game which implements python's pygame. The user is greeted with an introductory screen and begins the race shortly thereafter. The car starts at the beginning of the track and the user must make it past obstacles and a curved track to get to reach the finish line as fast as possible. The user is timed and the time is recorded and presented at the end of the game. Elements such as collision detection 2-D directional movements are present in this project. This was my introduction to object-oriented programming as I worked my way through concepts such as class structures, inheritance, and polymorphism. I expanded my previously built skils with syntax and data structures.",
            video: "car.mp4"
        },
        {
            title: "Youreka: Research Initiative",
            description: "Youreka is a national research initiative in which 70+ teams participated wherein students were tasked to conduct research on mental health. My project interpreted datasets and utilized statistical tests on mice datasets provided by the University of Iowa, using R, to determine correlations between the effects of prenatal stress and an offspring's immune system. Through this project I gained proficiency in basic statistical concepts, including p-values, hypothesis testing, t-tests, and ANOVAs Received compensation for the strength of the project and published in the Canadian Youth Science Journal.",
            image: "manuscript.png"
        }
        // Add more projects as needed
    ];

    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        if (project.image) {
            const projectImage = document.createElement('img');
            projectImage.src = project.image;
            projectImage.alt = project.title;
            projectItem.appendChild(projectImage);
        }

        if (project.video) {
            const projectVideo = document.createElement('video');
            projectVideo.controls = true;
            projectVideo.innerHTML = `<source src="${project.video}" type="video/mp4">`;
            projectItem.appendChild(projectVideo);
        }

        const projectDetails = document.createElement('div');
        projectDetails.className = 'project-details';

        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;

        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);

        projectItem.appendChild(projectDetails);

        projectsList.appendChild(projectItem);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const achievements = [
        {
            title: "Youreka Research Initiative ",
            description: "First place in a national research initiative in which 70+ teams participated. Project interpreted datasets, and utilized statistical tests to determine correlations between the effects of prenatal stress and an offspring's immune system. Received compensation for the strength of the project and projected to be published in the Canadian Young Science Journal.",
            image: "youreka.png"
        },
        {
            title: "Math Tutor at Mathnasium",
            description: "Assisting students ranging from Grades 2 - 12 on mathematical problems. Aspiring to develop students' analytical and interpretation skills in pursuit of success in Math. Activities include marking work and helping students with questions prescribed to their needs.",
            image: "mathnasium.png"
        },

        {
            title: "Robotics: Member of FRC Team #4421 ",
            description: " Introduced to Robotics at Team 4421. Was on the Drive Team for Team 4421, working on the mechanical and electrical components of the robot. Here, I learnt a lot about mechanics and circuitry which I utilized later in my Robotics career. With Team 4421, I competed at Regional Events in Victoria and Las Vegas.",
            image: "FRCteam.png"
        },

        {
            title: "Robotics: Co-founder of FTC Team #24226 gang ",
            description: "On Team 24226, I am the co-founder of our school's robotics team which prioritized the development of a successful team whilst remaining inclusive and cost-friendly so students have greater access and opportunity to Robotics. After an unsuccessful start, our team worked even harder, spending hours every night to work on components of our robot. My team ended up qualifying to the Alberta Championship event (provincials), after finishing first place as alliance captains in the regional event,despite being a rookie team with limited resources. This was credited to the amount of hardwork myself and other members of the team put into our robot.",
            image: "FTCrobot.png"
        },
        
        // Add more achievements as needed
    ];

    const achievementsList = document.getElementById('achievements-list');

    achievements.forEach(achievement => {
        const item = document.createElement('div');
        item.className = 'achievement-item';

        const img = document.createElement('img');
        img.src = achievement.image;
        img.alt = achievement.title;
        img.className = 'achievement-image';

        const content = document.createElement('div');
        content.className = 'achievement-content';

        const title = document.createElement('h3');
        title.textContent = achievement.title;

        const description = document.createElement('p');
        description.textContent = achievement.description;

        content.appendChild(title);
        content.appendChild(description);

        item.appendChild(img);
        item.appendChild(content);

        achievementsList.appendChild(item);
    });

    const projects = [
        {
            title: "Project Title 1",
            description: "Brief description of the project. Highlight key features and technologies used.",
            image: "assets/images/project1.jpg"
        },
        {
            title: "Project Title 2",
            description: "Brief description of the project. Highlight key features and technologies used.",
            image: "assets/images/project2.jpg"
        },
        {
            title: "Project Title 3",
            description: "Brief description of the project. Highlight key features and technologies used.",
            image: "assets/images/project3.jpg"
        }
        // Add more projects as needed
    ];

    const projectsList = document.getElementById('projects-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        const projectImage = document.createElement('img');
        projectImage.src = project.image;
        projectImage.alt = project.title;

        const projectDetails = document.createElement('div');
        projectDetails.className = 'project-details';

        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-title';
        projectTitle.textContent = project.title;

        const projectDescription = document.createElement('p');
        projectDescription.className = 'project-description';
        projectDescription.textContent = project.description;

        projectDetails.appendChild(projectTitle);
        projectDetails.appendChild(projectDescription);

        projectItem.appendChild(projectImage);
        projectItem.appendChild(projectDetails);

        projectsList.appendChild(projectItem);
    });

});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Replace with your actual EmailJS user ID, service ID, and template ID
    const serviceID = 'service_lyane84';
    const templateID = 'template_hcfqzlv';
    const userID = 'hiW7yVWCEX2GWUOC3';

    emailjs.init(userID);

    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(response => {
            document.getElementById('response').textContent = 'Message sent successfully!';
        })
        .catch(error => {
            document.getElementById('response').textContent = 'Failed to send message. Please try again later.';
        });
});