// Import data
import bannerData from '../data/banner.json';
import featureData from '../data/feature.json';
import ctaData from '../data/cta.json';
import portfolioData from '../data/portfolio.json';
import teamData from '../data/team.json';
import contactData from '../data/contact.json';

// Banner Section
function renderBanner() {
  const bannerSection = document.getElementById('banner');
  const banner = bannerData.banner;

  if (!banner.enable) {
    bannerSection.style.display = 'none';
    return;
  }

  bannerSection.style.backgroundImage = `url("${banner.bg_image_webp}")`;
  bannerSection.innerHTML = `
    <img class="d-none" src="${banner.bg_image_webp}" 
         onerror="this.onerror=null;this.parentElement.style.backgroundImage='url(${banner.bg_image})'"/>
    <div class="block">
      ${banner.icon ? `<div class="video-button"><i class="${banner.icon}"></i></div>` : ''}
      <img class="hero-area-img" src="${banner.bg_logo}" alt="J. Morales Logo" />
      <p></p>
      ${banner.button.enable ? `
        <a href="${banner.button.link}" class="btn btn-transparent page-scroll">${banner.button.label}</a>
      ` : ''}
    </div>
  `;
}

// Navigation Section
function renderNavigation() {
  const navSection = document.getElementById('navigation');
  
  navSection.innerHTML = `
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand p-0" href="/">
          <img class="lozad" data-src="/images/logo_transparent.png" alt="J. Morales Clothing Manufacturing L.L.C." height="50" />
        </a>
        <button class="navbar-toggler rounded-0" type="button" data-toggle="collapse" data-target="#navigation-menu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navigation-menu">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#feature">portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  `;
}

// Feature Section
function renderFeature() {
  const featureSection = document.getElementById('feature');
  const feature = featureData.feature;

  if (!feature.enable) {
    featureSection.style.display = 'none';
    return;
  }

  featureSection.innerHTML = `
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 padding-0" 
             style="background-image: url('${feature.image_webp}'); background-size: cover; background-position: top center; background-repeat: no-repeat; min-height: 400px;">
          <img src="${feature.image_webp}" style="display: none;" 
               onerror="this.onerror=null;this.parentElement.style.backgroundImage='url(${feature.image})'">
        </div>
        <div class="col-lg-6">
          <div class="content-block">
            <h2>${feature.title}</h2>
            <p>${feature.content}</p>
            <div class="row">
              ${feature.feature_item.map(item => `
                <div class="col-lg-6">
                  <div class="media">
                    <div class="align-self-start mr-3">
                      <i class="${item.icon}"></i>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading">${item.title}</h4>
                      <p>${item.content}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// CTA Section
function renderCTA() {
  const ctaSection = document.getElementById('cta');
  const cta = ctaData.cta;

  if (!cta.enable) {
    ctaSection.style.display = 'none';
    return;
  }

  ctaSection.className = 'section call-to-action';
  ctaSection.style.backgroundImage = `url("${cta.bg_image_webp}")`;
  ctaSection.innerHTML = `
    <img class="d-none" src="${cta.bg_image_webp}" 
         onerror="this.onerror=null;this.parentElement.style.backgroundImage='url(${cta.bg_image})'">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2>${cta.title}</h2>
          <p>${cta.content}</p>
          ${cta.button.enable ? `
            <a href="${cta.button.link}" class="btn btn-main">${cta.button.label}</a>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

// Portfolio Section
function renderPortfolio() {
  const portfolioSection = document.getElementById('portfolio');
  const portfolio = portfolioData.portfolio;

  if (!portfolio.enable) {
    portfolioSection.style.display = 'none';
    return;
  }

  portfolioSection.className = 'section portfolio';
  portfolioSection.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>${portfolio.title}</h2>
            <p>${portfolio.content}</p>
          </div>
        </div>
      </div>
      <div class="row shuffle-wrapper portfolio-gallery">
        ${portfolio.portfolio_item.map(item => `
          <div class="col-lg-4 col-md-6 mb-4 shuffle-item">
            <div class="position-relative rounded hover-wrapper">
              <img src="${item.image_webp}" alt="${item.name}" class="img-fluid rounded w-100 d-block"
                   onerror="this.onerror=null;this.src='${item.image}'">
              <div class="hover-overlay">
                <div class="hover-content">
                  ${item.link ? `<a class="btn btn-light btn-sm" href="${item.link}">View</a>` : ''}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Team Section
function renderTeam() {
  const teamSection = document.getElementById('team');
  const team = teamData.team;

  if (!team.enable) {
    teamSection.style.display = 'none';
    return;
  }

  teamSection.className = 'section team';
  teamSection.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>${team.title}</h2>
            <p>${team.content}</p>
          </div>
        </div>
      </div>
      <div class="row">
        ${team.team_member.map(member => `
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="team-member text-center">
              <div class="member-photo">
                <img class="img-fluid" src="${member.image_webp}" alt="${member.name}"
                     onerror="this.onerror=null;this.src='${member.image}'">
              </div>
              <div class="member-content">
                <h3>${member.name}</h3>
                <span>${member.designation}</span>
                <p>${member.content}</p>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Contact Section
function renderContact() {
  const contactSection = document.getElementById('contact');
  const contact = contactData.contact;

  if (!contact.enable) {
    contactSection.style.display = 'none';
    return;
  }

  contactSection.className = 'section contact';
  contactSection.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>${contact.title}</h2>
            <p>${contact.content}</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mx-auto">
          <div class="contact-info">
            ${contact.contact_list.map(item => `
              <div class="contact-item">
                <i class="${item.icon}"></i>
                <div>
                  <h5>${item.title}</h5>
                  <p>${item.content}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

// Footer
function renderFooter() {
  const footer = document.getElementById('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <p>Copyright &copy; ${new Date().getFullYear()} J. Morales Clothing Manufacturing L.L.C. All Rights Reserved</p>
        </div>
      </div>
    </div>
  `;
}

// Initialize all sections
function init() {
  renderBanner();
  renderNavigation();
  renderFeature();
  renderCTA();
  renderPortfolio();
  renderTeam();
  renderContact();
  renderFooter();

  // Initialize lazy loading
  if (typeof lozad !== 'undefined') {
    const observer = lozad();
    observer.observe();
  }

  // Initialize smooth scrolling for page-scroll links
  document.querySelectorAll('.page-scroll').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
