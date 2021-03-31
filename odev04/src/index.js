import React from 'react';
import ReactDOM from 'react-dom';

import { startGame, flipPhoto } from './game';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    startGame();
  }
  render() {
    return (
      <div>
        <h2>Kedi Bulmaca</h2>
        <p>
          Bu oyunda 3 kapalı kart içinde ki kediyi bulman gerekmektedir. İlk
          seçimde kedi kartını bulamaz isen 2. seçim hakkı tanınacaktır.
        </p>
        <img id="img0" className="kart" onclick={flipPhoto('0')} />
        <img id="img1" className="kart" onclick={flipPhoto('1')} />
        <img id="img2" className="kart" onclick={flipPhoto('2')} />
        <div className="mesaj">
          <p id="alanId">
            Kedi kartını bulmak için kartın üzerine tıklamalısın.
          </p>
          <p id="kazandiId" style="display: none">
            Kazandın !!! Tebrik ederiz yeni bir oyun oynamak istersen{' '}
            <a href="index.html">Buraya</a> tıklayabilirsin.
          </p>
          <p id="yenildiId" style="display: none">
            Kaybettin !!! Yeni bir oyun oynamak istersen{' '}
            <a href="index.html">Buraya</a> tıklayabilirsin.
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
