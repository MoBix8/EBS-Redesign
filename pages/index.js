import Head from 'next/head'
import Background from '../components/Background';
import ShowsView from '../components/ShowsView';
import RokuView from '../components/adverts/RokuView';
import PosterView from '../components/adverts/PosterView';
import RokuGuide from '../components/adverts/RokuGuide';
import PopularView from '../components/PopularView';
import TvShowView from '../components/TvShowView';
import Slider from '../components/Slider';
import Footer from '../components/adverts/Footer';

function Home() {

  return (
    <div>
      <Head>
        <title>EBS Tv - Your #1 Choice! |  </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="google-site-verification" content="8F3uwa37AtSl833WrgfHiQa2J2X67cj7YRyj_VR5Grg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Background />
        <div className=' divide-y divide-divider-gray'>
          <div className=' pt-5 text-lg pb-5'>
            <h1 className=' px-5'>Favourites</h1>
            <ShowsView />
          </div>
          <div className=' pt-1 text-lg pb-5'>
            <h1 className=' px-5'>Roku Tv</h1>
            <h5 className=' px-5 text-xs font-thin text-light-gray font-poppins'>Roku, Android IPTV/GoogleTV & Web TV </h5>
            <RokuView />
          </div>
          <div className=' pt-1 text-lg pb-5'>
            <h1 className=' px-10'>Popular</h1>
            <PopularView />
          </div>
          <div className=' pt-1 text-lg pb-5'>
            <h1 className=' px-5'>Tv-Shows</h1>
            <TvShowView />
          </div>
          <div className=' pt-1 text-lg pb-5'>
            <h1 className=' px-5'>EBS Tv Official</h1>
            <h5 className=' px-5 text-xs font-thin text-light-gray font-poppins'>EBS Tv, official site. join on Roku TV</h5>
            <PosterView />
          </div>
          <div className=' pt-1 text-lg pb-5'>
            <RokuGuide />
          </div>
          
        </div>
        <div className=' pt-1 text-lg pb-5'>
          <h1 className=' px-5'>EBS Tv Choices</h1>
          <h5 className=' px-5 text-xs font-thin text-light-gray font-poppins'>Join EBS Tv, Choice of movies, music, infotainment and entertainment channel</h5>
          <Slider />
        </div>
      </div>
      <div className=' bg-to-c w-full'>
        <Footer />
      </div>
    </div>
  )
}
export default Home;

// export async function getStaticProps(){
//   const MY_PLAYLIST_1 = process.env.YOUTUBE_PLAYLIST_ID_1;
//   const MY_PLAYLIST_2 = process.env.YOUTUBE_PLAYLIST_ID_2;
//   const MY_PLAYLIST_3 = process.env.YOUTUBE_PLAYLIST_ID_3;
//   const MY_PLAYLIST_4 = process.env.YOUTUBE_PLAYLIST_ID_4;
//   const MY_PLAYLIST_5 = process.env.YOUTUBE_PLAYLIST_ID_5;
//   const MY_PLAYLIST_6 = process.env.YOUTUBE_PLAYLIST_ID_6;
//   const MY_PLAYLIST_7 = process.env.YOUTUBE_PLAYLIST_ID_7;
  
//   const API_KEY = process.env.YOUTUBE_API_KEY;
//   const PLAYLIST_REQUEST_URL_1 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=${MY_PLAYLIST_1}&key=${API_KEY}`;
//   const PLAYLIST_REQUEST_URL_2 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=${MY_PLAYLIST_2}&key=${API_KEY}`;
//   const PLAYLIST_REQUEST_URL_3 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=${MY_PLAYLIST_3}&key=${API_KEY}`;
//   const PLAYLIST_REQUEST_URL_4 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=${MY_PLAYLIST_4}&key=${API_KEY}`;
//   const PLAYLIST_REQUEST_URL_5 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=${MY_PLAYLIST_5}&key=${API_KEY}`;
//   const PLAYLIST_REQUEST_URL_6 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=${MY_PLAYLIST_6}&key=${API_KEY}`;
//   const PLAYLIST_REQUEST_URL_7 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=500&playlistId=${MY_PLAYLIST_7}&key=${API_KEY}`;

//   const playlistResponse1 = await fetch(PLAYLIST_REQUEST_URL_1);
//   const playlistResponse2 = await fetch(PLAYLIST_REQUEST_URL_2);
//   const playlistResponse3 = await fetch(PLAYLIST_REQUEST_URL_3);
//   const playlistResponse4 = await fetch(PLAYLIST_REQUEST_URL_4);
//   const playlistResponse5 = await fetch(PLAYLIST_REQUEST_URL_5);
//   const playlistResponse6 = await fetch(PLAYLIST_REQUEST_URL_6);
//   const playlistResponse7 = await fetch(PLAYLIST_REQUEST_URL_7);

//   const playlistResult1 = await playlistResponse1.json();
//   const playlistResult2 = await playlistResponse2.json();
//   const playlistResult3 = await playlistResponse3.json();
//   const playlistResult4 = await playlistResponse4.json();
//   const playlistResult5 = await playlistResponse5.json();
//   const playlistResult6 = await playlistResponse6.json();
//   const playlistResult7 = await playlistResponse7.json();


//   return{
//     props:{
//       playlistResult1: playlistResult1,
//       playlistResult2: playlistResult2,
//       playlistResult3: playlistResult3,
//       playlistResult4: playlistResult4,
//       playlistResult5: playlistResult5,
//       playlistResult6: playlistResult6,
//       playlistResult7: playlistResult7,
//     },
//     revalidate: 3600,
//   }
// }
