function toggleInfo() {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.style.display === 'none' || movieInfo.style.display === '') {
    movieInfo.style.display = 'block';
  } else {
    movieInfo.style.display = 'none';
  }
}
