import React, { createRef, useState, useEffect } from 'react';
import AppPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './AppPlayer.scss';
import './App.scss';
import AppHeader from './components/AppHeader/AppHeader';
import ToggleVolumeControl from './components/ToggleVolumeControl';

const App = () => {
  let baseURL;
  const player = createRef();

  if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3001';
  }

  if (process.env.NODE_ENV === 'production') {
    baseURL = 'https://fathomless-temple-89309.herokuapp.com';
  }

  useEffect(() => {
    fetch(`${baseURL}/video`)
      .then(res => res.json())
      .then(data => setData(data));

    player.current.audio.current.addEventListener('volumechange', e => {
      setCurVolume((e.target.volume * 10).toFixed(0));
    });
  }, [baseURL, player]);

  const [data, setData] = useState(null);
  const [showVolumeControl, setShowVolumeControl] = useState(false);
  const [curVolume, setCurVolume] = useState(10);

  return (
    <div className='App'>
      <AppHeader />

      <div className='App-content'>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tincidunt faucibus urna, quis lacinia nibh ultricies non. Aenean
          fringilla, erat eu interdum sodales, enim sem placerat lacus, non
          aliquam mi urna eget tortor. Nunc feugiat risus sed libero faucibus,
          at feugiat mauris accumsan. Curabitur interdum luctus semper. Etiam in
          sapien orci. In posuere urna odio, eu eleifend elit condimentum eget.
          Donec vel elit vel quam egestas sollicitudin quis nec neque. In eros
          turpis, fringilla eget metus bibendum, porta tempor tellus. Mauris
          fermentum dolor metus, sit amet posuere lorem imperdiet vel. Donec
          vitae dui commodo arcu feugiat dapibus a sit amet sem. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Praesent a mauris
          libero. Fusce quis eros sit amet neque gravida ornare vel ac sem.
          Nullam sed sollicitudin ligula, in interdum massa. Maecenas
          scelerisque lectus non nisl porta, at commodo magna condimentum. Donec
          faucibus leo et diam commodo, quis ornare tellus suscipit. Nullam
          laoreet dignissim lacus id tristique. Cras a dui erat. Integer nibh
          justo, pellentesque eu rhoncus nec, pulvinar ultrices enim. Vestibulum
          leo massa, dignissim at augue eget, gravida iaculis odio. Aliquam nec
          rutrum lacus, et sollicitudin diam. Aenean rutrum dui sed felis
          ultrices fringilla. Morbi varius iaculis urna quis mollis. Nullam
          congue, leo ut lacinia placerat, nisi dui finibus metus, eget iaculis
          ligula leo id arcu. Aliquam erat volutpat. Donec at orci tempor,
          volutpat odio ac, auctor velit. Integer tortor urna, varius non dolor
          volutpat, lacinia egestas magna. Donec dictum feugiat enim porttitor
          auctor. In et pulvinar felis. Ut in dui aliquam, finibus metus quis,
          porta tortor. Vestibulum sed imperdiet massa, id pharetra massa. Donec
          dictum metus libero, id dictum ante bibendum eu. Quisque pharetra
          purus sit amet leo lobortis viverra. Etiam et magna augue. In hac
          habitasse platea dictumst. In hac habitasse platea dictumst. Mauris
          vitae orci non lectus dignissim mollis. Maecenas interdum erat sit
          amet pellentesque faucibus. Etiam a massa pretium, blandit felis non,
          convallis lacus. Donec consectetur cursus arcu vitae pharetra.
          Suspendisse viverra vestibulum tellus, a imperdiet sem dapibus nec.
          Nunc quis semper dolor. Cras elementum scelerisque accumsan. Integer
          malesuada ultrices nisl at scelerisque. Sed ultricies dignissim felis,
          a malesuada sapien accumsan sit amet. Cras iaculis tellus augue, eget
          blandit velit finibus gravida. Vivamus aliquet commodo volutpat.
          Aenean laoreet sodales justo, at pellentesque mi mattis non. Donec
          viverra ex hendrerit sodales finibus. Quisque lorem sapien, iaculis a
          sem posuere, laoreet pretium arcu. Ut a bibendum justo. Duis eleifend,
          elit in rutrum consectetur, ex purus porta urna, et pulvinar massa
          felis quis velit. In pharetra in nisl eget pharetra. Mauris hendrerit
          mauris iaculis ligula mattis, feugiat fermentum enim tristique. Duis a
          nulla neque. Praesent vel felis ac turpis efficitur blandit. In
          porttitor nunc odio, sed aliquet arcu posuere eget. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Suspendisse congue justo leo, lacinia commodo arcu
          consectetur id. Vivamus at sem nec justo pulvinar imperdiet eget et
          enim. Etiam mattis ligula dolor, vitae tempor nisi suscipit porta.
          Aenean ac tincidunt sapien. Morbi ultrices arcu ac dui venenatis, quis
          aliquet libero ullamcorper. Etiam egestas, mi ac interdum cursus,
          felis diam finibus diam, at mattis felis est eu lorem. Donec in semper
          risus. Nunc nec neque laoreet, dignissim ipsum a, rutrum nisi. Nullam
          magna ipsum, aliquam et iaculis eu, molestie in velit. Nulla facilisi.
          Curabitur finibus nisl ut nunc maximus, sit amet aliquet mi tincidunt.
          Morbi bibendum id libero quis placerat. Nullam quis interdum arcu.
          Duis et felis laoreet, egestas odio at, posuere arcu. Quisque varius
          vel dolor et elementum. Fusce vitae erat a metus molestie lobortis.
          Fusce a fermentum lorem. Phasellus efficitur dolor sed sodales
          rhoncus. Praesent quis magna dictum, aliquam tortor non, eleifend ex.
          Mauris et congue felis. Cras pellentesque felis quis pretium auctor.
          Aliquam sit amet risus commodo, tristique velit a, dignissim ante.
          Praesent vel nunc interdum, semper odio vel, pharetra augue.
        </p>
        {data ? data.name : 'No video found!'}
      </div>

      <AppPlayer
        className='App-player'
        ref={player}
        src=''
        preload='metadata'
        layout='stacked'
        progressUpdateInterval={500}
        showSkipControls={true}
        showJumpControls={true}
        customControlsSection={[
          <ToggleVolumeControl
            toggle={() => setShowVolumeControl(!showVolumeControl)}
          />,
          showVolumeControl ? RHAP_UI.VOLUME_CONTROLS : null,
          RHAP_UI.MAIN_CONTROLS,
          RHAP_UI.ADDITIONAL_CONTROLS,
        ]}
        customVolumeControls={[RHAP_UI.VOLUME, <div>{curVolume}</div>]}
      />
    </div>
  );
};

export default App;
