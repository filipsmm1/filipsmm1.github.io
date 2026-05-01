<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Stylish & Healthy | My Daily Journal 2026</title>
  <meta name="description" content="My Daily Journal 2026 by Stylish & Healthy — a digital ritual for intentions, planning, reflection, habits, and feminine self-growth." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="page-glow"></div>
  <div class="cursor-orb" id="cursorOrb"></div>

  <header class="topbar">
    <p>New journal ritual for 2026</p>
    <p>Live beautifully · Feel deeply · Thrive daily</p>
    <p>Digital PDF planner</p>
  </header>

  <nav class="nav">
    <a class="logo" href="#home" aria-label="Stylish and Healthy home">
      <span>Stylish & Healthy</span>
      <small>digital ritual space</small>
    </a>
    <button class="menu-btn" id="menuBtn" aria-label="Open navigation">☰</button>
    <div class="nav-links" id="navLinks">
      <a href="#journal">Journal</a>
      <a href="#inside">Inside</a>
      <a href="#video">Video</a>
      <a href="#preview">Preview</a>
      <a href="#buy" class="nav-cta">Get the journal</a>
    </div>
  </nav>

  <main id="home">
    <section class="hero section-pad">
      <div class="hero-copy reveal">
        <p class="eyebrow">My Daily Journal 2026</p>
        <h1>A digital ritual for the woman becoming her.</h1>
        <p class="hero-text">A clean, feminine, structured daily journal for intentions, gratitude, priorities, habits, weekly planning, and monthly reflection.</p>
        <div class="hero-actions">
          <a class="btn primary" href="assets/stylish_healthy_journal_2026.pdf" target="_blank" rel="noopener">View journal PDF</a>
          <a class="btn secondary" href="assets/stylish_healthy_journal_2026.pdf" download>Download sample</a>
        </div>
        <div class="stats">
          <div><strong>517</strong><span>pages</span></div>
          <div><strong>12</strong><span>months</span></div>
          <div><strong>daily</strong><span>ritual pages</span></div>
        </div>
      </div>

      <div class="hero-media reveal" id="video">
        <div class="video-frame">
          <video src="assets/journal_showcase_v2.mp4" autoplay muted loop playsinline controls preload="metadata"></video>
        </div>
        <div class="floating-note note-one">gratitude · priorities · schedule</div>
        <div class="floating-note note-two">2026 ritual space</div>
      </div>
    </section>

    <section class="marquee" aria-hidden="true">
      <div class="marquee-track">
        <span>intentions</span><i>✦</i><span>daily gratitude</span><i>✦</i><span>habit tracker</span><i>✦</i><span>weekly planning</span><i>✦</i><span>reflection prompts</span><i>✦</i>
        <span>intentions</span><i>✦</i><span>daily gratitude</span><i>✦</i><span>habit tracker</span><i>✦</i><span>weekly planning</span><i>✦</i><span>reflection prompts</span><i>✦</i>
      </div>
    </section>

    <section class="section-pad intro" id="journal">
      <div class="section-heading reveal">
        <p class="eyebrow">The product</p>
        <h2>Not another planner. A full-year soft discipline system.</h2>
      </div>
      <div class="journal-showcase reveal">
        <div class="css-journal">
          <div class="journal-tabs"><span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span></div>
          <div class="journal-page">
            <small>My Daily Journal</small>
            <h3>2026</h3>
            <p>A Stylish & Healthy Ritual</p>
            <div class="line"></div>
            <em>Live beautifully. Feel deeply. Thrive daily.</em>
          </div>
        </div>
        <div class="product-copy">
          <h3>Designed to make consistency feel beautiful.</h3>
          <p>The journal opens with annual intentions and a year-at-a-glance, then moves through monthly overviews, weekly plans, daily pages, habit tracking, reflection prompts, and note space.</p>
          <div class="pill-row">
            <span>Digital PDF</span><span>2026 dated</span><span>Minimal luxe</span><span>Printable</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-pad feature-grid" id="inside">
      <article class="feature-card reveal">
        <span class="icon">01</span>
        <h3>Annual intentions</h3>
        <p>Set what you are calling in for your mind, body, and life.</p>
      </article>
      <article class="feature-card reveal">
        <span class="icon">02</span>
        <h3>Monthly overview</h3>
        <p>Plan each month with a calendar, focus area, and habit tracker.</p>
      </article>
      <article class="feature-card reveal">
        <span class="icon">03</span>
        <h3>Weekly spread</h3>
        <p>Map your week with schedule blocks, intention, notes, and wins.</p>
      </article>
      <article class="feature-card reveal">
        <span class="icon">04</span>
        <h3>Daily ritual page</h3>
        <p>Gratitude, top priorities, schedule, notes, energy, mood, and reflection.</p>
      </article>
    </section>

    <section class="section-pad interactive" id="preview">
      <div class="section-heading reveal">
        <p class="eyebrow">Preview the flow</p>
        <h2>Choose the part of the journal you want to see.</h2>
      </div>
      <div class="preview-shell reveal">
        <div class="preview-controls" role="tablist" aria-label="Journal preview sections">
          <button class="tab active" data-preview="daily">Daily Page</button>
          <button class="tab" data-preview="monthly">Monthly Overview</button>
          <button class="tab" data-preview="weekly">Weekly Spread</button>
          <button class="tab" data-preview="reflect">Reflection</button>
        </div>
        <div class="preview-card" id="previewCard">
          <p class="preview-label">January 1 · Monday</p>
          <h3>Today I am grateful for</h3>
          <div class="preview-lines"><span></span><span></span><span></span></div>
          <h4>Top 3 priorities</h4>
          <div class="preview-boxes"><span></span><span></span><span></span></div>
          <h4>Evening reflection</h4>
          <p class="muted">What went well today? What would I do differently?</p>
        </div>
      </div>
    </section>

    <section class="section-pad ritual-builder">
      <div class="builder-copy reveal">
        <p class="eyebrow">Make it sell</p>
        <h2>The video should be the main proof.</h2>
        <p>Keep the showcase video above the fold. It instantly shows that this is a real product with depth, not just a concept.</p>
      </div>
      <div class="checklist reveal">
        <label><input type="checkbox" checked> Watch the journal flip-through</label>
        <label><input type="checkbox" checked> Preview the PDF</label>
        <label><input type="checkbox"> Add to cart / payment link</label>
        <label><input type="checkbox"> Send instant download after purchase</label>
      </div>
    </section>

    <section class="section-pad buy" id="buy">
      <div class="buy-card reveal">
        <p class="eyebrow">My Daily Journal 2026</p>
        <h2>Start your ritual space today.</h2>
        <p>Use this section for your Gumroad, Shopify, Payhip, Stan Store, or Etsy link.</p>
        <div class="hero-actions center-actions">
          <a class="btn primary" href="assets/stylish_healthy_journal_2026.pdf" target="_blank" rel="noopener">Open PDF</a>
          <a class="btn secondary" href="assets/stylish_healthy_journal_2026.pdf" download>Download PDF</a>
        </div>
        <small class="note">Replace these PDF buttons with your checkout link when ready.</small>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div>
      <strong>Stylish & Healthy</strong>
      <p>Live beautifully. Feel deeply. Thrive daily.</p>
    </div>
    <a href="#home">Back to top ↑</a>
  </footer>

  <script src="script.js"></script>
</body>
</html>
