import ItemList from "./ItemList";

const RestaurantCategory = ( {data, showItems, setShowIndex}) =>{

    const handleClick = () =>{
        //showItems === false ? setShowItems(true) : setShowItems(false);
        //setShowItems(!showItems)
        setShowIndex();
    }
    
    return (
      <div>
        <div className="w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4 cursor-pointer">
          <div className="flex justify-between" onClick={handleClick}>
            <span className="text-lg font-bold">
              {data.title} ({data.itemCards.length})
            </span>
            <span>⬇️</span>
          </div>
          {showItems && <ItemList items={data.itemCards} />}
        </div>
      </div>
    );
}

export default RestaurantCategory