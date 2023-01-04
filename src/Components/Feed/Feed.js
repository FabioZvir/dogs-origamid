import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = () => {
  const [modalPhoto, setModelPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto}/>}
      <FeedPhotos setModelPhoto={setModelPhoto}/>
    </div>
  )
}

export default Feed