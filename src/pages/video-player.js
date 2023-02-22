import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player'), { ssr: false })

const VideoPlayer = () => {
    return (
        <div className="player">
            <h2>Video Player</h2>
            <ReactPlayer url="https://www.youtube.com/watch?v=8pDqJVdNa44" />
        </div>
    )
}

export default VideoPlayer;
