let imageId = 2546 //Enter the id from the fetched image here

const imageURL = `https://randopic.herokuapp.com/images/${imageId}`

const likeURL = `https://randopic.herokuapp.com/likes/`

const commentsURL = `https://randopic.herokuapp.com/comments/`

const title = document.querySelector('#name')
const img = document.querySelector('#image')
const likesSpan = document.querySelector('#likes')
const commentForm = document.querySelector('#comment_form')
const commentsList = document.querySelector('#comments')

const state = {
  img : []
}

const renderImg = () => {
  title.innerText = `${state.img.name}`
  img.src = `${state.img.url}`
  likesSpan.innerText = `${state.img.like_count}`
}

const likesCounter = () => {
  const likesBtn = document.querySelector('#like_button')
  likesBtn.addEventListener('click', () => {
    let counter = state.img.like_count += 1
    likesSpan.innerText = `${counter}`
    updateImage(state.img)
  })
}

const renderComment = comment => {
  const li2 = document.createElement('li')
  li2.innerText = `${comment.content}`
  commentsList.append(li2)
}

const comments = () => {
  commentForm.addEventListener('submit', event => {
    event.preventDefault()
    const li = document.createElement('li')
    li.innerText = commentForm.comment_input.value

    const content = commentForm.comment_input.value

    commentsList.append(li)

    commentForm.reset()

    updateComments(state.img, content)
  })
}

const renderComments = () => {
  commentsList.innerHTML = ''
  state.img.comments.forEach(renderComment)
}

const init = () => {
  getImage()
  .then((img) => {
      state.img = img
      renderImg()
      renderComments()
      likesCounter()
  })
  comments()
}
  
init()