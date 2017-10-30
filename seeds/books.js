
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          id: 1,
          book: '1 Nephi',
          total_chapters: 22,
          total_verses: 618,
          key: '1ne'
        },
        {
          id: 2,
          book: '2 Nephi',
          total_chapters: 33,
          total_verses: 779,
          key: '2ne'
        },
        {
          id: 3,
          book: 'Jacob',
          total_chapters: 7,
          total_verses: 203,
          key: 'jac'
        },
        {
          id: 4,
          book: 'Enos',
          total_chapters: 1,
          total_verses: 27,
          key: 'enos'
        },
        {
          id: 5,
          book: 'Jarom',
          total_chapters: 1,
          total_verses: 15,
          key: 'jar'
        },
        {
          id: 6,
          book: 'Omni',
          total_chapters: 1,
          total_verses: 30,
          key: 'omni'
        },
        {
          id: 7,
          book: 'Words of Mormon',
          total_chapters: 22,
          total_verses: 618,
          key: 'wom'
        },
        {
          id: 8,
          book: 'Mosiah',
          total_chapters: 29,
          total_verses: 785,h
          key: 'mos'
        },
        {
          id: 9,
          book: 'Alma',
          total_chapters: 63,
          total_verses: 1975,
          key: 'alma'
        },
        {
          id: 10,
          book: 'Helaman',
          total_chapters: 16,
          total_verses: 497,
          key: 'hel'
        },
        {
          id: 11,
          book: '3 Nephi',
          total_chapters: 30,
          total_verses: 785,
          key: '3ne'
        },
        {
          id: 12,
          book: '4 Nephi',
          total_chapters: 1,
          total_verses: 49,
          key: '4ne'
        },
        {
          id: 13,
          book: 'Mormon',
          total_chapters: 9,
          total_verses: 227,
          key: 'morm'
        },
        {
          id: 14,
          book: 'Ether',
          total_chapters: 15,
          total_verses: 433,
          key: 'eth'
        },
        {
          id: 15,
          book: 'Moroni',
          total_chapters: 10,
          total_verses: 163,
          key: 'moro'
        }
      ]);
    });
};
