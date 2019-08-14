import React from 'react';
import { Route } from "react-router-dom";
import CollectionOverview from '../../components/collectionOverview/collectionOverview.component';
import CategoryPage from '../category/category.component';

const ShopPage = ({  match }) => {
  return (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CategoryPage} />
</div>
)
}

export default ShopPage;