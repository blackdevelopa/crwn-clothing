import React from 'react';
import './collectionItem.styles.scss';
import { connect } from 'react-redux';
import CustomButton from '../customButton/customButton.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem}) => {
  const {imageUrl, price, name } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ 
          backgroundImage: `url(${imageUrl})`
        }} 
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>Add to Cart</CustomButton>      
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);