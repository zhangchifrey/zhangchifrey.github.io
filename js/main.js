(function () {
  "use strict";

  var STORAGE_KEY = "chi-zhang-lang";
  var html = document.documentElement;

  function titles() {
    return {
      "zh-CN": "张驰 · 同济大学经济与管理学院",
      en: "Chi Zhang · Tongji University",
    };
  }

  function descriptions() {
    return {
      "zh-CN":
        "张驰，同济大学经济与管理学院、管理高等研究院博士后。研究兴趣为管理学中的社会议题，尤其关注残疾包容与污名化员工。",
      en: "Chi Zhang is a postdoctoral researcher at Tongji University’s School of Economics and Management and Advanced Institute of Business. His research focuses on social issues in management, especially disability inclusion and stigmatized workers.",
    };
  }

  function setLang(lang) {
    var next = lang === "en" ? "en" : "zh-CN";
    html.setAttribute("lang", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {}
    document.title = titles()[next];
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", descriptions()[next]);
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-lang") === next ? "true" : "false");
    });
  }

  function initLang() {
    var q = null;
    var saved = null;
    try {
      q = new URLSearchParams(location.search).get("lang");
    } catch (e) {}
    if (q === "en" || q === "zh" || q === "zh-CN") {
      setLang(q === "en" ? "en" : "zh-CN");
      return;
    }
    try {
      saved = localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (saved === "en" || saved === "zh-CN") setLang(saved);
    else setLang(html.getAttribute("lang") === "en" ? "en" : "zh-CN");
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });
  initLang();

  var toggler = document.querySelector(".navbar-toggler");
  var collapse = document.getElementById("navbar-content");
  if (toggler && collapse) {
    toggler.addEventListener("click", function () {
      var open = collapse.classList.toggle("show");
      toggler.setAttribute("aria-expanded", open ? "true" : "false");
    });
    collapse.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        collapse.classList.remove("show");
        toggler.setAttribute("aria-expanded", "false");
      });
    });
  }

  var sections = ["about", "thesis", "publications", "working", "presentations", "grants", "contact"]
    .map(function (id) { return document.getElementById(id); })
    .filter(Boolean);
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.navbar-nav a[href^="#"]'));

  function setCurrent(id) {
    navLinks.forEach(function (link) {
      var match = link.getAttribute("href") === "#" + id;
      if (match) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var visible = new Map();
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        var best = null;
        var bestRatio = 0;
        visible.forEach(function (ratio, id) {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });
        if (best) setCurrent(best);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.4, 0.7, 1] }
    );
    sections.forEach(function (sec) { observer.observe(sec); });
  }
})();
