class FileManager {
    convertBase64ToFile(base64: string, fileName: string, mimeType: string): File {
        // Pulisce la stringa (rimuove il prefisso se presente, altrimenti la usa così com'è)
        const base64Content = base64.includes(',') ? base64.split(',')[1] : base64;

        // Decodifica
        const byteCharacters = atob(base64Content); // Decodifica la stringa Base64 in una stringa di caratteri binari
        const byteNumbers = new Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i); // Converte ogni carattere in un numero (0-255)
        }

        // Crea il File usando il mimeType passato come argomento
        const byteArray = new Uint8Array(byteNumbers);
        return new File([byteArray], fileName, { type: mimeType });
    }
}

export const fileManager = new FileManager();