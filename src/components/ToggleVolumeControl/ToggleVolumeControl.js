import React from 'react';

const ToggleVolumeControl = ({ toggle }) => {
  return (
    <div className='toggle-showVolumeControl'>
      <button aria-label='Show/Hide Volume Control' onClick={toggle}>
        Volume
      </button>
    </div>
  );
};

export default ToggleVolumeControl;
