import React from "react";
import "./collectionOverview.style.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop.selector";
import PreviewCollection from "../previewCollection/previewCollection.component";

const CollectionOverview = ({ collections }) => {  
  return (
  <div className="collections-overview">
    {
      collections.map(({id, ...previewProps}) => (
        <PreviewCollection key={id} {...previewProps}/>
      ))
    }
  </div>
)
  };

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview);