import React from 'react';
import { Icon } from '@iconify/react';
import volumeHigh from '@iconify/icons-mdi/volume-high';

const ToggleVolumeControl = ({ toggle }) => {
  return (
    <div className='toggle-showVolumeControl'>
      <button aria-label='Show/Hide Volume Control' onClick={toggle}>
        <Icon icon={volumeHigh} />
      </button>
    </div>
  );
};

export default ToggleVolumeControl;
