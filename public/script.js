document
  .getElementById("download-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const url = document.getElementById("url").value;
    window.location.href = `/download?url=${encodeURIComponent(url)}`;
  });
