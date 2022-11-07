function collapseAll() {
    document.querySelectorAll('.dropbtn').forEach(el => {
        el.ariaExpanded = false;
    })
    document.querySelectorAll('.dropdown-content').forEach(el => {
        el.classList.remove("show");
    });
}

// When the user clicks on the button, toggle between hiding and showing the dropdown content
for (const button of document.querySelectorAll('.dropbtn')) {
    button.onclick = event => {
        collapseAll();

        event.currentTarget.ariaExpanded = true;
        const id = event.currentTarget.dataset['dropdown'];
        document.querySelector(`.dropdown-content[data-dropdown="${id}"]`).classList.toggle("show");
        event.stopPropagation();
    }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    collapseAll();
}