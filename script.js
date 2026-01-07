document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            renderHero(data);
            renderExpertise(data.expertise);
            renderSolutions(data.solutions);
            renderSuccess(data.successStories);
        });
});

function renderHero(data) {
    document.getElementById('brand-name').innerText = data.brand;
    document.getElementById('tagline').innerText = data.tagline;
}

function renderExpertise(exp) {
    const container = document.getElementById('expertise-list');
    container.innerHTML = `
        <p>${exp.summary}</p>
        <h3>Certifications</h3>
        <ul class="cert-list">${exp.certifications.map(c => `<li>${c}</li>`).join('')}</ul>
    `;
}

function renderSolutions(solutions) {
    const grid = document.getElementById('solutions-grid');
    grid.innerHTML = solutions.map(s => `
        <div class="service-card">
            <img src="${s.image}" alt="${s.title}">
            <div class="service-card-content">
                <h3>${s.title}</h3>
                <ul>${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
            </div>
        </div>
    `).join('');
}

function renderSuccess(stories) {
    const container = document.getElementById('success-grid');
    container.innerHTML = stories.map(s => `
        <div class="stat-item">
            <h2>${s.value}</h2>
            <p><strong>${s.label}</strong></p>
            <p>${s.description}</p>
        </div>
    `).join('');
}