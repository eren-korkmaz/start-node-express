


exports.index = (req, res) => {
    res.json({"a":"b"})
}

exports.blogtitles = async (req, res) => {

    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("c");
        }, 300);
      });

    const re = await myPromise;

    res.json({"a":re});
}