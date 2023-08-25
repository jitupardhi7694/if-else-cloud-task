
export class TranslationService {
    private static earthToMarsDictionary: { [key: string]: string } = {
        'hello': 'klatu',
        'world': 'barada',
        'goodbye': 'nikto'
        // Add more translations as needed
    };

    private static marsToEarthDictionary: { [key: string]: string } = {
        'klatu': 'hello',
        'barada': 'world',
        'nikto': 'goodbye'
        // Add more translations as needed
    };

    earthToMars(englishMessage: string): string {
        const words = englishMessage.toLowerCase().split(' ');
        const translatedWords = words.map(word => TranslationService.earthToMarsDictionary[word] || word);
        return translatedWords.join(' ');
    }

    marsToEarth(marsMessage: string): string {
        const words = marsMessage.toLowerCase().split(' ');
        const translatedWords = words.map(word => TranslationService.marsToEarthDictionary[word] || word);
        return translatedWords.join(' ');
    }
}
