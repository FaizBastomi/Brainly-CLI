// import * as brnl from 'brainly-scraper-v2';
import { Author } from 'brainly-scraper-v2/src/types';

export interface brainlyResult {
    result: {
        question: { content: string, author: Author | undefined };
        answer: { content: string, author: Author | undefined }
    }[];
}