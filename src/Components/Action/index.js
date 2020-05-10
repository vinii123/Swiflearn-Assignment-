export function preLoadVideos(...videos) {
  return videos.reduce((acc,vid) => {
    let newVideo = new Video();
    newVideo.src = vid;
    acc.push(newVideo);
    return acc;
  }, []);
}
