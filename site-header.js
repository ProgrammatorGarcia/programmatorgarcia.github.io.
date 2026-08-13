(function () {
    "use strict";

    function addSiteHeader() {
        if (!document.body || document.querySelector(".site-banner")) {
            return;
        }

        var pageTitle = (document.title || "Logic & Computation")
            .replace(/\s+/g, " ")
            .trim();

        var header = document.createElement("header");
        header.className = "site-banner";
        header.innerHTML =
            '<div class="site-banner__shade" aria-hidden="true"></div>' +
            '<div class="site-banner__inner">' +
                '<p class="site-banner__eyebrow">Veritas Preparatory Academy</p>' +
                '<a class="site-banner__brand" href="index.html">Logic &amp; Computation</a>' +
                '<p class="site-banner__page">' + escapeHtml(pageTitle) + '</p>' +
                '<nav class="site-banner__nav" aria-label="Course navigation">' +
                    '<a href="index.html">Home</a>' +
                    '<a href="index.html#assignments">Assignments</a>' +
                    '<a href="index.html#archive">Archive</a>' +
                    '<a href="12th%20Logic_A%20Concise%20Introduction%20REDUCED.pdf">DeLancey PDF</a>' +
                '</nav>' +
            '</div>';

        document.body.insertBefore(header, document.body.firstChild);
        addPageEmblem();
        document.documentElement.classList.add("site-shell-ready");
    }

    function addPageEmblem() {
        var heading = document.querySelector("body > h1:first-of-type");
        var surface = heading || document.querySelector(".home-card--accent") || document.querySelector(".hero");
        var holder;
        var emblem;
        var source;

        if (!surface || surface.querySelector(".page-title__emblem")) {
            return;
        }

        surface.classList.add("page-title-surface");
        holder = heading ? heading.querySelector("div") : null;

        if (!holder) {
            holder = document.createElement("div");
            surface.appendChild(holder);
        }

        holder.classList.add("page-title__emblem");
        emblem = holder.querySelector("img");

        if (!emblem) {
            emblem = document.createElement("img");
            emblem.src = "Veritas_crest_1C.png";
            emblem.alt = "Veritas Preparatory Academy crest";
            holder.appendChild(emblem);
        }

        emblem.classList.add("page-title__emblem-image");
        source = emblem.getAttribute("src") || "";

        if (source.indexOf("Veritas_crest_1C.png") === -1) {
            holder.classList.add("page-title__emblem--themed");
        } else if (!emblem.alt) {
            emblem.alt = "Veritas Preparatory Academy crest";
        }
    }

    function escapeHtml(value) {
        return value
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", addSiteHeader);
    } else {
        addSiteHeader();
    }
}());
