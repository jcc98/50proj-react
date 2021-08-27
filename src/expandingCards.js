import {useState} from "react";
import "./expandingCards.css"

function ExpandingCards() {

  // tried using queryselectorall as the course did, didn't work
// ended up making a usestate object for all the different items, 
// along with an id to go with it.
// then, use map to render the objects into proper html with jsx,
// on an object click, we set that particular object's ID to the useState ID
// then, we compare the useState ID with the object ID.
// if they match, it means that we've clicked on it, thus it gets the
// "active" class. if it doesn't match, it means that it's not the item(s) 
// we've clicked, and thus we need to only give it the "panel" class 


const [activeItem, setActiveItem] = useState(1)
const [items, setItems] = useState([
  {
    id: 1,
    backgroundImage: "https://images.unsplash.com/photo-1579407364450-481fe19dbfaa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RvY2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    text: "Stonks go brrr"
  },
  { 
    id: 2,
    backgroundImage: "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    text: "Wild Forest"
  },
  {
    id: 3,
    backgroundImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    text: "Sunny Beach"
  },
  {
    id: 4, 
    backgroundImage: "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    text: "City on winter"
  },
  {
    id: 5,
    backgroundImage: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    text: "Mountains on clouds"
  },
  
])


return (
  <div className="App">
    <div className="container">
      {items.map((item) => {
        return (
          <div onClick={() => setActiveItem(item.id)} key={item.id} className={item.id === activeItem ? "panel active" : "panel"} style={{backgroundImage: `url('${item.backgroundImage}')`}}>
            <h3>{item.text}</h3>
          </div>
        )
      })}

      </div>
  </div>
);

    }

export default ExpandingCards