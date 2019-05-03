class API {

  static imageId = 2544
  static imageURL = `https://randopic.herokuapp.com/images/${this.imageId}`
  static likeURL = `https://randopic.herokuapp.com/likes/`
  static commentsURL = `https://randopic.herokuapp.com/comments/`

  static getImage = () =>
    fetch(this.imageURL)
      .then(resp => resp.json())

  static updateLikesInServer = (imageId) =>
    fetch(this.likeURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ image_id: imageId })
    }).then(resp => resp.json())

  static saveCommentInServer = (imageId, comment) =>
    fetch(this.commentsURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: imageId,
        content: comment
      })
    }).then(resp => resp.json())

  static deleteComment = (commentId) =>
    fetch(this.commentsURL + `${commentId}`, {
      method: 'DELETE'
    }).then(resp => resp.json())



}