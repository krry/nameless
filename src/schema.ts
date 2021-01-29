// types and defaults

export const defTheme = ''

export interface Hexaname {
  chinese: string
  pinyin: string
  english: string
}

export interface Gram {
  position: number
  meaning: string
  ruler?: string
}

export interface TrigramPair {
  above: number
  below: number
}

export interface Trigram {
  trigram: string
  name: {
    en: string
    zh: string
    pn: string
  }
}

export interface Hexagram {
  binary: string
  hexagram: string
  kingwen: number
  names: Hexaname
  octal: string
  trigramPair: TrigramPair
  judgment: string
  images: string
  lines: Gram[]
}

export const defHex: Hexagram = {
  binary: '0b000012', // "0b010101"
  octal: '78', // "[0-7][0-7]", e.g., 43
  hexagram: '䷆', // unicode glyph \4dc0 to \4dff
  kingwen: 0, // decimal 1 to 64
  names: {
    chinese: '師', // 1 or 2 hanzi characters
    pinyin: 'shī', // 1 or 2 transliterated words
    english: 'The Metamorphosis', // up to 4 words, maybe parenthetical
  },
  trigramPair: {
    above: 0, // 1 to 8, indicating a bagua or trigram
    below: 2,
  },
  judgment:
    'Gewöhnlich glaubt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Es irrt der Mensch, wenn er sie beim Kragen hätte.',
  images:
    ' Ich bin von je der Ordnung Freund gewesen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Ich bin von je der Ordnung Freund gewesen.',
  lines: [
    {
      position: 5,
      meaning:
        'Vom Rechte, das mit Recht; denn alles, was ihr Sünde, Zerstörung, kurz das Böse will und stets das Gute schafft.',
      ruler: 'gobernding',
    },
  ],
}

export const defHex2: Hexagram = {
  binary: '0b000000',
  hexagram: '䷁',
  kingwen: 2,
  names: {
    chinese: '坤',
    pinyin: 'kūn',
    english: 'The Receptive (Earth)',
  },
  octal: '00',
  trigramPair: {
    above: 0,
    below: 0,
  },
  judgment:
    'Es irrt der Mensch, wenn er nur Worte hört, Es müsse sich dabei doch auch was denken lassen. Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin.',
  images:
    ' Ich bin von je der Ordnung Freund gewesen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Ich bin von je der Ordnung Freund gewesen.',
  lines: [
    {
      position: 1,
      meaning: 'Gewöhnlich glaubt der Mensch, wenn er sie beim Kragen hätte.',
    },
    {
      position: 2,
      meaning:
        ' Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum.',
      ruler: 'gobernding',
    },
    {
      position: 3,
      meaning:
        'Ich bin von je der Ordnung Freund gewesen. Es irrt der Mensch, wenn er sie beim Kragen hätte.',
    },
    {
      position: 4,
      meaning:
        'Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst.',
    },
    {
      position: 5,
      meaning: 'Wenn sich der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen.',
    },
    {
      position: 6,
      meaning:
        'Ich bin von je der Ordnung Freund gewesen. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle!',
    },
  ],
}

export interface Roll {
  query: string
  toss: string
  lots: string[]
  moment: Date
}

export const defRoll: Roll = {
  query: '',
  toss: '',
  lots: ['', ''],
  moment: new Date(),
}

export interface Quad {
  yPos: string
  xPos: string
  edge: string
  middle: string
}

export const defQuad: Quad = {
  yPos: 'top',
  xPos: 'left',
  edge: 'edge',
  middle: 'middle',
}

export interface Person {
  name: string
  face: string
  location: Geolocation
}

export interface Enquiry {
  time: Date
  user: Person
  query: string
  roll: Roll
}

export interface Bounds {
  top: number
  right: number
  bottom: number
  left: number
}

export const defBounds: Bounds = {
  top: 120,
  right: 240,
  bottom: 240,
  left: 120,
}

export interface Token {
  val: string
  expiration: number
}

export const defToken: Token = {
  val: 'holytokenstringsbatman1234567',
  expiration: 1610861293901,
}

export interface User {
  id: symbol
  email: string
  authd: boolean
  token: Token
}

export const defUser: User = {
  id: Symbol('human.name@domain.tld'),
  email: 'human.name@domain.tld',
  authd: true,
  token: defToken,
}
