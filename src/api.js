const getImage = () =>
  fetch(imageURL)
  .then(resp => resp.json())

const updateImage = img => 
  fetch(likeURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image_id: img.id })
  }).then(resp => resp.json())

const updateComments = (img, content) =>
  fetch(commentsURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ image_id: img.id, content: content })
  }).then(resp => resp.json())