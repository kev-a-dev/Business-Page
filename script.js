function toggleAnswer(question_wrapper) {
  // Find the corresponding answer element
  const answer = question_wrapper.querySelector('.answer');
  const arrow = question_wrapper.querySelector('.arrow-img')
  // Toggle the 'active' class on the answer element
  answer.classList.toggle('active');
  arrow.classList.toggle('active');
}

function alert() {
  alert('this is for show only')
}
