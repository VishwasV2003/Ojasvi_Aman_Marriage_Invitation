(function () {
  "use strict";

  // Counts down to the wedding vows (22 July 2026, 7:15 PM).
  var WEDDING_START = new Date("2026-07-22T19:15:00");

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
        btn.textContent = expanded ? "Details & venue" : "Hide details";
      });
    });
  }

  function initReveal() {
    var els = document.querySelectorAll(".section-title, .section-sub, .quote-inline, .rsvp-card");
    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    els.forEach(function (el) {
      el.classList.add("reveal");
    });

    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    els.forEach(function (el) {
      obs.observe(el);
    });
  }

  initHeader();
  initDayTabs();
  initEventCards();
  updateCountdown();
  setInterval(updateCountdown, 1000);
  initReveal();
})();
