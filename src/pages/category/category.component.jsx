import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collectionItem/collectionItem.components";
import { selectShopCollection } from "../../redux/shop/shop.selector";
import "./category.styles.scss";

const CategoryPage = ({ collection }) => {
  const { title, items} = collection;  
  return (
  <div className="collection-page">
    <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem className="collection-item" key={item.id} item={item} />
        ))}
      </div>
  </div>
)
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectShopCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CategoryPage);