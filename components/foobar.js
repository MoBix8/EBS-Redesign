{/* <div className={` hover:text-dark-gray ${router.pathname == "/" ? " font-medium" : "text-text-gray-color"}`}>
            <Link href="/">HOME</Link>
          </div>
          <div className={` hover:text-dark-gray ${router.pathname == "/news" ? " font-medium" : "text-text-gray-color"}`}>
            <Link href="/news">NEWS</Link>
          </div>
          <div className={` hover:text-dark-gray ${router.pathname == "/channels" ? " font-medium" : "text-text-gray-color"}`}>
            <Link href="/channels">CHANNEL</Link>
          </div>
          <div className={` hover:text-dark-gray ${router.pathname == "/shows" ? " font-medium" : "text-text-gray-color"}`}>
            <Link href="/shows">SHOWS</Link>
          </div>
          <div className={` hover:text-dark-gray ${router.pathname == "/schedules" ? " font-medium" : "text-text-gray-color"}`}>
            <Link href="/schedules">SCHEDULE</Link>
          </div>
          <div className={` hover:text-dark-gray ${router.pathname == "/contact" ? " font-medium" : "text-text-gray-color"}`}>
            <Link href="/contact">CONTACT</Link>
          </div> */}




          //image sliders code
    //       const [ bg, setBg ] = useState(0);

    //  const arrs = [
    //     "/shows/adey.jpeg", 
    //     "/shows/besentu.jpeg",
    //     "/shows/ebs-Cenima.jpeg",
    //     "/shows/rakeb.jpeg",
    //     "/shows/roku-tv.jpeg"
    //  ]

    //  function loop(count){
    //      if(count==arrs.length){
    //          return count=0;
    //      }
    //      if(count<0){
    //          return count= arrs.length-1;
    //      }
    //      console.log(`count ${count}`);
    //      return count;
    //  }
   
    // useEffect(() => {
        
    //     const interval = setInterval(
    //         ()=> setBg(
    //              count => loop(count+1)
    //         ),10000
    //     );
    //     console.log(` display ${bg}`);
    //     return ()=> clearInterval(interval);
    // }, [])




    // showview junks
    {/* {BgImages.map((img, index)=>{
            //console.log(img.url);
            return (
                 <ShowCard url={img.url} key={img.id}/>
            )
        })} */}
        {/* <ShowCard result={result} /> */}
        {/* {result.items.map((res, idx)=>{
          console.log(res.snippet.thumbnails.default?.url);
          //console.log(res);
          //console.log(result);
          return (
            <ShowCard result={res.snippet.thumbnails.maxres?.url} vid={res.snippet.resourceId.videoId} key={idx}/>
          );
        })} */}
        {/* <div>
          {itemsDisplay}
        </div> */}
  //console.log(BgImages[1].title);
   //console.log(result.items);
  //console.log(result);
  //const itemsDisplay = [];
  // for (let index = 0; index < result.items.length; index++) {
  //   itemsDisplay.push(
  //    // <ShowCard result={result.items[index].snippet.thumbnails.maxres.url} key={index}/>
  //   );
    
  // }


  //tvshows junk
   // const router = useRouter();
  // const query = router.query;

  // useEffect (()=>{
  //   const data = localStorage.getItem('contentFile');
  //   if (data!== null) setResult(JSON.parse(data))
  //   console.log("first" + JSON.parse(data));
  // },[])
  // useEffect(()=>{
  //   if( contents !== null) {
  //     sessionStorage.setItem('content', JSON.stringify(contents))
  //     //const resultStorage = JSON.parse(localStorage.getItem('content'))
  //     //Cookie.set('content', contents)
  //     //setResult(contents)
  //   }
  // },[])

  // useEffect (()=>{
    
  //   const resultStorage = JSON.parse(sessionStorage.getItem('content'))
  //   if (resultStorage == null){
  //     resultStorage = sessionStorage.setItem('content', JSON.stringify(contents))
  //     setResult(contents)
  //   } 
  //   sessionStorage.setItem('content', JSON.stringify(resultStorage))
  //   setResult(resultStorage)
  // },[])
  
  
  // console.log(result);
  // useEffect (()=>{
  //   if(router.isReady){
  //     //console.log(result);
  //      const res = JSON.parse(query.result);
  //     setResult(res);
  //     setIndex(query.index);
  //     setimage(query.image);
  //     //console.log(res);
  //     //router.isReady= false;
  //   }
  // },[router.isReady])
  
    
  //    console.log(result);
     //console.log("object one");
    // useEffect(()=>{
    //   console.log("first")
    //   console.log(props.router.query);
    //   if (props.router.query.result){
    //     const query = props.router.query;
    //     const res = JSON.parse(query.result);
    //     setResult(res);
    //     setIndex(query.index);
    //     setimage(query.image);
    //     //console.log(JSON.parse(props.router.query.result));
    //   }
      
           //const d = window.localStorage.getItem('contentFile')
    // },[props.router.query ])


  //   useEffect(() => {
  //     localStorage.setItem("result", JSON.stringify(result))
  //     localStorage.setItem("index", index)
  //     localStorage.setItem("img", img)
  // }, [result, img, index])