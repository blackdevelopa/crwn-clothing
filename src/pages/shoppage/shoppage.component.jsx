import React, { Component } from 'react';
import SHOP_DATA from './shopData';
import './shoppage.styles.scss';
import PreviewCollection from '../../components/previewCollection/previewCollection.component';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    const {collections} = this.state;
    return(
      <div className="shop-page">
        {
          collections.map(({id, ...previewProps}) => (
            <PreviewCollection keys={id} {...previewProps}/>
          ))
        }
      </div>
    )
  }
}

export default ShopPage;