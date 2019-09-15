const SHOP_DATA = {
  philoscience: {
    id: 1,
    title: "Philosophy of Science",
    routeName: "philoscience",
    items: [
      {
        id: 1,
        name: "Philosophy of Science - The Central Issues",
        imageUrl: "/book-images/philoscience/philoScienceCentral.jpg",
        price: 25
      },
      {
        id: 2,
        name: "Criticism and the Growth of Knowledge",
        imageUrl: "/book-images/philoscience/criticism.jpg",
        price: 18
      },
      {
        id: 3,
        name: "Popper - Conjectures and Refutations",
        imageUrl: "/book-images/philoscience/popper.jpg",
        price: 18
      }
    ]
  },
  oldtestament: {
    id: 2,
    title: "Old Testament",
    routeName: "oldtestament",
    items: [
      {
        id: 1,
        name: "Ancient Israelite Religion",
        imageUrl: "/book-images/oldtestament/ancientisraelitereligion.jpg",
        price: 280
      },
      {
        id: 2,
        name: "Recent Archeological Discoveries and Biblical Research",
        imageUrl: "/book-images/oldtestament/archdiscoveries.jpg",
        price: 220
      }
    ]
  }
};

export default SHOP_DATA;
