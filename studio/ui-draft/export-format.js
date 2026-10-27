// Parking is a still scene in this saved version. Keep its menu and export
// request consistent, including when a video selection came from another scene.
export function syncExportFormat(select, durationControl, scene, {videoAvailable = true} = {}) {
  const videoOption = select.querySelector('[value=video]');
  const parking = scene === 'parking' || scene === 'outdoor';
  videoOption.hidden = parking;
  videoOption.disabled = parking || !videoAvailable;
  if (select.value === 'video' && videoOption.disabled) select.value = 'png';
  durationControl.hidden = select.value !== 'video';
  select.dataset.tip = {
    png: 'Scene image PNG', kit: 'Perspective kit ZIP',
    camera: 'Camera settings JSON', depth: 'Depth map PNG',
    video: videoOption.textContent,
  }[select.value];
  return select.value;
}
