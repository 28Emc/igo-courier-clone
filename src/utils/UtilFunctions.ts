export const replaceChar = (value: string, strToReplace: string): string => {
    if (!value || !strToReplace || !CHAR_DICTIONARY.has(strToReplace)) {
        return value;
    }

    const replacementStr = CHAR_DICTIONARY.get(strToReplace) as string;
    return value.replace(new RegExp(strToReplace, 'g'), replacementStr);
}

export const splitParagraph = (value: string, splitBy: string): string[] => {
    if (!value || !splitBy || !CHAR_DICTIONARY.has(splitBy)) {
        return [value];
    }

    return value.split(splitBy);
}

const CHAR_DICTIONARY = new Map<string, string>();
CHAR_DICTIONARY.set('#br#', '<br />');
// ?AGREGAR MÁS CARACTERES DE SER NECESARIO