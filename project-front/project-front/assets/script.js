// Navbar dropdown functionality with transition and blue hover
document.querySelectorAll('.navlis').forEach(function(item) {
  const caret = item.querySelector('.fa-caret-down');
  if (caret) {
    // Create dropdown menu if not exists
    let dropdown = item.querySelector('.dropdown-menu');
    if (!dropdown) {
      dropdown = document.createElement('ul');
      dropdown.className = 'dropdown-menu';
      dropdown.style.position = 'absolute';
      dropdown.style.top = '100%';
      dropdown.style.left = '0';
      dropdown.style.background = '#393646';
      dropdown.style.minWidth = '220px';
      dropdown.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
      dropdown.style.zIndex = '1000';
      dropdown.style.padding = '0';
      dropdown.style.margin = '0';
      dropdown.style.borderRadius = '0 0 8px 8px';
      dropdown.style.display = 'none';
      dropdown.style.transition = 'opacity 0.3s';

      // Dropdown items based on menu text
      let items = [];
      switch (item.querySelector('.linkN').textContent.trim()) {
        case 'Home':
          items = ['Home 1', 'Home 2', 'Home 3', 'RTL Version'];
          break;
        case 'Features':
          items = ['Feature 1', 'Feature 2'];
          break;
        case 'About Us':
          items = ['About 1', 'About 2'];
          break;
        case 'Listing':
          items = ['Listing 1', 'Listing 2'];
          break;
        case 'Gallery':
          items = ['Gallery 1', 'Gallery 2'];
          break;
        case 'Blog':
          items = ['Blog 1', 'Blog 2'];
          break;
      }
      items.forEach(function(text) {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.margin = '0';
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        a.style.display = 'block';
        a.style.padding = '14px 28px';
        a.style.color = '#fff';
        a.style.textDecoration = 'none';
        a.style.fontWeight = '500';
        a.style.transition = 'background 0.3s, color 0.3s';
        a.addEventListener('mouseenter', function() {
          a.style.background = '#a3a8e7';
          a.style.color = '#393646';
        });
        a.addEventListener('mouseleave', function() {
          a.style.background = 'none';
          a.style.color = '#fff';
        });
        li.appendChild(a);
        dropdown.appendChild(li);
      });
      item.appendChild(dropdown);
    }
    item.addEventListener('mouseenter', function() {
      dropdown.style.display = 'block';
      dropdown.style.opacity = '1';
    });
    item.addEventListener('mouseleave', function() {
      dropdown.style.opacity = '0';
      setTimeout(function() {
        dropdown.style.display = 'none';
      }, 300);
    });
    item.style.position = 'relative';
  }
});



// Dropdown functionality for About Nav with blue hover
document.querySelectorAll('.navlis').forEach(function(item) {
  const caret = item.querySelector('.fa-caret-down');
  if (caret) {
    // Create dropdown menu if not exists
    let dropdown = item.querySelector('.dropdown-menu');
    if (!dropdown) {
      dropdown = document.createElement('ul');
      dropdown.className = 'dropdown-menu';
      dropdown.style.position = 'absolute';
      dropdown.style.top = '100%';
      dropdown.style.left = '0';
      dropdown.style.background = 'rgba(57, 54, 70, 0.95)';
      dropdown.style.minWidth = '220px';
      dropdown.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
      dropdown.style.zIndex = '1000';
      dropdown.style.padding = '0';
      dropdown.style.margin = '0';
      dropdown.style.borderRadius = '0 0 8px 8px';
      dropdown.style.display = 'none';
      dropdown.style.transition = 'opacity 0.3s';

      // Dropdown items based on menu text
      let items = [];
      switch (item.querySelector('.linkNAbout').textContent.trim()) {
        case 'Home':
          items = ['Home 1', 'Home 2', 'Home 3', 'RTL Version'];
          break;
        case 'Features':
          items = ['Feature 1', 'Feature 2'];
          break;
        case 'About Us':
          items = ['About 1', 'About 2'];
          break;
        case 'Listing':
          items = ['Listing 1', 'Listing 2'];
          break;
        case 'Gallery':
          items = ['Gallery 1', 'Gallery 2'];
          break;
        case 'Blog':
          items = ['Blog 1', 'Blog 2'];
          break;
      }
      items.forEach(function(text) {
        const li = document.createElement('li');
        li.style.listStyle = 'none';
        li.style.margin = '0';
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = text;
        a.style.display = 'block';
        a.style.padding = '14px 28px';
        a.style.color = '#fff';
        a.style.textDecoration = 'none';
        a.style.fontWeight = '500';
        a.style.transition = 'background 0.3s, color 0.3s';
        a.addEventListener('mouseenter', function() {
          a.style.background = '#a3a8e7';
          a.style.color = '#393646';
        });
        a.addEventListener('mouseleave', function() {
          a.style.background = 'none';
          a.style.color = '#fff';
        });
        li.appendChild(a);
        dropdown.appendChild(li);
      });
      item.appendChild(dropdown);
    }
    item.addEventListener('mouseenter', function() {
      dropdown.style.display = 'block';
      dropdown.style.opacity = '1';
    });
    item.addEventListener('mouseleave', function() {
      dropdown.style.opacity = '0';
      setTimeout(function() {
        dropdown.style.display = 'none';
      }, 300);
    });
    item.style.position = 'relative';
  }
});