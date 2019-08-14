import React from 'react';
import './directory-menu.styles.scss';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import MenuItem from '../menuItem/menu-item.component';

const DirectoryMenu = ({ sections }) => (
  <div className="directory-menu">
    {
      sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps}/>
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu);