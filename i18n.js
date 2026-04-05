/* Wedding invitation — English / Hindi copy */
(function (global) {
  "use strict";

  var STORAGE_KEY = "invite-lang";

  var STR = {
    en: {
      doc_title: "Ojasvi & Aman | Wedding",
      meta_description: "Ojasvi & Aman — Wedding celebrations, July 21–22, 2026",
      envelope_heading: "You’re invited",
      envelope_open_btn: "Open invitation",
      nav_open_menu: "Open menu",
      nav_home: "Home",
      nav_story: "Our Story",
      nav_schedule: "Schedule",
      nav_location: "Location",
      nav_aria_main: "Main",
      lang_switch_to_hi: "हिंदी",
      lang_switch_to_en: "English",
      lang_toggle_aria_hi: "Switch site language to Hindi",
      lang_toggle_aria_en: "Switch site language to English",
      hero_blessing: "May your union be blessed with love that deepens with each sunrise.",
      hero_kicker: "Together with our families, we invite you to celebrate",
      countdown_label: "Counting down to the wedding",
      cd_days: "Days",
      cd_hours: "Hours",
      cd_mins: "Mins",
      cd_secs: "Secs",
      btn_view: "View celebrations",
      scroll_hint: "Scroll",
      story_quote:
        "Two hearts, one journey. We ask for your blessings as we step into forever, hand in hand.",
      story_cite: "— With love, Ojasvi & Aman",
      story_lead:
        "We are grateful for everyone who shaped our paths and led us to this moment. Your presence would make our wedding complete—please join us as we begin our new chapter surrounded by the people we cherish most.",
      schedule_title: "Celebrations",
      section_sub_1: "All gatherings take place at one venue—see ",
      section_sub_link: "location",
      section_sub_2:
        " at the end of the page for the address and directions. Dress to celebrate in traditional Indian style where you can—we cannot wait to host you.",
      day_tabs_aria: "Wedding days",
      tab_day1: "21 July 2026",
      tab_day2: "22 July 2026",
      lbl_theme: "Theme:",
      lbl_dress: "Dress code:",
      btn_details: "Details",
      btn_hide_details: "Hide details",
      ev_ganesh_time: "5 AM",
      ev_ganesh_title: "Ganesh Sthapna",
      ev_ganesh_desc:
        "A sacred start—we seek Lord Ganesh Ji’s blessings for harmony and auspicious beginnings for all our festivities.",
      ev_ganesh_theme: "Serene dawn, marigold and ivory—peaceful, devotional tones.",
      ev_ganesh_dress: "Traditional Indian attire; light pastels, white, or cream preferred.",
      ev_chak_time: "8–9 AM",
      ev_chak_title: "Chak Bhaat",
      ev_chak_desc: "A warm morning with loved ones—shared rituals and laughter over a traditional spread.",
      ev_chak_theme: "Homely warmth—fresh florals and earthy tones.",
      ev_chak_dress: "Comfortable ethnic or smart-casual for a relaxed morning.",
      ev_haldi_time: "10:30–1:30",
      ev_haldi_title: "Haldi",
      ev_haldi_desc: "A vibrant Haldi carnival—golden hues, music, and blessings before the big day.",
      ev_haldi_theme: "Sunshine and joy—yellows, whites, and bursts of green.",
      ev_haldi_dress: "Yellow, white, or cream; avoid black. Flowy fabrics welcome.",
      ev_sagai_time: "3 PM – 5 PM",
      ev_sagai_title: "Sagai",
      ev_sagai_desc: "Ring ceremony and celebration—a promise sealed with rings, full of cheer and tradition.",
      ev_sagai_theme: "Festive romance—blush, gold accents, candlelight softness.",
      ev_sagai_dress: "Festive Indian or Indo-western; semi-formal welcome.",
      ev_sangeet_time: "7 PM onwards",
      ev_sangeet_title: "Ladies sangeet",
      ev_sangeet_desc: "Songs, dance, and sparkle—a vibrant night celebrating the women who light up our lives.",
      ev_sangeet_theme: "Bollywood glam—sequins, jewel tones, fairy lights.",
      ev_sangeet_dress: "Festive lehengas, gowns, or shararas; statement jewellery encouraged.",
      ev_baarat_time: "6:15 PM",
      ev_baarat_title: "Baarat Swagat",
      ev_baarat_desc: "Drums, colour, and joy—we welcome the baarat with open arms and dancing feet.",
      ev_baarat_theme: "Royal procession—rich reds, gold, and festive marquee.",
      ev_baarat_dress: "Traditional Indian festive; comfortable footwear for dancing.",
      ev_phere_time: "7:15 PM",
      ev_phere_title: "Phere",
      ev_phere_desc: "Around the sacred fire we take our vows—your blessings mean the world to us.",
      ev_phere_theme: "Timeless mandap elegance—jasmine, deep greens, gold accents.",
      ev_phere_dress: "Wedding-traditional; guests in formal Indian attire.",
      ev_reception_time: "9 PM onwards",
      ev_reception_title: "Reception",
      ev_reception_desc: "Dinner, toasts, and dancing—let’s celebrate late into the night.",
      ev_reception_theme: "Evening glamour—crystal lights and starlit celebration.",
      ev_reception_dress: "Formal evening Indian or black-tie optional.",
      quote_inline:
        "May your home be filled with laughter, your hearts with patience, and your days with countless small joys.",
      location_title: "Location",
      location_address: "Surbhi Sadan, Pinjrapol Gaushala, Sanganer Jaipur Rajasthan",
      btn_maps: "Open in Google Maps",
      footer_blessing: "With all our love and gratitude",
    },
    hi: {
      doc_title: "ओजस्वी और अमन | विवाह",
      meta_description: "ओजस्वी और अमन — विवाह समारोह, 21–22 जुलाई 2026",
      envelope_heading: "आप आमंत्रित हैं",
      envelope_open_btn: "निमंत्रण खोलें",
      nav_open_menu: "मेनू खोलें",
      nav_home: "मुख्य पृष्ठ",
      nav_story: "हमारी कहानी",
      nav_schedule: "कार्यक्रम",
      nav_location: "स्थान",
      nav_aria_main: "मुख्य",
      lang_switch_to_hi: "हिंदी",
      lang_switch_to_en: "English",
      lang_toggle_aria_hi: "साइट की भाषा हिंदी में बदलें",
      lang_toggle_aria_en: "साइट की भाषा अंग्रेज़ी में बदलें",
      hero_blessing:
        "आपके संग की यह मुबारकबाद हो कि आपका प्यार हर सूर्योदय के साथ और गहराता जाए।",
      hero_kicker: "अपने परिवारों के साथ, हम आपको उत्सव में शामिल होने का निमंत्रण देते हैं",
      countdown_label: "शादी की उलटी गिनती",
      cd_days: "दिन",
      cd_hours: "घंटे",
      cd_mins: "मिनट",
      cd_secs: "सेकंड",
      btn_view: "समारोह देखें",
      scroll_hint: "स्क्रॉल करें",
      story_quote:
        "दो दिल, एक सफ़र। हम सदा के लिए हाथ थामे कदम बढ़ा रहे हैं—आशीर्वाद दीजिएगा।",
      story_cite: "— प्यार भरा, ओजस्वी और अमन",
      story_lead:
        "हम उन सभी के आभारी हैं जिन्होंने हमारे रास्ते बनाए और हमें इस पल तक पहुँचाया। आपकी उपस्थिति हमारी शादी को पूरा कर देगी—कृपया हमारे साथ जुड़ें जब हम अपने प्रियजनों के बीच नया अध्याय शुरू करें।",
      schedule_title: "समारोह",
      section_sub_1: "सभी कार्यक्रम एक ही स्थान पर होंगे—पता और रास्ते के लिए पृष्ठ के अंत में ",
      section_sub_link: "स्थान",
      section_sub_2:
        " देखें। जहाँ संभव हो पारंपरिक भारतीय पोशाक में आएं—आपकी मेज़बानी का हमें बेसब्री से इंतज़ार है।",
      day_tabs_aria: "विवाह के दिन",
      tab_day1: "21 जुलाई 2026",
      tab_day2: "22 जुलाई 2026",
      lbl_theme: "विषय:",
      lbl_dress: "पोशाक:",
      btn_details: "विवरण",
      btn_hide_details: "विवरण छिपाएँ",
      ev_ganesh_time: "सुबह 5 बजे",
      ev_ganesh_title: "गणेश स्थापना",
      ev_ganesh_desc:
        "पावन शुरुआत—हम सभी समारोहों के लिए सौहार्द और शुभारंभ हेतु गणेश जी का आशीर्वाद माँगते हैं।",
      ev_ganesh_theme: "शांत भोर, गेंदा और हाथीदांत—शांत, भक्तिमय रंग।",
      ev_ganesh_dress: "पारंपरिक भारतीय पोशाक; हल्के पेस्टल, सफ़ेद या क्रीम वरीय।",
      ev_chak_time: "8–9 सुबह",
      ev_chak_title: "चक भात",
      ev_chak_desc:
        "प्रियजनों के साथ गर्मजोशी भरी सुबह—साझा रस्में और पारंपरिक व्यंजनों पर हँसी-मज़ाक।",
      ev_chak_theme: "घर जैसी गर्माहट—ताज़े फूल और मिट्टी के रंग।",
      ev_chak_dress: "आरामदायक एथनिक या स्मार्ट-कैज़ुअल।",
      ev_haldi_time: "10:30–1:30",
      ev_haldi_title: "हल्दी",
      ev_haldi_desc:
        "एक जीवंत हल्दी उत्सव—सुनहरे रंग, संगीत और बड़े दिन से पहले आशीर्वाद।",
      ev_haldi_theme: "धूप और खुशी—पीला, सफ़ेद और हरे के छिटकाव।",
      ev_haldi_dress: "पीला, सफ़ेद या क्रीम; काला टालें। ढीले कपड़े आमंत्रित हैं।",
      ev_sagai_time: "3 – 5 शाम",
      ev_sagai_title: "सगाई",
      ev_sagai_desc:
        "अंगूठी की रस्म और जश्न—अंगूठियों से सिली प्रतिज्ञा, खुशी और रिवाज़ से भरा।",
      ev_sagai_theme: "उत्सवी रोमांस—गुलाबी, सुनहरे अलंकार, मधुर रोशनी।",
      ev_sagai_dress: "उत्सवी भारतीय या इंडो-वेस्टर्न; अर्ध-औपचारिक आमंत्रित।",
      ev_sangeet_time: "7 शाम से आगे",
      ev_sangeet_title: "लेडीज़ संगीत",
      ev_sangeet_desc:
        "गीत, नृत्य और चमक—उन महिलाओं का जश्न जो हमारे जीवन को रोशन करती हैं।",
      ev_sangeet_theme: "बॉलीवुड ग्लैम—सिक्विन, रत्न जैसे रंग, परी रोशनी।",
      ev_sangeet_dress: "उत्सवी लहंगे, गाउन या शरारा; नायाब गहनों के लिए हाँ।",
      ev_baarat_time: "6:15 शाम",
      ev_baarat_title: "बारात स्वागत",
      ev_baarat_desc:
        "ढोल, रंग और उल्लास—हम बारात का खुले दिल और नाचते कदमों से स्वागत करते हैं।",
      ev_baarat_theme: "शाही जुलूस—गहरा लाल, सोना और उत्सवी मंच।",
      ev_baarat_dress: "पारंपरिक भारतीय उत्सवी; नाचने के लिए आरामदायक जूते।",
      ev_phere_time: "7:15 शाम",
      ev_phere_title: "फेरे",
      ev_phere_desc:
        "पवित्र अग्नि के चारों ओर हम वचन लेते हैं—आपका आशीर्वाद हमारे लिए सर्वस्व है।",
      ev_phere_theme: "कालातीत मंडप की शोभा—चमेली, गहरा हरा, सुनहरे अलंकार।",
      ev_phere_dress: "विवाह-पारंपरिक; अतिथि औपचारिक भारतीय पोशाक में।",
      ev_reception_time: "9 शाम से आगे",
      ev_reception_title: "रिसेप्शन",
      ev_reception_desc: "रात्रिभोज, भावनाएँ और नृत्य—रात देर तक मनाएँ।",
      ev_reception_theme: "शाम की शानदारता—क्रिस्टल रोशनी और तारों सा उत्सव।",
      ev_reception_dress: "औपचारिक शाम की भारतीय पोशाक या ब्लैक-टाई वैकल्पिक।",
      quote_inline:
        "आपका घर हँसी से भरा रहे, दिलों में धैर्य हो, और दिन छोटी-छोटी खुशियों से।",
      location_title: "स्थान",
      location_address: "सुरभि सदन, पिंजरापोल गौशाला, सांगानेर जयपुर राजस्थान",
      btn_maps: "गूगल मैप्स में खोलें",
      footer_blessing: "सारा प्यार और आभार सहित",
    },
  };

  var current = "en";

  function applyLang(lang) {
    if (lang !== "en" && lang !== "hi") lang = "en";
    current = lang;
    try {
      global.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}

    document.documentElement.lang = lang === "hi" ? "hi" : "en";
    document.body.classList.toggle("lang-hi", lang === "hi");

    var pack = STR[lang];
    document.title = pack.doc_title;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", pack.meta_description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!k || pack[k] === undefined) return;
      if (el.getAttribute("data-i18n-html") === "true") {
        el.innerHTML = pack[k];
      } else {
        el.textContent = pack[k];
      }
    });

    document.querySelectorAll(".event-more").forEach(function (b) {
      var ex = b.getAttribute("aria-expanded") === "true";
      b.textContent = ex ? pack.btn_hide_details : pack.btn_details;
    });

    var navToggle = document.querySelector(".nav-toggle");
    if (navToggle) navToggle.setAttribute("aria-label", pack.nav_open_menu);
    var mainNav = document.querySelector(".main-nav");
    if (mainNav) mainNav.setAttribute("aria-label", pack.nav_aria_main);
    var dayTabs = document.querySelector(".day-tabs");
    if (dayTabs) dayTabs.setAttribute("aria-label", pack.day_tabs_aria);

    document.querySelectorAll(".lang-toggle").forEach(function (toggle) {
      var lbl = toggle.querySelector(".lang-toggle-label");
      if (lbl)
        lbl.textContent =
          lang === "en" ? STR.en.lang_switch_to_hi : STR.hi.lang_switch_to_en;
      toggle.setAttribute("aria-pressed", lang === "hi" ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        lang === "en" ? pack.lang_toggle_aria_hi : pack.lang_toggle_aria_en
      );
    });
  }

  function init() {
    var saved = null;
    try {
      saved = global.localStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (saved === "hi" || saved === "en") current = saved;
    else current = "en";

    applyLang(current);

    document.querySelectorAll(".lang-toggle").forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        applyLang(current === "en" ? "hi" : "en");
      });
    });
  }

  global.InviteI18n = {
    init: init,
    apply: applyLang,
    getLang: function () {
      return current;
    },
    t: function (key) {
      return STR[current][key] !== undefined ? STR[current][key] : STR.en[key] !== undefined ? STR.en[key] : key;
    },
  };
})(window);
