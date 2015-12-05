"use strict";

document
	.addEventListener(
		"DOMContentLoaded",
		function() {
		    document.body.classList.add("js");

		    var currentFigureTag = null, mainTag = document
			    .getElementsByTagName("main")[0], figureTags = mainTag
			    .getElementsByTagName("figure"), prevTagHref, nextTagHref, prevTag = document
			    .createElement("a"), nextTag = document
			    .createElement("a");

		    prevTag.innerHTML = "« Zurück";
		    prevTag.classList.add("gallery-button", "prev");
		    mainTag.appendChild(prevTag);
		    nextTag.innerHTML = "Weiter »";
		    nextTag.classList.add("gallery-button", "next");
		    mainTag.appendChild(nextTag);

		    window
			    .addEventListener(
				    "hashchange",
				    function() {
					if (currentFigureTag !== null) {
					    currentFigureTag.classList
						    .remove("shown");
					}
					if (window.location.hash === "") { // Set
									    // Hash
									    // to
									    // first
					    // figure
					    currentFigureTag = figureTags[0];
					    nextTagHref = figureTags[1].dataset.anchor;
					    prevTagHref = figureTags[figureTags.length - 1].dataset.anchor;
					    window.location.hash = currentFigureTag.dataset.anchor;
					} else { // Set figure from Hash
					    for (var index = 0; index < figureTags.length; index++) {
						if (window.location.hash === "#"
							+ figureTags[index].dataset.anchor) {
						    currentFigureTag = figureTags[index];
						    prevTagHref = (index === 0) ? figureTags[figureTags.length - 1].dataset.anchor
							    : figureTags[index - 1].dataset.anchor;
						    nextTagHref = (index === figureTags.length - 1) ? figureTags[0].dataset.anchor
							    : figureTags[index + 1].dataset.anchor;
						}
					    }
					}
					if (currentFigureTag !== null) {
					    currentFigureTag.classList
						    .add("shown");
					}

					prevTag.setAttribute("href", "#"
						+ prevTagHref);
					nextTag.setAttribute("href", "#"
						+ nextTagHref);
				    }, false);
		    window.dispatchEvent(new HashChangeEvent("hashchange"));
		}, false);