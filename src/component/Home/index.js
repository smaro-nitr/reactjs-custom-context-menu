import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import ContextMenu from '../ContextMenu';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { contextMenuPosition: { x: 0, y: 0 }, contextMenuData: { titles: [], links: [] } }
  }

  onContextMenuClick = (e, contextMenuData) => {
    e.preventDefault();
    const contextMenuPosition = { x: e.pageX, y: e.pageY };
    this.setState({ contextMenuPosition, contextMenuData });
  }

  render() {
    const data = [
      {
        name: 'Social Network',
        details: {
          titles: ['Google', 'Youtube', 'LinkedIn'],
          links: ['https://www.google.com', 'https://www.youtube.com', 'https://www.linkedin.com']
        }
      },
      {
        name: 'Random Link',
        details: {
          titles: ['A', 'B'],
          links: ['https://www.google.com', 'https://www.google.com']
        }
      }
    ]

    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Details',
        accessor: 'details',
        Cell: props => <span onContextMenu={e => { this.onContextMenuClick(e, props.value); }}>{props.value.titles.join(', ')}</span>
      }
    ]

    return (
      <div>
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={10}
        />
        <ContextMenu
          contextMenuPosition={this.state.contextMenuPosition}
          contextMenuData={this.state.contextMenuData}
        />
      </div>
    );
  }
}

export default Home;