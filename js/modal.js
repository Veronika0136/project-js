document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const openModalBtn = document.getElementById("openModal");
    const closeModalBtn = document.getElementById("closeModal");
    
    function openModal() {
        modal.classList.add("active");
        document.body.classList.add("modal-open");
    }
    
    function closeModal() {
        document.body.classList.remove("modal-open");
    }
    
    openModalBtn.addEventListener("click", openModal);
    closeModalBtn.addEventListener("click", closeModal);
    
    modal.addEventListener("click", (event) => {
       if (event.target === closeModalBtn || event.target === modal) {
        closeModal();
       }
    });
    
    document.addEventListener("keydown", (event) =>  {
        if (event.key === "Escape") {
            closeModal();
        }
     });
    });
    