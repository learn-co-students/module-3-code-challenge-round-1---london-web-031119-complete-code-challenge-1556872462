const imgCard = document.querySelector('#image_card')

const renderImgCard = (image) => {
  imgCard.querySelector('#image').src = image.url
  imgCard.querySelector('#name').innerText = image.name
  const likesEl = imgCard.querySelector('#likes')
  likesEl.innerText = image.like_count
  renderComments(image)

  imgCard.querySelector('#like_button').addEventListener('click', () => {
    updateLikes()
  })

  const commentForm = imgCard.querySelector('#comment_form')
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault()
    renderCommentLi()
  })

  const updateLikes = () => {
    likesEl.innerText++
    API.updateLikesInServer(image.id)
  }

  const renderCommentLi = () => {
    const commentBody = commentForm.comment.value
    renderComment({content: `${commentBody}`})
    commentForm.reset()
    API.saveCommentInServer(image.id, commentBody)
  }
}

// reminder to chat about why I had to pass 'image' as argument here
const renderComments = (image) => {
  image.comments.forEach(renderComment)
}

const renderComment = (comment) => {
  const commentLi = document.createElement('li')
  commentLi.innerHTML = `<button id="delete_button">Delete</button> ${comment.content}`
  commentLi.querySelector('#delete_button').addEventListener('click', () => {
    API.deleteComment(comment.id).then(commentLi.remove())
  })
  imgCard.querySelector('#comments').append(commentLi)
}

const addComment = (comment) => {

}

const init = () => {
  API.getImage().then(renderImgCard)
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('%c DOM Content Locked and Loaded and also Parsed!', 'color: yellow')
  init()
})

// {
//   "id": 1,
//   "url": "http://blog.flatironschool.com/wp-content/uploads/2016/07/072716-js-saved-web-4-352x200.jpg",
//   "name": "The Internet!",
//   "like_count": 0,
//   "comments": [
//     {
//       "id": 5941,
//       "content": "first comment!",
//       "image_id": 1158,
//       "created_at": "2018-10-18T17:06:14.859Z",
//       "updated_at": "2018-10-18T17:06:14.859Z"
//     }
//   ]
// }
