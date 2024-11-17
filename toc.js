// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><li class="part-title">Getting Started</li><li class="chapter-item expanded "><a href="preface/02-overview-of-the-athenacl-system.html"><strong aria-hidden="true">1.</strong> Overview of the athenaCL System</a></li><li class="chapter-item expanded "><a href="preface/03-getting-started-and-advanced-work.html"><strong aria-hidden="true">2.</strong> Getting Started and Advanced Work</a></li><li class="chapter-item expanded "><a href="preface/04-more-information.html"><strong aria-hidden="true">3.</strong> More Information</a></li><li class="chapter-item expanded "><a href="preface/05-conventions-used-in-this-manual.html"><strong aria-hidden="true">4.</strong> Conventions Used in this Manual</a></li><li class="chapter-item expanded "><a href="preface/06-production-of-this-manual.html"><strong aria-hidden="true">5.</strong> Production of this Manual</a></li><li class="chapter-item expanded "><a href="getting-started.html"><strong aria-hidden="true">6.</strong> Installation</a></li><li class="chapter-item expanded affix "><li class="part-title">Tutorials</li><li class="chapter-item expanded "><a href="chapter01/01-tutorial-1-the-interactive-command-line-interface.html"><strong aria-hidden="true">7.</strong> Tutorial 1: The Interactive Command Line Interface</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter01/02-starting-the-athenacl-interpreter.html"><strong aria-hidden="true">7.1.</strong> Starting the athenaCL Interpreter</a></li><li class="chapter-item expanded "><a href="chapter01/03-introduction-to-commands.html"><strong aria-hidden="true">7.2.</strong> Introduction to Command</a></li><li class="chapter-item expanded "><a href="chapter01/04-viewing-command-names.html"><strong aria-hidden="true">7.3.</strong> Viewing Command Name</a></li><li class="chapter-item expanded "><a href="chapter01/05-executing-commands.html"><strong aria-hidden="true">7.4.</strong> Executing Command</a></li><li class="chapter-item expanded "><a href="chapter01/06-getting-help-for-commands.html"><strong aria-hidden="true">7.5.</strong> Getting Help for Command</a></li><li class="chapter-item expanded "><a href="chapter01/07-configuring-the-user-environment.html"><strong aria-hidden="true">7.6.</strong> Configuring the User Environment</a></li></ol></li><li class="chapter-item expanded "><a href="chapter02/01-tutorial-2-athenaobjects-and-eventmodes.html"><strong aria-hidden="true">8.</strong> Tutorial 2: AthenaObjects and EventModes</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter02/02-introduction-to-athenaobjects.html"><strong aria-hidden="true">8.1.</strong> Introduction to AthenaObjects</a></li><li class="chapter-item expanded "><a href="chapter02/03-loading-and-removing-an-athenaobject.html"><strong aria-hidden="true">8.2.</strong> Loading and Removing an AthenaObject</a></li><li class="chapter-item expanded "><a href="chapter02/04-eventmodes-and-eventoutputs.html"><strong aria-hidden="true">8.3.</strong> EventModes and EventOutputs</a></li><li class="chapter-item expanded "><a href="chapter02/05-creating-an-eventlist.html"><strong aria-hidden="true">8.4.</strong> Creating an EventList</a></li><li class="chapter-item expanded "><a href="chapter02/06-configuring-and-using-csound.html"><strong aria-hidden="true">8.5.</strong> Configuring and Using Csound</a></li><li class="chapter-item expanded "><a href="chapter02/07-saving-and-merging-athenaobjects.html"><strong aria-hidden="true">8.6.</strong> Saving and Merging AthenaObjects</a></li></ol></li><li class="chapter-item expanded "><a href="chapter03/01-tutorial-3-creating-and-editing-paths.html"><strong aria-hidden="true">9.</strong> Tutorial 3: Creating and Editing Paths</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter03/02-introduction-to-paths.html"><strong aria-hidden="true">9.1.</strong> Introduction to Paths</a></li><li class="chapter-item expanded "><a href="chapter03/03-creating-selecting-and-viewing-pathinstances.html"><strong aria-hidden="true">9.2.</strong> Creating Selecting and Viewing PathInstances</a></li><li class="chapter-item expanded "><a href="chapter03/04-copying-and-removing-pathinstances.html"><strong aria-hidden="true">9.3.</strong> Copying and Removing PathInstances</a></li><li class="chapter-item expanded "><a href="chapter03/05-editing-pathinstances.html"><strong aria-hidden="true">9.4.</strong> Editing PathInstances</a></li></ol></li><li class="chapter-item expanded "><a href="chapter04/01-tutorial-4-creating-and-editing-textures.html"><strong aria-hidden="true">10.</strong> Tutorial 4: Creating and Editing Textures</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter04/02-introduction-to-textures-and-parameterobjects.html"><strong aria-hidden="true">10.1.</strong> Introduction to Textures and ParameterObjects</a></li><li class="chapter-item expanded "><a href="chapter04/03-introduction-instrument-models.html"><strong aria-hidden="true">10.2.</strong> Introduction Instrument Models</a></li><li class="chapter-item expanded "><a href="chapter04/04-selecting-and-viewing-texturemodules.html"><strong aria-hidden="true">10.3.</strong> Selecting and Viewing TextureModules</a></li><li class="chapter-item expanded "><a href="chapter04/05-creating-selecting-and-viewing-textureinstances.html"><strong aria-hidden="true">10.4.</strong> Creating Selecting and Viewing TextureInstances</a></li><li class="chapter-item expanded "><a href="chapter04/06-copying-and-removing-texture-instances.html"><strong aria-hidden="true">10.5.</strong> Copying and Removing Texture instances</a></li><li class="chapter-item expanded "><a href="chapter04/07-editing-textureinstance-attributes.html"><strong aria-hidden="true">10.6.</strong> Editing TextureInstance Attributes</a></li><li class="chapter-item expanded "><a href="chapter04/08-muting-textures.html"><strong aria-hidden="true">10.7.</strong> Muting Textures</a></li><li class="chapter-item expanded "><a href="chapter04/09-viewing-and-searching-parameterobjects.html"><strong aria-hidden="true">10.8.</strong> Viewing and Searching ParameterObjects</a></li><li class="chapter-item expanded "><a href="chapter04/010-editing-parameterobjects.html"><strong aria-hidden="true">10.9.</strong> Editing ParameterObjects</a></li><li class="chapter-item expanded "><a href="chapter04/011-editing-rhythm-parameterobjects.html"><strong aria-hidden="true">10.10.</strong> Editing Rhythm ParameterObjects</a></li><li class="chapter-item expanded "><a href="chapter04/012-editing-instruments-and-altering-eventmode.html"><strong aria-hidden="true">10.11.</strong> Editing Instruments and Altering EventMode</a></li><li class="chapter-item expanded "><a href="chapter04/013-displaying-texture-parameter-values.html"><strong aria-hidden="true">10.12.</strong> Displaying Texture Parameter Values</a></li></ol></li><li class="chapter-item expanded "><a href="chapter05/01-tutorial-5-textures-and-paths.html"><strong aria-hidden="true">11.</strong> Tutorial 5: Textures and Paths</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter05/02-path-linking-and-pitch-formation-redundancy.html"><strong aria-hidden="true">11.1.</strong> Path Linking and Pitch Formation Redundancy</a></li><li class="chapter-item expanded "><a href="chapter05/03-creating-a-path-with-a-duration-fraction.html"><strong aria-hidden="true">11.2.</strong> Creating a Path With a Duration Fraction</a></li><li class="chapter-item expanded "><a href="chapter05/04-setting-eventmode-and-creating-a-texture.html"><strong aria-hidden="true">11.3.</strong> Setting EventMode and Creating a Texture</a></li><li class="chapter-item expanded "><a href="chapter05/05-pitchmode.html"><strong aria-hidden="true">11.4.</strong> PitchMode</a></li><li class="chapter-item expanded "><a href="chapter05/06-editing-local-octave.html"><strong aria-hidden="true">11.5.</strong> Editing Local Octave</a></li><li class="chapter-item expanded "><a href="chapter05/07-editing-local-field-and-temperament.html"><strong aria-hidden="true">11.6.</strong> Editing Local Field and Temperament</a></li></ol></li><li class="chapter-item expanded "><a href="chapter06/01-tutorial-6-textures-and-clones.html"><strong aria-hidden="true">12.</strong> Tutorial 6: Textures and Clones</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter06/02-introduction-to-clones.html"><strong aria-hidden="true">12.1.</strong> Introduction to Clones</a></li><li class="chapter-item expanded "><a href="chapter06/03-creating-and-editing-clones.html"><strong aria-hidden="true">12.2.</strong> Creating and Editing Clones</a></li></ol></li><li class="chapter-item expanded "><a href="chapter07/01-tutorial-7-scripting-athenacl-in-python.html"><strong aria-hidden="true">13.</strong> Tutorial 7: Scripting athenaCL in Python</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chapter07/02-creating-an-athenacl-interpreter-within-python.html"><strong aria-hidden="true">13.1.</strong> Creating an athenaCL Interpreter Within Python</a></li><li class="chapter-item expanded "><a href="chapter07/03-creating-athenacl-generator-parameterobjects-within-python.html"><strong aria-hidden="true">13.2.</strong> Creating athenaCL Generator ParameterObjects Within Python</a></li><li class="chapter-item expanded "><a href="chapter07/04-creating-athenacl-generator-parameterobjects-within-csound.html"><strong aria-hidden="true">13.3.</strong> Creating athenaCL Generator ParameterObjects Within Csound</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
