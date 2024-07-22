const MobileMenuPanel = document.getElementById("mobile-menu");

const OpenButtonHamburger = document
    .getElementById("open-hamburger")
    .addEventListener("click", () => {
        MobileMenuPanel.style.display = "block";
        MobileMenuPanel.classList.remove("CloseMenu");
        MobileMenuPanel.classList.add("ShowMenu");
    });

const CloseButtonHamburger = document
    .getElementById("close-hamburger")
    .addEventListener("click", async () => {
        MobileMenuPanel.style.display = "none";
    });
