
// Tento kód přidává menu do elementu s ID 'navbar'

document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar");
    if (navbar) {
        navbar.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="https://www.google.cz" target="_blank" style="font-size:80%;">Google</a>

                    <span>Web o ZAL-auto - Centrálně spravované menu</span>
                    <div class="dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Menu
                        </a>
                        <div class="dropdown-menu bg-dark">

                            <a class="dropdown-item text-white" href="./zal-zadani.html"> </i> Zadani</a>
                            <a class="dropdown-item text-white" href="./zal-reseni.html"> </i> reseni</a>
                            <a class="dropdown-item text-white" href="./zal-zaver.html"> </i> zaver</a>

                        </div>
                        
                    </div>
                </div>
            </nav>
        `;
    }
});

// <i class="fas fa-image"></i>
// <i class="fas fa-file-image"></i>
// <i class="fas fa-file-archive"></i>
// <i class="fas fa-vector-square"></i>
// nod/182e87a842.png
