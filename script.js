function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isExternal(href) {
  return /^https?:\/\//i.test(href);
}

function renderLink(link, className = "") {
  const attrs = [
    `href="${escapeHtml(link.href)}"`,
    className ? `class="${escapeHtml(className)}"` : "",
    link.external || isExternal(link.href)
      ? 'target="_blank" rel="noopener noreferrer"'
      : "",
    link.download ? "download" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `<a ${attrs}>${escapeHtml(link.label)}</a>`;
}

function renderSectionHeading(number, title) {
  return `
    <div class="section-heading">
      <span>${escapeHtml(number)}</span>
      <h2>${escapeHtml(title)}</h2>
    </div>
  `;
}

function renderNav(data) {
  document.querySelector(".logo").textContent = data.meta.logo;
  document.querySelector("nav").innerHTML = data.nav
    .map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
    .join("");
}

function renderHero(data) {
  const hero = data.hero;
  const container = document.querySelector("#hero .container");

  container.innerHTML = `
    <div class="hero-layout">
      <div class="hero-copy">
        <p class="eyebrow">${escapeHtml(hero.eyebrow)}</p>
        <h1>
          ${escapeHtml(hero.greeting)}
          <span>${escapeHtml(hero.name)}</span>
        </h1>
        <p class="hero-description">${escapeHtml(hero.description)}</p>
        <div class="hero-links">
          ${hero.links
            .map((link) =>
              renderLink(link, link.primary ? "button primary" : "button")
            )
            .join("")}
        </div>
      </div>
      ${
        hero.image
          ? `
            <div class="hero-photo">
              <img
                src="${escapeHtml(hero.image)}"
                alt="${escapeHtml(hero.imageAlt || hero.name)}"
              >
            </div>
          `
          : ""
      }
    </div>
  `;
}

function renderExperience(data) {
  const section = data.experience;
  const container = document.querySelector("#experience .container");

  container.innerHTML = `
    ${renderSectionHeading(section.number, section.title)}
    ${section.items
      .map(
        (item) => `
          <article class="experience-item">
            <div class="experience-header">
              <div>
                <h3>${escapeHtml(item.role)}</h3>
                <p class="company">${escapeHtml(item.company)}</p>
              </div>
              <span class="date">${escapeHtml(item.date)}</span>
            </div>
            <ul>
              ${item.bullets
                .map((bullet) => `<li>${escapeHtml(bullet)}</li>`)
                .join("")}
            </ul>
          </article>
        `
      )
      .join("")}
  `;
}

function renderProjects(data) {
  const section = data.projects;
  const container = document.querySelector("#projects .container");

  container.innerHTML = `
    ${renderSectionHeading(section.number, section.title)}
    ${section.items
      .map(
        (project, index) => `
          <article class="project">
            <div class="project-number">
              ${String(index + 1).padStart(2, "0")}
            </div>
            <div class="project-content">
              <p class="project-type">${escapeHtml(project.type)}</p>
              <h3>${escapeHtml(project.name)}</h3>
              <div class="tags">
                ${project.tags
                  .map((tag) => `<span>${escapeHtml(tag)}</span>`)
                  .join("")}
              </div>
              <p>${escapeHtml(project.description)}</p>
              <div class="project-details">
                <h4>What I built</h4>
                <ul>
                  ${project.built
                    .map((item) => `<li>${escapeHtml(item)}</li>`)
                    .join("")}
                </ul>
              </div>
              <div class="project-links">
                ${project.links.map((link) => renderLink(link)).join("")}
              </div>
            </div>
          </article>
        `
      )
      .join("")}
  `;
}

function renderSkills(data) {
  const section = data.skills;
  const container = document.querySelector("#skills .container");

  container.innerHTML = `
    ${renderSectionHeading(section.number, section.title)}
    <div class="skills-grid">
      ${section.groups
        .map(
          (group) => `
            <div class="skill-group">
              <h3>${escapeHtml(group.title)}</h3>
              <p>${group.items.map(escapeHtml).join(" · ")}</p>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function renderEducation(data) {
  const section = data.education;
  const container = document.querySelector("#education .container");

  container.innerHTML = `
    ${renderSectionHeading(section.number, section.title)}
    ${section.items
      .map(
        (item) => `
          <article class="education-item">
            <div>
              <h3>${escapeHtml(item.degree)}</h3>
            </div>
            <span class="date">${escapeHtml(item.date)}</span>
          </article>
        `
      )
      .join("")}
  `;
}

function renderContact(data) {
  const section = data.contact;
  const container = document.querySelector("#contact .container");

  container.innerHTML = `
    ${renderSectionHeading(section.number, section.title)}
    <p class="contact-description">${escapeHtml(section.description)}</p>
    <a href="mailto:${escapeHtml(section.email)}" class="contact-email">
      ${escapeHtml(section.email)}
    </a>
    <div class="social-links">
      ${section.links.map((link) => renderLink(link)).join("")}
    </div>
  `;
}

function renderFooter(data) {
  const footer = data.footer;
  document.querySelector(".footer-content").innerHTML = `
    <p>${escapeHtml(footer.copyright)}</p>
    <p>${escapeHtml(footer.tagline)}</p>
  `;
}

function renderMeta(data) {
  document.title = data.meta.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.setAttribute("content", data.meta.description);
  }
}

function renderPortfolio(data) {
  renderMeta(data);
  renderNav(data);
  renderHero(data);
  renderExperience(data);
  renderProjects(data);
  renderSkills(data);
  renderEducation(data);
  renderContact(data);
  renderFooter(data);
}

async function init() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) {
      throw new Error(`Failed to load data.json (${response.status})`);
    }

    const data = await response.json();
    renderPortfolio(data);
  } catch (error) {
    console.error(error);
    document.body.insertAdjacentHTML(
      "afterbegin",
      `<p style="padding: 1rem; font-family: sans-serif; color: #b91c1c;">
        Could not load portfolio data. Serve this folder with a local server
        (for example: <code>npx serve</code>) so <code>data.json</code> can load.
      </p>`
    );
  }
}

init();
