import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modalPhoto, setModelPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModelPhoto={setModelPhoto}/>}
      <FeedPhotos setModelPhoto={setModelPhoto}/>
    </div>
  )
}

export default Feed