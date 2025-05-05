document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los elementos de la biblioteca (música y videojuegos)
    let items = document.querySelectorAll(".item");

    // 🎨 Resaltar elementos al pasar el cursor
    items.forEach(item => {
        item.addEventListener("mouseenter", function () {
            item.style.backgroundColor = "#ffef96"; // Amarillo suave
        });
        item.addEventListener("mouseleave", function () {
            item.style.backgroundColor = "#fff"; // Color original
        });
    });

    // 🔎 Búsqueda en tiempo real
    document.getElementById("buscar").addEventListener("input", function () {
        let query = this.value.toLowerCase();
        localStorage.setItem("ultimaBusqueda", query); // Guardar búsqueda

        items.forEach(item => {
            if (item.innerText.toLowerCase().includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // 🏆 Botón de búsqueda (opcional si quieres un botón para ejecutar manualmente)
    document.getElementById("buscarBtn").addEventListener("click", function () {
        let input = document.getElementById("buscar").value.toLowerCase();

        items.forEach(item => {
            if (item.innerText.toLowerCase().includes(input)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });

    // 🔄 Recuperar última búsqueda al cargar
    let ultimaBusqueda = localStorage.getItem("ultimaBusqueda");
    if (ultimaBusqueda) {
        document.getElementById("buscar").value = ultimaBusqueda;
    }
});