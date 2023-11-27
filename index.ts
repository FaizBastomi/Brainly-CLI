import readline from 'readline';
import chalk from 'chalk';
import { search } from './brainly';

const rl = readline.createInterface(process.stdin, process.stdout);

function color(text: string, color: string) {
    return !color ? chalk.green(text) : chalk.keyword(color)(text);
}

const start = function () {
    console.clear();
    console.log(color('Selamat Datang', 'lime'));
    console.log(color("Jika ingin mengakhiri ketik 'exit'", 'lime'));
    rl.question(color('SOAL: ', 'lime'), (q: string) => {
        if (q === 'exit' || q === '' || q === 'stop') {
            console.log(color('GoodBye!', 'lime'));
            process.exit(1);
        }
        search(q).then((r) => {
            r.result = r.result.slice(1);
            r.result.forEach((v) => {
                console.log('SOAL:', color(v.question, 'lime'));
                console.log('JAWAB:');
                v.answers.forEach((ans, i) => {
                    console.log(color(`(-) ${ans.content}`, 'lime'));
                    ans.attachments?.length === 0 ? '' : console.log(`MEDIA: ${ans.attachments?.join(' , ')}\n`);
                });
            });
            rl.question('Lanjut? [Y/n] => ', (n: string) => {
                if (n.toLowerCase() === 'y') start();
                else if (n.toLowerCase() === 'n') return process.exit();
                else start();
            });
        });
    });
};

start();
