(function () {
  "use strict";

  /** 1 = scrolling down, -1 = scrolling up — drives reveal enter/exit direction */
  var scrollDirection = 1;
  var lastScrollY = typeof window.scrollY === "number" ? window.scrollY : 0;

  function trackScrollDirection() {
    var y = window.scrollY || 0;
    if (y > lastScrollY) scrollDirection = 1;
    else if (y < lastScrollY) scrollDirection = -1;
    lastScrollY = y;
  }

  // Counts down to 21 July 2026, 12:00 AM India time (IST).
  var WEDDING_START = new Date("2026-07-21T00:00:00+05:30");

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function updateCountdown() {
    var now = new Date();
    var diff = WEDDING_START - now;
    var elDays = document.getElementById("cd-days");
    var elHours = document.getElementById("cd-hours");
    var elMins = document.getElementById("cd-mins");
    var elSecs = document.getElementById("cd-secs");
    if (!elDays) return;

    if (diff <= 0) {
      elDays.textContent = "0";
      elHours.textContent = "0";
      elMins.textContent = "0";
      elSecs.textContent = "0";
      return;
    }

    var secs = Math.floor(diff / 1000);
    var days = Math.floor(secs / 86400);
    secs -= days * 86400;
    var hours = Math.floor(secs / 3600);
    secs -= hours * 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;

    elDays.textContent = String(days);
    elHours.textContent = pad(hours);
    elMins.textContent = pad(mins);
    elSecs.textContent = pad(secs);
  }

  function initHeader() {
    var header = document.querySelector(".site-header");
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");

    function onScroll() {
      trackScrollDirection();
      if (window.scrollY > 40) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!open));
        nav.classList.toggle("is-open", !open);
      });

      nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          toggle.setAttribute("aria-expanded", "false");
          nav.classList.remove("is-open");
        });
      });
    }
  }

  function initDayTabs() {
    var tabs = document.querySelectorAll(".day-tab");
    var panels = document.querySelectorAll(".day-panel");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var targetId = tab.getAttribute("aria-controls");
        var panel = document.getElementById(targetId);
        if (!panel) return;

        tabs.forEach(function (t) {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        panels.forEach(function (p) {
          p.classList.remove("active");
          p.hidden = true;
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        panel.classList.add("active");
        panel.hidden = false;

        window.requestAnimationFrame(function () {
          panel.querySelectorAll(".event-card[data-reveal]").forEach(function (card) {
            var r = card.getBoundingClientRect();
            if (r.top < window.innerHeight * 0.92 && r.bottom > window.innerHeight * 0.08) {
              card.setAttribute("data-reveal-axis", scrollDirection >= 0 ? "from-below" : "from-above");
              window.requestAnimationFrame(function () {
                window.requestAnimationFrame(function () {
                  card.classList.add("is-visible");
                });
              });
            }
          });
        });
      });
    });
  }

  function initEventCards() {
    document.querySelectorAll("[data-event]").forEach(function (card) {
      var btn = card.querySelector(".event-more");
      var details = card.querySelector(".event-details");
      if (!btn || !details) return;

      btn.addEventListener("click", function () {
        var expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!expanded));
        details.hidden = expanded;
        card.classList.toggle("is-open", !expanded);
        btn.textContent = expanded ? "Details" : "Hide details";
      });
    });
  }

  function initReveal() {
    var els = document.querySelectorAll("[data-reveal]");
    var reduced =
      typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    els.forEach(function (el) {
      if (!el.getAttribute("data-reveal-axis")) {
        el.setAttribute("data-reveal-axis", "from-below");
      }
    });

    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var el = entry.target;
          if (entry.isIntersecting) {
            el.setAttribute("data-reveal-axis", scrollDirection >= 0 ? "from-below" : "from-above");
            window.requestAnimationFrame(function () {
              window.requestAnimationFrame(function () {
                el.classList.add("is-visible");
              });
            });
          } else {
            el.classList.remove("is-visible");
            var r = entry.boundingClientRect;
            var vh = window.innerHeight || 0;
            if (r.top >= vh - 24) {
              el.setAttribute("data-reveal-axis", "from-below");
            } else if (r.bottom <= 24) {
              el.setAttribute("data-reveal-axis", "from-above");
            } else {
              el.setAttribute("data-reveal-axis", scrollDirection >= 0 ? "to-above" : "to-below");
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-6% 0px -10% 0px",
        threshold: 0,
      }
    );

    els.forEach(function (el) {
      obs.observe(el);
    });
  }

  function initEnvelopeGate() {
    var gate = document.getElementById("envelope-gate");
    var btn = document.getElementById("envelope-open-btn");
    var mainEl = document.querySelector("main");
    var headerEl = document.querySelector(".site-header");

    if (!gate || !btn) {
      initReveal();
      return;
    }

    document.body.classList.add("envelope-active");
    if (mainEl) mainEl.setAttribute("inert", "");
    if (headerEl) headerEl.setAttribute("inert", "");

    var reduced =
      typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var openMs = reduced ? 280 : 1680;

    function finishOpen() {
      gate.classList.add("is-done");
      gate.setAttribute("aria-hidden", "true");
      gate.removeAttribute("aria-modal");
      document.body.classList.remove("envelope-active");
      if (mainEl) mainEl.removeAttribute("inert");
      if (headerEl) headerEl.removeAttribute("inert");
      var home = document.getElementById("home");
      if (home) {
        home.setAttribute("tabindex", "-1");
        try {
          home.focus({ preventScroll: true });
        } catch (e) {
          home.focus();
        }
      }
      initReveal();
    }

    btn.addEventListener("click", function () {
      if (gate.classList.contains("is-opening")) return;
      gate.classList.add("is-opening");
      btn.disabled = true;
      window.setTimeout(finishOpen, openMs);
    });
  }

  function initFamilyDrawers() {
    var backdrop = document.getElementById("family-drawer-backdrop");
    var drawerBride = document.getElementById("family-drawer-bride");
    var drawerGroom = document.getElementById("family-drawer-groom");
    var btnBride = document.getElementById("family-slider-bride");
    var btnGroom = document.getElementById("family-slider-groom");
    if (!backdrop || !drawerBride || !drawerGroom || !btnBride || !btnGroom) return;

    var activeTrigger = null;

    function setPageInert(on) {
      var mainEl = document.querySelector("main");
      var headerEl = document.querySelector(".site-header");
      if (!mainEl) return;
      if (on) {
        mainEl.setAttribute("inert", "");
        if (headerEl) headerEl.setAttribute("inert", "");
      } else {
        mainEl.removeAttribute("inert");
        if (headerEl) headerEl.removeAttribute("inert");
      }
    }

    function closeDrawer(skipReturnFocus) {
      drawerBride.classList.remove("is-open");
      drawerGroom.classList.remove("is-open");
      drawerBride.setAttribute("aria-hidden", "true");
      drawerGroom.setAttribute("aria-hidden", "true");
      backdrop.classList.remove("is-open");
      backdrop.setAttribute("aria-hidden", "true");
      document.body.classList.remove("family-drawer-open");
      btnBride.setAttribute("aria-expanded", "false");
      btnGroom.setAttribute("aria-expanded", "false");
      setPageInert(false);
      if (!skipReturnFocus && activeTrigger) {
        try {
          activeTrigger.focus();
        } catch (e1) {
          /* ignore */
        }
      }
      activeTrigger = null;
    }

    function openDrawer(drawer, trigger) {
      closeDrawer(true);
      activeTrigger = trigger;
      drawer.classList.add("is-open");
      backdrop.classList.add("is-open");
      backdrop.setAttribute("aria-hidden", "false");
      drawer.setAttribute("aria-hidden", "false");
      document.body.classList.add("family-drawer-open");
      trigger.setAttribute("aria-expanded", "true");
      setPageInert(true);
      var closeBtn = drawer.querySelector(".family-drawer-close");
      window.requestAnimationFrame(function () {
        if (closeBtn) {
          try {
            closeBtn.focus();
          } catch (e2) {
            /* ignore */
          }
        }
      });
    }

    btnBride.addEventListener("click", function () {
      if (drawerBride.classList.contains("is-open")) {
        closeDrawer(false);
      } else {
        openDrawer(drawerBride, btnBride);
      }
    });

    btnGroom.addEventListener("click", function () {
      if (drawerGroom.classList.contains("is-open")) {
        closeDrawer(false);
      } else {
        openDrawer(drawerGroom, btnGroom);
      }
    });

    backdrop.addEventListener("click", function () {
      closeDrawer(false);
    });

    drawerBride.querySelector(".family-drawer-close").addEventListener("click", function () {
      closeDrawer(false);
    });
    drawerGroom.querySelector(".family-drawer-close").addEventListener("click", function () {
      closeDrawer(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && backdrop.classList.contains("is-open")) {
        closeDrawer(false);
      }
    });
  }

  initHeader();
  initDayTabs();
  initEventCards();
  initFamilyDrawers();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  initEnvelopeGate();
})();
