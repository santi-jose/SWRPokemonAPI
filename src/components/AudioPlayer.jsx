import { useEffect, useState } from 'react'
import themeSong from '../audio/Pokemon BlueRed - Route 1.mp3'

function AudioPlayer(){
    function useAudio(){
        const [audio] = useState(new Audio(themeSong));
        const [playing, setPlaying] = useState(false);
    
        const toggle = () => setPlaying(!playing);
    
        useEffect(() => {
            if(playing){
                audio.volume = 0.05;
                audio.play();
            }else{
                audio.pause();
            }
        }, [playing]);
    
        useEffect(() => {
            audio.addEventListener('ended', ()=> setPlaying(false));
            return () => {
                audio.removeEventListener('ended', () => setPlaying(false));
            }
        });
    
        return [playing, toggle];
    }
    
    function Player(){
        const [playing, toggle] = useAudio(themeSong);
    
        return (
            <div className="audio-player">
                    <button className="play-button" onClick={toggle}>
                        {playing ? 'Pause': 'Play'}
                    </button>
                    <span className="audio-notif">
                        {playing ? 'audio playing': ''}
                    </span>
                    <br />
            </div>
        );
    }

    return <Player />
}

export default AudioPlayer;