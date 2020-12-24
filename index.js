let i = 1;
function addRow() {

    const divButton = document.createElement('li');
    var buttonspanel = document.getElementById('buttonsDiv');
    var tabspanel = document.getElementById('tabpanels');
  
    divButton.className = 'nav-item';
  
    divButton.innerHTML = `
    <a class="nav-link active" data-toggle="tab" href="#newtab${i}">New tab ${i}</a>
    `;
    //remove active class from current tab button
    document.getElementsByClassName('nav-link active').item(0).classList.remove("active");
    buttonspanel.insertBefore(divButton, buttonspanel.lastElementChild);

    
    const divPanel = document.createElement('div');

    divPanel.id = 'newtab'+i
    divPanel.className = 'container tab-pane fade show active';
    divPanel.innerHTML = `
    <br>
    <h3>New Tab ${i}</h3>
    <iframe class="ifram" src="https://codebeautify.org/xmlviewer#" title="description">
    `;
    document.getElementsByClassName('container tab-pane fade show active').item(0).classList.remove("active","show");
    tabspanel.insertBefore(divPanel, tabspanel.lastElementChild);

    i++;
  }

  function deleteTab() {
    $('#buttonsDiv li:last-child a').tab('dispose');
  }

