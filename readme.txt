Final Project Report — “Influence” Social Media Agency Website

Student: Elmira Bukhanova 
Group: MT-2402
Project Topic: Social Media Marketing Agency Website (“Influence”)
Technologies Used: HTML5, CSS3, Bootstrap 5, JavaScript, jQuery
Fonts: Poppins, Playfair Display (Google Fonts)
Hosting: Published via GitHub Pages

Objective

The objective of this project was to apply all the knowledge gained during the Web Development course to create a fully functional, multi-page, and interactive website.
The website demonstrates my ability to use semantic HTML, modern CSS (Flexbox & Grid), Bootstrap for responsiveness, and JavaScript/jQuery for interactivity and dynamic content.
The chosen topic — “Influence” — represents a creative SMM agency that helps experts grow on Instagram through content strategy, Reels production, and analytics.

Website Structure

The website includes five pages:
Home (index.html) – introduction to the agency and its mission. Includes hero section animation, background effects, and a Bootstrap modal “Join Influence”.
Services (services.html) – description of key services with a dynamic client database table (CRUD + search) and a pricing table.
Portfolio (portfolio.html) – showcases completed projects with category filters (All / Reels / Photo / Promo) and a lightbox gallery.
Team (team.html) – presents the core team members with Bootstrap grid layout (3 cards on desktop, 2 on tablet, 1 on mobile) and reveal animations.
Contact (contact.html) – includes a fully validated contact form with RegEx email check, password strength indicator, confirmation, and Bootstrap success alert.

Each page contains a shared navigation bar and footer, ensuring consistency across the entire site.
HTML Implementation
Semantic HTML tags (header, main, section, footer) were used for structure.
Lists, headings, paragraphs, and links were implemented properly.
One pricing table was created using <table> with Bootstrap styling.
One contact form includes validation and success messages.
Lightbox and modal elements were added to enhance interactivity.
All images below the fold use loading="lazy" for better performance.
CSS Implementation
All styling is placed in an external stylesheet (/css/style.css).
I used CSS variables defined in :root for consistent colors (--burgundy, --accent, --ice, etc.).
Layouts are built using Flexbox and Bootstrap Grid System.
Hover, focus, and transition effects were applied for buttons, links, and service cards.
Responsive design ensures that all pages adapt correctly to desktop, tablet, and mobile.
A Dark/Light theme toggle was implemented using JavaScript and CSS variables stored in LocalStorage.
The design is consistent across all pages, using the same color palette and typography.

JavaScript & jQuery Implementation
1. Form Validation
Implemented client-side validation using both HTML5 constraints and JavaScript checks.
Regular Expression (RegEx) verifies email format.
Password fields include strength detection (Weak / Medium / Strong) and confirmation.
Real-time feedback and Bootstrap alert are displayed upon successful submission.

2. Dynamic Client Database (CRUD + Search)
Added ability to add, edit, delete, and search clients dynamically.

Used jQuery animations:
.slideDown() for new entries
.fadeOut() for deletions
Case-insensitive real-time filtering with .keyup() updates the client list instantly.

3. Modal Interaction
Added Bootstrap modal “Join Influence” on the homepage.
Modal is controlled programmatically via Bootstrap methods (.show() / .hide()).
Includes a signup form validated before submission.

4. Portfolio Filtering & Lightbox
Implemented category filter using jQuery’s .filter() method.
Smooth transitions with .fadeIn() and .fadeOut().
Lightbox overlay enlarges images on click and fades out on close.

5. Animations & Scroll Effects
Used .animate() and CSS transitions to create reveal effects.
Elements appear on scroll with .addClass("in").
Cards lift slightly on hover for visual feedback.

6. Theme Toggle
Implemented dark/light mode toggle.
The user’s choice is saved in LocalStorage and persists after reload.
All background and text colors change dynamically using CSS variables.
Responsive Design

Two main breakpoints:
768px (tablet)
992px (desktop)
Layout automatically adjusts using Bootstrap grid (col-lg-4, col-md-6, col-sm-12).
Navigation collapses into a hamburger menu on mobile.
Font sizes and paddings adjust via media queries.

Animations and Visual Feedback
Fade-in animations on hero text and section titles.
Slide and fade effects for form validation and CRUD updates.
Reveal animation on scroll using jQuery logic.
Lightbox and modal transitions for smooth user interaction.

Summary of Work Process
During the project, I designed, coded, and refined a professional, responsive website that integrates Bootstrap, JavaScript, and jQuery features.
Each page was structured consistently and optimized for usability.
I focused on creating a modern visual style that reflects a real digital agency — Influence, combining clean UI, responsive layouts, and engaging microinteractions.

Through this project, I demonstrated my ability to:
Combine HTML, CSS, Bootstrap, JS, and jQuery effectively;
Build interactive elements with real-world functionality;
Ensure responsiveness and accessibility;
Present and defend a full web project from concept to implementation.

Conclusion
The “Influence” website fulfills all requirements of the final project.
It showcases modern front-end techniques, aesthetic consistency, and professional-grade interactivity suitable for a digital agency.
This project represents not only the culmination of the course but also a practical foundation for building future client websites and portfolios.