import './categories.styles.scss'

const App = () => {
  const categories = [
    {
      'id' : '1',
      'title': 'hats'
    },
    {
      'id' : '2',
      'title': 'jackets'
    },
    {
      'id' : '3',
      'title': 'sneakers'
    },
    {
      'id' : '4',
      'title': 'womens'
    },
    {
      'id' : '5',
      'title': 'mens'
    }
  ]
  return (
    <div className="catogories-container">
      {categories.map(({title, id})=> (
        <div key= {id} className="category-container">
          {/* {img} */}
          <div className="category-body-container">
            <h1>{title}</h1>
            <p>Show now</p>
          </div>
        </div>
      )
      )}
      
    </div>
  );
}

export default App;
