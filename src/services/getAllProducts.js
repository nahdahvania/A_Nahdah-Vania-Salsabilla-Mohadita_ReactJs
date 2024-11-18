export default function getAllProducts() {
  return [
    {
      id: 'BOOK-001',
      slug: 'heidi',
      name: "Heidi",
      category: 'Fiction',
      categorySlug: 'fiction',
      price: 90_000,
      stock: 100,
      imageUrl: '/assets/images/heidii.jpg',
      description: `Heidi is a classic novel by Johanna Spyri about an orphaned girl who finds joy, family warmth, and a deep connection to nature while living in the Swiss Alps.`
    },
    {
      id: 'BOOK-002',
      slug: 'laskar-pelangi',
      name: "Laskar Pelangi",
      category: 'Fiction',
      categorySlug: 'fiction',
      price: 85_000,
      stock: 0,
      imageUrl: `/assets/images/laskar.jpg`,
      description: `Laskar Pelangi by Andrea Hirata is an inspiring novel about a group of village children in Indonesia who overcome poverty and challenges to pursue their dreams through education and friendship.`
    },
    {
      id: 'BOOK-003',
      slug: 'laut-bercerita',
      name: "Laut Bercerita",
      category: 'Fiction',
      categorySlug: 'fiction',
      price: 90_000,
      stock: 10,
      imageUrl: `/assets/images/lautt.png`,
      description: `Laut Bercerita by Leila S. Chudori is a poignant novel that portrays the struggles of Indonesian activists during the New Order era, blending themes of resistance, loss, and the enduring power of memory.`
    },
    {
      id: 'BOOK-004',
      slug: 'rudy',
      name: "Rudy",
      category: 'Non Fiction',
      categorySlug: 'non-fiction',
      price: 90_000,
      stock: 100,
      imageUrl: `/assets/images/rudy.jpg`,
      description: `Rudy by Gina S. Noer is a biographical novel that delves into the early life of B.J. Habibie, highlighting his journey of passion, perseverance, and the transformative power of dreams.`
    },
    {
      id: 'BOOK-005',
      slug: 'si-anak-kuat',
      name: "Si Anak Kuat",
      category: 'Fiction',
      categorySlug: 'fiction',
      price: 85_000,
      stock: 3,
      imageUrl: `/assets/images/anakkuat.jpg`,
      description: `Si Anak Kuat by Tere Liye tells the story of a determined young girl who faces life's hardships with unwavering strength and resilience.`
    },
    {
      id: 'BOOK-006',
      slug: 'sherlock',
      name: "The Adventures of Sherlock Holmes",
      category: 'Fiction',
      categorySlug: 'fiction',
      price: 200_000,
      stock: 100,
      imageUrl: `/assets/images/sherlock.jpg`,
      description: `The Adventures of Sherlock Holmes is a collection of thrilling detective stories by Arthur Conan Doyle, featuring the brilliant and enigmatic Sherlock Holmes solving complex mysteries.`
    },
    {
      id: 'BOOK-007',
      slug: 'soekarno',
      name: "Soekarno",
      category: 'Non Fiction',
      categorySlug: 'non-fiction',
      price: 100_000,
      stock: 50,
      imageUrl: `/assets/images/soekarno.jpeg`,
      description: `Soekarno by Adji Nugroho delves into the life and struggles of Indonesia's first president, exploring his vision, leadership, and enduring legacy.`
    },
    {
      id: 'BOOK-008',
      slug: 'barbara-cartland',
      name: "A Rainbow To Heaven",
      category: 'Fiction',
      categorySlug: 'fiction',
      price: 90_000,
      stock: 100,
      imageUrl: `/assets/images/rainbow.jpg`,
      description: `A Rainbow to Heaven by Barbara Cartland is a romantic tale of love, sacrifice, and hope, set against the backdrop of challenging societal expectations.`
    },
  ]
}