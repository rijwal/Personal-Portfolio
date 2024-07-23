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
});