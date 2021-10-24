const Meme = require('./models/meme');

module.exports = (client) => {
    client.MemesDB = (function() {
        
        async function AddMeme(meme) {
            const _meme = new Meme(meme);
            _meme.save()
                .then(() => {
                    return true;
                })
                .catch(() => {
                    return false;
                });
        }

        async function DeleteMeme(name) {
            Meme.deleteOne({name: name})
                .then(() => {
                    return true;
                })
                .catch(() => {
                    return false;
                });
        }

        async function AllMeme() {
            return await Meme.find({});
        }
        
        async function GetMeme(name) {
            return await Meme.findOne({name: name});
        }
        
        async function RandomMeme() {
            return await Meme.find({random: true});
        }

        return {
            AddMeme,
            DeleteMeme,
            AllMeme,
            GetMeme,
            RandomMeme
        }
    })();
}