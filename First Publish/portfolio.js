document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.ulbarv a');
  links.forEach(link => {
      link.addEventListener('click', function (event) {
          event.preventDefault();
          const sectionId = link.getAttribute('href').substring(1);
          showSection(sectionId);
      });
  });

  showSection(window.location.hash.substring(1) || 'home');
});

function showSection(sectionId) {
  var sections = document.querySelectorAll('.content');
  sections.forEach(function (section) {
      section.style.display = 'none';
  });

  if (!sectionId || sectionId === 'home') {
      document.getElementById('home').style.display = 'block';
  } else {
      var selectedSection = document.getElementById(sectionId);
      if (selectedSection) {
          selectedSection.style.display = 'block';
      }
  }
}
var elementIntro = document.querySelector(".intro h1")

    function colorChangeIntro() {
      elementIntro.style.animation = "glowIntro 10s infinite";
      
    }
document.addEventListener("DOMContentLoaded", function() {
   var summaryParagraph = document.getElementById('summaryParagraph');
   var words = summaryParagraph.innerText.split(' ');
   var newContent = words.map(function(word) {
     return `<span class="word">${word}</span>`;
   }).join(' ');
   summaryParagraph.innerHTML = newContent;
   var wordSpans = document.querySelectorAll('.word');
   wordSpans.forEach(function(wordSpan) {
     wordSpan.addEventListener('mouseover', function() {
       colorChangeWord(wordSpan, true);
     });
 
     wordSpan.addEventListener('mouseout', function() {
       colorChangeWord(wordSpan, false);
     });
   });
 });
 function colorChangeWord(element, enableGlow) {
   if (enableGlow) {
     element.style.color = "white";
     element.style.textShadow = "0 0 3px lime";
   } else {
     element.style.color = "black"; 
     element.style.textShadow = "none"; 
   }
 }
 
 
 document.addEventListener("DOMContentLoaded", function() {
   var liElements = document.querySelectorAll('ul li');
   applyGlowToLi(liElements);
 });
 
 function applyGlowToLi(elements) {
   if (elements) {
     elements.forEach(function(element) {
       var words = element.innerText.split(' ').map(function(word) {
         return '<span onmouseover="colorChangeWord(this, true)" onmouseout="colorChangeWord(this, false)">' + word + '</span>';
       }).join(' ');
       element.innerHTML = words;
     });
   }
 }
 
 function colorChangeWord(wordElement, enableGlow) {
   if (enableGlow) {
     wordElement.style.color = "white";
     wordElement.style.textShadow = "0 0 3px lime";
   } else {
     wordElement.style.color = "black";
     wordElement.style.textShadow = "none";
   }
 }
 
 function togglew() {
  var x = document.getElementById("WHM");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function toggleL() {
  var x = document.getElementById("LL");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function toggleG() {
  var x = document.getElementById("GM");
  if (x.style.display === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}
function showSection(sectionId) {
  var sections = document.querySelectorAll('.content');
  sections.forEach(function(section) {
    section.style.display = 'none';
  });

  if (!sectionId || sectionId === 'home') {
    document.getElementById('home').style.display = 'block';
  } else {
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }
  }
}
    document.addEventListener('DOMContentLoaded', function () {
      const header = document.querySelector('header');
      const sections = document.querySelectorAll('section');
  
      document.querySelectorAll('.ulbarv a').forEach(function (link, index) {
        link.addEventListener('click', function () {
          sections.forEach(function (section) {
            section.classList.remove('open');
          });
  
          sections[index].classList.add('open');
  
          header.classList.toggle('closed');
        });
      });
    });
  
    function toggleHeader() {
      const header = document.querySelector('header');
      header.classList.toggle('closed');
    }