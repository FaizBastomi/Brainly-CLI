export interface brainlyResult {
    result: brainlyData[];
}

export interface brainlyData {
    question: string;
    answers: Answer[];
}

interface Answer {
    content?: string;
    attachments?: string[]|[];
}