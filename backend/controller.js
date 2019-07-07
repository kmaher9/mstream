const fs    = require('fs')

exports.stream = async function (request, response, next) {
  const video = './videos/sample.mp4'
  let stat = fs.statSync(video)
  let range = request.headers.range
  console.log(range)
  
  if (range) {
    // so we have a default response of 'bytes=0-' but if we request a minute and a half in for example we get 'bytes=1-30' so remove words leave numbers
    let [start, end] = range.replace(/bytes=/, '').split('-')
    start = parseInt(start, 10)
    end = end ? parseInt(end, 10) : stat.size - 1 // we dont always request the end of the video so if we dont have one then set one that is the size minus last byte
    response.writeHead(206, { // 206 is partial content - tell browser streaming
      "Content-Range": `bytes ${start}-${end}/${stat.size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": (end - start) + 1, // not video size, actually length of buffer,
      "Content-Type": "video/mp4"
    }) 

    fs.createReadStream(video, { start, end }).pipe(response) // only stream part of video from given timestamps - handles request for us
  } else {
    response.writeHead(200, {
      "Content-Length": stat.size,
      "Content-Type": "video/mp4"
    })
  
    fs.createReadStream(video).pipe(response)
  }
  

  
} 