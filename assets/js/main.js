// Dark/Light color scheme switch button
// document.querySelector("#nav-switch-theme").style.display = "inline";
// document.querySelector("#nav-switch-theme").addEventListener("click", changeColorScheme);

// function changeColorScheme() {
//   // Use whatever users want
//   if (localStorage.getItem("colorScheme") === "dark") {
//     // Change to light theme
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches === false) {
//       document.querySelector("#dark-css").setAttribute("media", "(prefers-color-scheme: dark)");
//       localStorage.removeItem("colorScheme");
//     } else {
//       // by setting invalid media it will just not apply CSS for anyone
//       document.querySelector("#dark-css").setAttribute("media", "invalid");
//       localStorage.setItem("colorScheme", "light");
//     }
//   }
//   // Change to dark theme
//   else if (localStorage.getItem("colorScheme") === "light") {
//     if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
//       document.querySelector("#dark-css").setAttribute("media", "(prefers-color-scheme: dark)");
//       localStorage.removeItem("colorScheme");
//     } else {
//       // media was set to prefers-color-scheme: dark
//       document.querySelector("#dark-css").removeAttribute("media");
//       localStorage.setItem("colorScheme", "dark");
//     }
//   }

//   // Just use whatever browsers want
//   else if (window.matchMedia("(prefers-color-scheme: dark)").matches === true) {
//     // Change to light Theme
//     document.querySelector("#dark-css").setAttribute("media", "invalid");
//     localStorage.setItem("colorScheme", "light");
//   } else {
//     // Change to dark theme
//     document.querySelector("#dark-css").removeAttribute("media");
//     localStorage.setItem("colorScheme", "dark");
//   }
//   fixThemeImages();
// }


// // Fix images in dark theme
// function fixThemeImages() {
//   document.querySelectorAll('[data-theme-src]').forEach(function(image) {
//     tempSrc = image.src;
//     image.src = image.getAttribute("data-theme-src");
//     image.setAttribute("data-theme-src", tempSrc);
//   });
// }
// if (
//   (localStorage.getItem("colorScheme") === "dark") ||
//   (window.matchMedia("(prefers-color-scheme: dark)").matches ^
//     localStorage.getItem("colorScheme") === "light")
// ) {
//   fixThemeImages();
// }

// Back button after anchor link should return to previous page and not to same page
// From https://github.com/allejo/jekyll-anchor-headings/discussions/31#discussioncomment-564411
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.heading-anchor').forEach(function (el) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
  
      const hash = el.getAttribute('href');
      window.location.replace(('' + window.location).split('#')[0] + hash);
    });
  });
}, false);


//open external links in a new window
function external_new_window() {
    for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) {
        var b = c[a];
        if(b.getAttribute("href") && b.hostname !== location.hostname) {
            b.target = "_blank";
            b.rel = "noopener";
        }
    }
}
external_new_window();