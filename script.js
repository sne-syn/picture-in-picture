const video = document.querySelector('#video');
const button = document.querySelector('#button');

const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    }
  } catch (error) {
    console.log('Something is wrong. Check this error - ' + error);
  }
}

button.addEventListener('click', async () => {
  button.disabled = true;
  await video.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStream()
