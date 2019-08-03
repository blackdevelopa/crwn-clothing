import React, { Component } from 'react';
import './directory-menu.styles.scss';
import MenuItem from '../menuItem/menu-item.component';

class DirectoryMenu extends Component {
  constructor() {
    super()

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop'
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          id: 4,
          size: 'large',
          linkUrl: 'shop'
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          id: 5,
          size: 'large',
          linkUrl: 'shop'
        }
      ]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({ id, ...sectionProps }) => (
            <MenuItem key={id} {...sectionProps}/>
          ))
        }
      </div>
    )
  }
}

export default DirectoryMenu;