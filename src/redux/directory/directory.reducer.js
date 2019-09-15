const INITIAL_STATE = {
  sections: [
    {
      title: "Philosophy of Science",
      imageUrl: "/book-images/philoscience/philoScienceCentral.jpg",
      id: 1,
      linkUrl: "shop/philoscience"
    },
    {
      title: "Old Testament",
      imageUrl: "/book-images/oldtestament/ancientisraelitereligion.jpg",
      id: 2,
      linkUrl: "shop/oldtestament"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
