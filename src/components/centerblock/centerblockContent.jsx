import React from 'react';
import './centerblockContent.css';
// import Tracklist from '../playlist/tracklist';
import Playlist from '../playlist/playlistItem';


function CenterblockContent() {
  // const [tracks, setTrack] = useState([
  //   {id: 1, title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'},
  //   {id: 1, title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'},
  // ])  
  return (
    <div className="centerblock__content">
       <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch"></use>
            </svg>
          </div>
      </div>
      <div className='content__playlist playlist'>
        {/* <Tracklist tracks = {tracks}/> */}
        <Playlist track={{id: 1, title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'}}/>
              <Playlist track={{id: 2,title: 'Elektro',author: 'Dynoro, Outwork, Mr. Gee',album: 'Elektro', time:'2:22'}}/>
              <Playlist track={{id: 3,title: 'I’m Fire',author: 'Ali Bakgor',album: 'I’m Fire', time:'2:22'}}/>
              <Playlist track={{id: 4,title: 'Non Stop',author: 'Стоункат, Psychopath',album: 'Non Stop', time:'4:412'}}/>
              <Playlist track={{id: 5,title: 'Run Run',author: 'Jaded, Will Clarke, AR/CO',album: 'Run Run', time:'2:54'}}/>
              <Playlist track={{id: 6,title: 'Guilt',author: 'Nero',album: 'Welcome Reality', time:'4:44'}}/>
              <Playlist track={{id: 7,title: 'Elektro',author: 'Dynoro, Outwork, Mr. Gee',album: 'Elektro', time:'2:22'}}/>
              <Playlist track={{id: 8,title: 'I’m Fire',author: 'Ali Bakgor',album: 'I’m Fire', time:'2:22'}}/>
              <Playlist track={{id: 9,title: 'Non Stop',author: 'Стоункат, Psychopath',album: 'Non Stop', time:'4:412'}}/>
              <Playlist track={{id: 10,title: 'Run Run',author: 'Jaded, Will Clarke, AR/CO',album: 'Run Run', time:'2:54'}}/>
        </div>
    </div>
   
    
    )
}

export default CenterblockContent;