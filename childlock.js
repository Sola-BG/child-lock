
// METHOD 1
// const loadJSON = (src) => {
//     const head = document.getElementsByTagName('head')[0];
  
//     //use class, as we can't reference by id
//     const element = head.getElementsByClassName("json")[0];
  
//     try {
//       element.parentNode.removeChild(element);
//     } catch (e) {
//       //
//     }
  
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = src;
//     script.className = "json";
//     script.async = false;
//     head.appendChild(script);
  
//     //call the postload function after a slight delay to allow the json to load
//     window.setTimeout(postloadfunction, 100)
// }

// METHOD 2
// const receivedText = (e) => {
//     let lines = e.target.result;
//     var newArr = JSON.parse(lines); 
// }
// const loadJSON = (src) => {
//     var input, file, fr;

//     if (typeof window.FileReader !== 'function') {
//       alert("The file API isn't supported on this browser yet.");
//       return;
//     }

//     input = document.getElementById('fileinput');
//     if (!input) {
//       alert("Um, couldn't find the fileinput element.");
//     } else if (!input.files) {
//       alert("This browser doesn't seem to support the `files` property of file inputs.");
//     } else if (!input.files[0]) {
//       alert("Please select a file before clicking 'Load'");
//     } else {
//       file = input.files[0];
//       fr = new FileReader();
//       fr.onload = receivedText;
//       fr.readAsText(file);
//     }
// }

// METHOD 3
// const loadJSON = (callback) => {
//     let xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', 'my_data.json', true);
//     // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = () => {
//         if (xobj.readyState === 4 && xobj.status === "200") {
//             // Required use of an anonymous callback 
//             // as .open() will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//         }
//     };
//     xobj.send(null);
// }

// const getUrls = () => {
//     loadJSON((response) => {
//         // Parse JSON string into object
//         let actual_JSON = JSON.parse(response);
//         console.log(actual_JSON);
//         return actual_JSON;
//     });
// }
// TODO: load this from a json file
const filter = {
    urls: [
      '*://*.ycombinator.com/*',
      '*://*.youtube.com/*',
      '*://*.twitter.com/*',
      '*://*.facebook.com/*',,
      '*://*.bbc.co.uk/*'
    ],
}
// const filter= getUrls()

const webRequestFlags = [ 'blocking'];

chrome.webRequest.onBeforeRequest.addListener(
    (page) => {
        return {
            cancel: true
        };
        // const host= 'http://roastthatmeat.co.uk';
        // return {redirectUrl: host + details.url.match(/^https?:\/\/[^\/]+([\S\s]*)/)[1]};
    }, 
    filter,
    webRequestFlags
);
