const input = document.querySelector('input');
const getBtn = document.querySelector('#get-btn');

const extractVideoId = () => {
  const val = input.value.trim();
  if (!val) return;

  if (val.includes('youtu.be/')) {
    const videoId = new URL(val).pathname.slice(1);
    return videoId;
  }

  if (val.includes('youtube.com')){
    const videoId = new URL(val).searchParams.get('v');
    return videoId;
  }
};

const generateThumbnail = () => {
    const id = extractVideoId();
    console.log(id);
}

getBtn.addEventListener('click', generateThumbnail)