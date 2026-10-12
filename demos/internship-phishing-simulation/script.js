document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Icons
    lucide.createIcons();

    // 2. Active Nav State
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.desktop-nav .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // 3. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const desktopNav = document.querySelector(".desktop-nav");
    if(mobileMenuBtn && desktopNav) {
        mobileMenuBtn.addEventListener("click", () => {
            desktopNav.classList.toggle("active");
        });
    }

    // 4. Contact Form Logic
    const contactForm = document.getElementById("corporate-contact-form");
    const contactSuccess = document.getElementById("contact-success");
    if(contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            contactForm.style.display = "none";
            contactSuccess.classList.remove("hidden");
        });
    }

    // 5. Expandable Cards (FAQs, Student Resources)
    const expandCards = document.querySelectorAll(".expand-card");
    expandCards.forEach(card => {
        const header = card.querySelector(".expand-header");
        if(header) {
            header.addEventListener("click", () => {
                const isOpen = card.classList.contains("open");
                expandCards.forEach(c => c.classList.remove("open"));
                if(!isOpen) card.classList.add("open");
            });
        }
    });

    // 6. Job Search and Filters Logic (Careers Page)
    const jobListEl = document.getElementById('job-list');
    if (jobListEl) {
        const jobsData = [
            { id: 1, title: 'Software Development Intern', location: 'Pune, Maharashtra', profession: 'Software Engineering', program: 'Internship', experience: 'Students', link: 'internship-verification.html' },
            { id: 2, title: 'Data Analytics Intern', location: 'Pune, Maharashtra', profession: 'Data & Analytics', program: 'Internship', experience: 'Students', link: 'internship-verification.html' },
            { id: 3, title: 'Cybersecurity Intern', location: 'Pune, Maharashtra', profession: 'Cybersecurity', program: 'Internship', experience: 'Students', link: 'internship-verification.html' },
            { id: 4, title: 'AI & Machine Learning Intern', location: 'Bengaluru / Pune', profession: 'Artificial Intelligence', program: 'Internship', experience: 'Students', link: 'internship-verification.html' },
            { id: 5, title: 'Cloud Engineering Intern', location: 'Pune', profession: 'Cloud', program: 'Internship', experience: 'Students', link: 'internship-verification.html' },
            { id: 6, title: 'Senior Cloud Architect', location: 'Mumbai', profession: 'Cloud', program: 'Full Time', experience: 'Experienced Professionals', link: 'internship-verification.html' },
            { id: 7, title: 'Data Science Graduate', location: 'Hyderabad', profession: 'Data & Analytics', program: 'Graduate', experience: 'Entry Level', link: 'internship-verification.html' }
        ];

        let currentSearch = '';
        let activeFilters = {
            experience: [],
            program: [],
            location: [],
            profession: []
        };

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('q')) {
            currentSearch = urlParams.get('q').toLowerCase();
            const searchInput = document.getElementById('job-search-input');
            if(searchInput) searchInput.value = currentSearch;
            document.getElementById('clear-search-btn').classList.remove('hidden');
        }

        const renderJobs = () => {
            let filtered = jobsData.filter(job => {
                if (!currentSearch) return true;
                return job.title.toLowerCase().includes(currentSearch) || 
                       job.location.toLowerCase().includes(currentSearch) || 
                       job.profession.toLowerCase().includes(currentSearch);
            });

            filtered = filtered.filter(job => {
                const matchExp = activeFilters.experience.length === 0 || activeFilters.experience.includes(job.experience);
                const matchProg = activeFilters.program.length === 0 || activeFilters.program.includes(job.program);
                const matchLoc = activeFilters.location.length === 0 || activeFilters.location.includes(job.location.split(',')[0].trim());
                const matchProf = activeFilters.profession.length === 0 || activeFilters.profession.includes(job.profession);
                return matchExp && matchProg && matchLoc && matchProf;
            });

            jobListEl.innerHTML = '';
            const noMsg = document.getElementById('no-results-msg');
            
            if (filtered.length === 0) {
                noMsg.classList.remove('hidden');
            } else {
                noMsg.classList.add('hidden');
                filtered.forEach(job => {
                    const card = document.createElement('a');
                    card.href = job.link;
                    card.className = 'job-card fade-up';
                    card.innerHTML = `
                        <div class="job-info-left">
                            <h3>${job.title}</h3>
                            <div class="job-meta-row">
                                <div><i data-lucide="map-pin"></i> ${job.location}</div>
                            </div>
                        </div>
                        <div class="job-info-right">
                            <div>${job.profession}</div>
                            <div>${job.program}</div>
                            <div>${job.experience}</div>
                        </div>
                    `;
                    jobListEl.appendChild(card);
                });
                lucide.createIcons();
            }
        };

        renderJobs();

        const searchInput = document.getElementById('job-search-input');
        const searchBtn = document.getElementById('job-search-btn');
        const clearSearchBtn = document.getElementById('clear-search-btn');

        const handleSearch = () => {
            currentSearch = searchInput.value.toLowerCase().trim();
            if(currentSearch) {
                clearSearchBtn.classList.remove('hidden');
            } else {
                clearSearchBtn.classList.add('hidden');
            }
            renderJobs();
        };

        if(searchBtn) searchBtn.addEventListener('click', handleSearch);
        if(searchInput) searchInput.addEventListener('keyup', (e) => { if(e.key === 'Enter') handleSearch(); });
        if(clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                currentSearch = '';
                clearSearchBtn.classList.add('hidden');
                renderJobs();
            });
        }

        const checkboxes = document.querySelectorAll('.filter-checkbox');
        checkboxes.forEach(cb => {
            cb.addEventListener('change', (e) => {
                const category = e.target.getAttribute('data-category');
                const val = e.target.value;
                if(e.target.checked) activeFilters[category].push(val);
                else activeFilters[category] = activeFilters[category].filter(v => v !== val);
                renderJobs();
            });
        });

        const clearFiltersBtn = document.getElementById('clear-filters-btn');
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => {
                checkboxes.forEach(cb => cb.checked = false);
                activeFilters = { experience: [], program: [], location: [], profession: [] };
                renderJobs();
            });
        }
    }

    // 7. Global Search Page Logic (search.html)
    const globalSearchInput = document.getElementById('global-search-input');
    const globalSearchResults = document.getElementById('global-search-results');
    if (globalSearchInput && globalSearchResults) {
        const searchIndex = [
            { title: 'Software Development Intern', category: 'Opportunities', link: 'internship-verification.html', desc: 'Pune, Maharashtra | Internship' },
            { title: 'Data Analytics Intern', category: 'Opportunities', link: 'internship-verification.html', desc: 'Pune, Maharashtra | Internship' },
            { title: 'Cybersecurity Intern', category: 'Opportunities', link: 'internship-verification.html', desc: 'Pune, Maharashtra | Internship' },
            { title: 'AI & Machine Learning Intern', category: 'Opportunities', link: 'internship-verification.html', desc: 'Bengaluru / Pune | Internship' },
            { title: 'Technology & Innovation', category: 'Insights', link: 'insights.html', desc: 'Explore perspectives shaping the future of tech.' },
            { title: 'Future of Work', category: 'Insights', link: 'insights.html', desc: 'Adapting to the modern workplace.' },
            { title: 'Cloud Services', category: 'Services', link: 'services.html', desc: 'Scalable cloud engineering and architecture.' },
            { title: 'Artificial Intelligence', category: 'Services', link: 'services.html', desc: 'Generative AI and machine learning solutions.' },
            { title: 'Banking & Financial Services', category: 'Industries', link: 'industries.html', desc: 'Technology for the modern financial sector.' },
            { title: 'Winter Internship Program', category: 'Programs', link: 'programs.html', desc: 'An intensive short-term program for students.' },
            { title: 'Building the workforce of tomorrow', category: 'News', link: 'news.html', desc: 'Latest company announcements.' }
        ];

        const performGlobalSearch = () => {
            const query = globalSearchInput.value.toLowerCase().trim();
            globalSearchResults.innerHTML = '';
            
            if (!query) {
                globalSearchResults.innerHTML = '<p style="color:var(--color-text-light);">Enter a keyword to search across the site.</p>';
                return;
            }

            const results = searchIndex.filter(item => 
                item.title.toLowerCase().includes(query) || 
                item.category.toLowerCase().includes(query) ||
                item.desc.toLowerCase().includes(query)
            );

            if (results.length === 0) {
                globalSearchResults.innerHTML = '<p>No results found for "'+query+'". Try another keyword like "Intern", "AI", or "Cloud".</p>';
            } else {
                results.forEach(res => {
                    const el = document.createElement('a');
                    el.href = res.link;
                    el.className = 'job-card fade-up';
                    el.innerHTML = `
                        <div class="job-info-left">
                            <h3 style="font-size:1.25rem;">${res.title}</h3>
                            <div class="job-meta-row">
                                <div>${res.desc}</div>
                            </div>
                        </div>
                        <div class="job-info-right">
                            <div style="font-weight:600; color:var(--color-primary);">${res.category}</div>
                        </div>
                    `;
                    globalSearchResults.appendChild(el);
                });
            }
        };

        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('q')) {
            globalSearchInput.value = urlParams.get('q');
            performGlobalSearch();
        }

        document.getElementById('global-search-btn').addEventListener('click', performGlobalSearch);
        globalSearchInput.addEventListener('keyup', (e) => {
            if(e.key === 'Enter') performGlobalSearch();
        });
    }
});
