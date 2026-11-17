// Single source for navigation + chapter copy.
export const NAV = [
  { href: '#the-other-side', label: 'The world' },
  { href: '#journey', label: 'The journey' },
  { href: '#enter', label: 'Enter' },
];

export const INDEX = [
  { href: '#top', no: '01', label: 'Arrival' },
  { href: '#the-other-side', no: '02', label: 'The other side' },
  { href: '#journey', no: '03', label: 'The journey' },
  { href: '#crossing', no: '04', label: 'The crossing' },
  { href: '#enter', no: '05', label: 'Enter the desert' },
];

export const CHAPTERS = [
  {
    id: 'silence',
    no: '01',
    title: 'The silence',
    text:
      'Out here, sound is the first thing to leave. Then the hurry. What stays is a sky so dense with light it seems to lean closer, and the slow rhythm of your own breathing.',
    figures: [
      {
        src: '/media/silence.jpg', w: 800, h: 1000,
        alt: 'A tall violet night sky with faint stars, a thin mountain line resting at the bottom.',
        caption: 'Fig. 01 — Upper sky, 04:12, before first light',
      },
    ],
  },
  {
    id: 'horizon',
    no: '02',
    title: 'The horizon',
    quote: 'A line you walk toward, and never quite reach.',
    text:
      'The mountains keep their distance. Between you and them lies a sea of violet sand, folded by a wind no one has heard. Every ridge reveals another. The horizon is not a destination. It is a direction.',
    figures: [
      {
        src: '/media/horizon.jpg', w: 2400, h: 400,
        alt: 'A wide panorama of dark mountains against a faint pink glow on the horizon.',
        caption: 'Fig. 02 — The eastern range, 38 km',
      },
    ],
  },
  {
    id: 'unknown',
    no: '03',
    title: 'The unknown',
    text:
      'Past the last ridge, the maps stop agreeing. Dunes redraw themselves overnight; footprints rarely survive until morning. Whatever you came here looking for, this is where it starts looking back.',
    figures: [
      {
        src: '/media/dunes.jpg', w: 1200, h: 900,
        alt: 'The sharp crest of a dune sweeping across the frame, mountains faint behind it.',
        caption: 'Fig. 03 — Leeward slope',
      },
      {
        src: '/media/peak.jpg', w: 900, h: 1100,
        alt: 'A single mountain massif rising above rippled sand under a purple sky.',
        caption: 'Fig. 03b — Summit, unnamed',
      },
    ],
  },
];
