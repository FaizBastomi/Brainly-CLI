import { Brainly } from 'brainly-scraper-v2';
import { brainlyData, brainlyResult } from './types/index';

const stripHtmlTags = (str: string) => {
    if (str === null || str === undefined || str === '') return '';
    return str.replace(/(<([^>]+)>)/gi, '');
};

export const search = async (query: string) => {
    try {
        const brain = new Brainly('id');
        const result = await brain.search(query, 'id', 5).catch(console.error);
        let opt = { result: [] } as brainlyResult;
        if (Array.isArray(result)) {
            result.forEach((v) => {
                let data: brainlyData = {
                    question: stripHtmlTags(v.question.content),
                    answers: [],
                };
                v.answers.forEach((ans) => {
                    data.answers.push({ content: stripHtmlTags(ans.content), attachments: ans.attachments });
                });
                opt.result.push(data);
            });
        }
        return opt;
    } catch (e) {
        throw e;
    }
};
