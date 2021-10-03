export interface brainlyResult {
    result: {
        question: { content: string };
        answer: { content: string, media: string[]|[] }
    }[];
}