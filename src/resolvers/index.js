export default {
  getDataById: async ({ id }, root) => {
    // Get Fake Data by ID
    return {
      id: 1,
      title: 'Title',
      author: 'Author'
    };
  },

  getData: async (params, root) => {
    // Get Fake Data
    let data = [
      {
        id: 1,
        title: 'Title 1',
        author: 'Author 1'
      },
      {
        id: 2,
        title: 'Title 2',
        author: 'Author 2'
      }
    ];
    return data;
  },

  insertData: async ({ input }) => {
    // Insert Fake Data
    return {
      success: true,
      message: 'Yay, you did it'
    };
  }
}
