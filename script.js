function searchCity() {
  const city = document.getElementById('citySearch').value;
  const content = document.getElementById('content');
  content.innerHTML = `<p>Searching for information about <b>${city}</b>...</p>`;
  // Add API calls for city information here
}
