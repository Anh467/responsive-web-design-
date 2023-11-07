// Add smooth scrolling to anchor links in the sidebar
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          behavior: 'smooth',
          top: targetElement.offsetTop,
        });
      }
    });
  });
  