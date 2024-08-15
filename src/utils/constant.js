export const YOUTUBE_LOGO_IMG =
  "https://wallpapers.com/images/featured/youtube-logo-background-xuljaasdgk44enmb.jpg";
export const MIC_IMAGE =
  "https://cdn-icons-png.flaticon.com/512/1082/1082810.png";
export const NOTIFICATION_ICON =
  "https://static-00.iconduck.com/assets.00/notification-icon-1842x2048-xr57og4y.png";
export const USER_PNG =
  "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png";

//Youtube cred
export const YOUTUBE_API_KEY = "AIzaSyCT9TOryY9pm4G2-yPLrF1VxuQG0E_aOmY";

export const YOUTUBE_CATEGORY_LIST = [
  "All",
  "Gaming",
  "ESports",
  "Live",
  "Music",
  "News",
  "Roast",
  "Reaction",
  "Sports",
  "Comedy",
  "Education",
  "Marvel",
  "Film & Animation",
  "SuperHero",
  "Board Games",
  "JukeBox",
  "Software Engineering",
];

export const YOUTUBE_MOST_POPULAR_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=IN&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_COMMENT_API = `https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&maxResults=50&key=${YOUTUBE_API_KEY}&textFormat=plainText`;
