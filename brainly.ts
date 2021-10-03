import brainly from "brainly-scraper-v2";
import { brainlyResult } from './types/index';

export const search = async (query: string) => {
    try {
        const reS = await brainly(query, 5, "id");

        let opt: brainlyResult = { result: [{ question: { content: '' }, answer: { content: '', media: [] } }] };
        reS.data.forEach((v) => {
            let q = v;
            v.jawaban.forEach((v) => {
                opt.result.push({
                    question: { content: q.pertanyaan },
                    answer: { content: v.text, media: v.media }
                })
            })
        })
        return opt;
    } catch (e) {
        throw e;
    }
};