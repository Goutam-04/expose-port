import turl from 'turl';


async function  linkshorten(url) {
 await turl.shorten(url).then((res) => {
    console.log(res);
  }).catch((err) => {
    console.log(err);
  });
 

};

export default linkshorten
