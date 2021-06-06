const brainly = require('brainly-scraper-v2')

/**
 * 
 * @param {String} query your question
 * @param {Number} total number of answer
 * @param {String} lang question and answer languages. Availabe language id, us, es, pt, ru, ro, tr, ph, pl, hi
 * @returns 
 */
const search = (query, total, lang) => {
    return new Promise(async (resolve, reject) => {
        let okDB = []
        const reS = await brainly(query, total, lang).catch(reject)

        let opt = {}
        reS.data.forEach((r) => {
            opt.pertanyaan = { pertanyaan: r.pertanyaan, media: r.questionMedia }
            r.jawaban.forEach((r) => {
                opt.jawaban = { jawaban: r.text, media: r.media }
            })
            okDB.push(opt)
        })
        resolve(okDB)
    })
}

module.exports = {
    search
}