import * as readline from 'readline';
import { TemplateProvider } from "giget";

export const litProtocolProvider: TemplateProvider = async (input) => {
    return {
        name: "lit",
        subdir: input,
        url: "https://github.com/arthuravianna/lit-templates",
        tar: `https://github.com/arthuravianna/lit-templates/archive/refs/heads/main.tar.gz`,
    };
};

export async function prompt(question: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise((resolve) => {
        rl.question(question + ': ', (answer) => {
        rl.close();
        resolve(answer.trim());
        });
    });
}