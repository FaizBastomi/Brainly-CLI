const read = require('readline')
const chalk = require('chalk')
const { search } = require('./brainly')

const rl = read.createInterface(process.stdin, process.stdout)

function color(text, color) {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

console.log(color('Selamat datang di \'Pencari Jawaban Soalmu\'', 'lime'))
console.log(color('Jika ingin mengakhiri ketik \'exit\'', 'lime'))
console.log(color('Ditenagai oleh \'Brainly\'', 'lime'))

const start = function () {
    rl.question('\x1b[32mSOAL: \x1b[0m', (question) => {
        let q = question
        if (q === 'exit' || q === 'stop') {
            console.log('Goodbye!')
            process.exit()
        }
        rl.question('\x1b[32mJumlah jawaban: \x1b[0m', (total) => {
            search(q, Number(total), 'id').then((r) => {
                r.forEach((a) => {
                    console.log('\x1b[37mPertanyaan: \x1b[32m'+a.pertanyaan.pertanyaan+'\n\x1b[0mJawaban: \x1b[32m'+a.jawaban.jawaban+'\n\n')
                })
                rl.question('\x1b[37mLanjut[Y/n] \x1b[0m', (y) => {
                    if (y === 'Y' || y === 'y' || y === 'yes' || y === 'Yes') return start()
                    else if (y === 'N' || y === 'n' || y === 'no' || y === 'No') return process.exit()
                })
            })
        })
    })
}
start()
