const jobs = [
    {
        id: 1,
        title: "Solar Installation Technician",
        type: "Full-time",
        category: "technical",
        location: "Accra, Ghana",
        salary: "GHS 2,500 - 4,000",
        description: "We're looking for experienced solar installation technicians to join our growing team. You'll be responsible for installing residential and commercial solar panel systems.",
        requirements: ["2+ years experience in solar installation", "Valid driver's license", "Electrical certification preferred", "Ability to work at heights"],
        responsibilities: ["Install solar panels and mounting systems", "Connect electrical components", "Conduct system testing", "Provide customer training"]
    },
    {
        id: 2,
        title: "Sales Representative",
        type: "Full-time",
        category: "sales",
        location: "Taifa, Greater Accra",
        salary: "GHS 2,000 + Commission",
        description: "Join our sales team and help homeowners transition to clean energy. Great commission structure and growth opportunities.",
        requirements: ["1+ years in sales", "Excellent communication skills", "Self-motivated", "Valid driver's license"],
        responsibilities: ["Generate leads and close sales", "Conduct site assessments", "Present financing options", "Meet monthly sales targets"]
    },
    {
        id: 3,
        title: "Project Manager",
        type: "Full-time",
        category: "technical",
        location: "Accra, Ghana",
        salary: "GHS 5,000 - 7,000",
        description: "Oversee solar installation projects from start to finish. Ensure timely completion and customer satisfaction.",
        requirements: ["3+ years project management experience", "Solar industry experience preferred", "Strong organizational skills", "PMP certification a plus"],
        responsibilities: ["Manage installation schedules", "Coordinate with teams", "Ensure quality standards", "Client communication"]
    },
    {
        id: 4,
        title: "Customer Service Officer",
        type: "Full-time",
        category: "admin",
        location: "Taifa, Greater Accra",
        salary: "GHS 1,800 - 2,500",
        description: "Be the voice of ENERCO. Handle customer inquiries, schedule appointments, and ensure excellent service.",
        requirements: ["High school diploma", "Excellent communication", "Computer literate", "Customer service experience"],
        responsibilities: ["Answer customer calls and emails", "Schedule installations", "Process applications", "Resolve customer issues"]
    },
    {
        id: 5,
        title: "Electrical Engineer",
        type: "Full-time",
        category: "technical",
        location: "Accra, Ghana",
        salary: "GHS 6,000 - 9,000",
        description: "Design and optimize solar energy systems for residential and commercial clients. Work with cutting-edge renewable energy technology.",
        requirements: ["Bachelor's in Electrical Engineering", "3+ years experience", "Knowledge of solar PV systems", "AutoCAD proficiency"],
        responsibilities: ["Design solar systems", "Conduct energy audits", "Review installations", "Provide technical support"]
    },
    {
        id: 6,
        title: "Marketing Coordinator",
        type: "Contract",
        category: "admin",
        location: "Remote/Accra",
        salary: "GHS 2,500 - 3,500",
        description: "Drive awareness and lead generation through digital marketing campaigns. Help us reach more customers and grow our brand.",
        requirements: ["Marketing degree or equivalent", "Social media expertise", "Content creation skills", "2+ years experience"],
        responsibilities: ["Manage social media", "Create marketing content", "Run ad campaigns", "Track analytics"]
    }
];

let currentFilter = 'all';
let selectedJob = null;

function renderJobs(filter = 'all') {
    const container = document.getElementById('jobListings');
    const filteredJobs = filter === 'all' ? jobs : jobs.filter(job => job.category === filter);
    
    container.innerHTML = filteredJobs.map(job => `
        <div class="job-card" onclick="showJobDetails(${job.id})">
            <div class="job-header">
                <div>
                    <h3 class="job-title">${job.title}</h3>
                    <span class="job-type">${job.type}</span>
                </div>
            </div>
            <p style="color:#6b7280; margin:1rem 0;">${job.description.substring(0, 120)}...</p>
            <div class="job-meta">
                <span>📍 ${job.location}</span>
                <span>💰 ${job.salary}</span>
            </div>
        </div>
    `).join('');
}

function filterJobs(category) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderJobs(category);
}

function showJobDetails(jobId) {
    selectedJob = jobs.find(job => job.id === jobId);
    const modal = document.getElementById('jobModal');
    const content = document.getElementById('modalJobDetails');
    
    content.innerHTML = `
        <h2>${selectedJob.title}</h2>
        <div style="margin:1rem 0;">
            <span class="job-type">${selectedJob.type}</span>
        </div>
        <div class="job-meta" style="margin:1.5rem 0;">
            <span>📍 ${selectedJob.location}</span>
            <span>💰 ${selectedJob.salary}</span>
        </div>
        <h3 style="margin-top:2rem;">Job Description</h3>
        <p style="margin:1rem 0; line-height:1.8;">${selectedJob.description}</p>
        
        <h3 style="margin-top:2rem;">Requirements</h3>
        <ul style="margin:1rem 0; padding-left:2rem; line-height:1.8;">
            ${selectedJob.requirements.map(req => `<li>${req}</li>`).join('')}
        </ul>
        
        <h3 style="margin-top:2rem;">Responsibilities</h3>
        <ul style="margin:1rem 0; padding-left:2rem; line-height:1.8;">
            ${selectedJob.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
        </ul>
        
        <button class="btn btn-primary" style="width:100%; margin-top:2rem;" onclick="showApplicationForm()">
            Apply for this Position
        </button>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('jobModal').classList.remove('active');
}

function showApplicationForm() {
    closeModal();
    document.getElementById('applicationModal').classList.add('active');
}

function closeApplicationModal() {
    document.getElementById('applicationModal').classList.remove('active');
}

function handleApplicationSubmit(e) {
    e.preventDefault();
    alert('Thank you for your application! We will review it and get back to you soon.');
    closeApplicationModal();
    e.target.reset();
}

function handleContactSubmit(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
    e.target.reset();
}

function showSection(section) {
    document.querySelectorAll('.content-section').forEach(sec => sec.style.display = 'none');
    document.getElementById(section).style.display = 'block';
    window.scrollTo({top: 0, behavior: 'smooth'});
}

// Initialize jobs on page load
renderJobs();