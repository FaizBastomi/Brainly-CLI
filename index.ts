import readline from 'readline';
import chalk from 'chalk';
import { search } from './brainly';

const rl = readline.createInterface(process.stdin, process.stdout);

function color(text: string, color: string) {
    return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

const start = function () {
    console.clear();
    console.log(color("Selamat Datang", "lime"));
    console.log(color("Jika ingin mengakhiri ketik 'exit'", "lime"));
    rl.question(color('SOAL: ', 'lime'), (q: string) => {
        if (q === 'exit' || q === '' || q === 'stop') {
            console.log(color("GoodBye!", "lime"));
            process.exit(1);
        }
        search(q).then((r) => {
            r.result.forEach((v) => {
                console.log(color("SOAL: "+v.question.content+"    "+`(${v.question.author})\n`, "lime"));
                console.log(color("JWBN: "+v.answer.content+"    "+`(${v.answer.author})\n\n`,"lime"));
            })
            rl.question("Lanjut? [Y/n] => ", (n: string) => {
                if (n === 'Y' || n === 'y') start();
                else if (n === 'N' || n === 'n') return process.exit(1);
                else start();
            })
        })
    });
};

start();