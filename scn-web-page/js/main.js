// mod Accordion
document.addEventListener('DOMContentLoaded', () =>{
  const modContainer = document.querySelector('.mod-content');

  modContainer.addEventListener('click', (e) => {
    const groupHeader = e.target.closest('.mod-group-header');
    
    if (!groupHeader) return;
    
    const group = groupHeader.parentElement;
    const groupBody = group.querySelector('.mod-group-body');
    const icon = groupHeader.querySelector('i');

    //Toggle icon
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');

    // Toggle visivility of body
    groupBody.classList.toggle('open')

    // Close other open mod bodies
    const otherGroups = modContainer.querySelectorAll('.mod-group');
    
    otherGroups.forEach((otherGroup) => {
      if(otherGroup !== group) {
        const otherGroupBody = otherGroup.querySelector('.mod-group-body');
        const otherIcon = otherGroup.querySelector('.mod-group-header i');

        otherGroupBody.classList.remove('open');
        otherIcon.classList.remove('fa-chevron-up');
        otherIcon.classList.add('fa-chevron-down');
      }
    });
  });
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburguerButton.addEventListener('click', () => 
    mobileMenu.classList.toggle('active')
  );
});

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
  const hamburgerButton = document.querySelector('.hamburger-button');
  const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a'); // selection of all links


  hamburgerButton.addEventListener('click', () =>
    mobileMenu.classList.toggle('active')
  );


  // Close open menu when clicked
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
    });
  });
});

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Copy button
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", () => {
    const codeBlock = button.nextElementSibling.innerText;

    navigator.clipboard.writeText(codeBlock).then(() => {
      button.innerHTML = '<i class="fa-solid fa-check"></i>'; 
      setTimeout(() => {
        button.innerHTML = '<i class="fa-solid fa-copy"></i>';
      }, 2000);
    });
  });
});