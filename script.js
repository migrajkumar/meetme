 document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.onkeydown = (e) => {
    if (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "s")) {
      e.preventDefault();
    }
    if (e.key === "F12") {
      e.preventDefault();
    }
  };