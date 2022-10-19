 // File Name: app.js
 // Student Name: Marco Favaretto
 // Student ID: 301186334
 // Date: 09/30/2022

// IIFE -- Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log("App Started...");
        let deletebuttons = document.querySelectorAll(".btn-danger");
        for (button of deletebuttons) {
            button.addEventListener("click", (event) => {
                if (!confirm("Are you sure you want to delete this contact?")) {
                    event.preventDefault();
                    window.location.assign("/contact-list");
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();