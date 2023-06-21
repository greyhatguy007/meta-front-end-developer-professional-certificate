function DessertsList(props) {
  // Implement the component here.
  const filteredDesserts = desserts.filter((dessert) => dessert.calories <= 500);
  const sortedDesserts = filteredDesserts.sort((a, b) => a.calories - b.calories);

  return (
    <ul>
      {
        sortedDesserts.map(
          (dessert) => `<li>${dessert.name} - ${dessert.calories} cal</li>`
        )
      }
    
    </ul>
  )
}

export default DessertsList;
