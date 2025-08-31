export interface TextStats {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  lines: number;
  paragraphs: number;
  readingTime: {
    minutes: number;
    seconds: number;
  };
}

export function getStats(text: string): TextStats {
  if (!text || text.trim() === '') {
    return {
      words: 0,
      characters: 0,
      charactersNoSpaces: 0,
      lines: 0,
      paragraphs: 0,
      readingTime: { minutes: 0, seconds: 0 }
    };
  }

  // Contar palabras
  const words = text.trim().split(/\s+/).length;

  // Contar caracteres
  const characters = text.length;

  // Contar caracteres sin espacios
  const charactersNoSpaces = text.replace(/\s/g, '').length;

  // Contar líneas
  const lines = text.split('\n').length;

  // Contar párrafos (separados por líneas en blanco)
  const paragraphs = text.trim().split(/\n\s*\n/).filter(p => p.trim()).length;

  // Calcular tiempo de lectura (200 palabras por minuto)
  const totalSeconds = Math.ceil((words / 200) * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return {
    words,
    characters,
    charactersNoSpaces,
    lines,
    paragraphs,
    readingTime: { minutes, seconds }
  };
}
