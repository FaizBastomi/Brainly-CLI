import brainly from "brainly-scraper-v2";
import { brainlyResult } from './types/index';

const brnl = new brainly();
export const search = async (query: string) => {
    try {
        const reS = await brnl.search('id', query, 5);

        let opt: brainlyResult = { result: [{ question: { content: '', author: undefined }, answer: { content: '', author: undefined } }] };
        reS.forEach((v) => {
            let q = v;
            v.answers.forEach((v) => {
                opt.result.push({
                    question: { content: q.question.content, author: q.question.author },
                    answer: { content: v.content, author: v.author }
                });
            });
        });
        return opt;
    } catch (e) {
        throw e;
    }
};