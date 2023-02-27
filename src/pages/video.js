import { useState } from "react";
import ReactPlayer from 'react-player/lazy'

const Video = () => {
    const [url, setUrl] = useState('');
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
    }

    const handleChange = e => {
        setUrl(e.target.value)
     }

    return (
        <main className={`video ${modalOpen && 'modal-open'}`}>
            <h2>Video</h2>
            <button className="add-video-button" onClick={handleModalOpen}>Add Video</button>

            {modalOpen && (
                <div className="video-modal">
                    <input type="text" placeholder="Paste URL" onChange={handleChange} />
                    <button onClick={handleModalOpen}>Set Video</button>
                </div>
            )}

            {url && !modalOpen && (
                <ReactPlayer url={url || ''} />
            )}

        </main>
    )
  }
  
  export default Video;