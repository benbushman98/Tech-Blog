// Comment Creation
function showCommentCreation() {
    const createComment = document.querySelector('#createComment');
    const commentForm = document.querySelector('#commentForm');
    commentForm.classList.remove('hide');
    createComment.classList.add('hide');
  };
  
  async function newComment(event) {
    event.preventDefault();
  
    const comment = document.querySelector('#commentComment').value;
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        comment: comment,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      createComment.classList.remove('hide');
      commentForm.classList.add('hide');
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.newCommentForm').addEventListener('submit', newComment);
  createComment.addEventListener('click', showCommentCreation)