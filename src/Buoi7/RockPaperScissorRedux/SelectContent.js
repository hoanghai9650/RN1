import React, {Component} from 'react';
import SelectItem from './SelectItem';
import {connect} from 'react-redux';
 class SelectContent extends Component {
  renderSelectItem = () => {
    return this.props.listSelect.map(selectItem => (
      <SelectItem
        key={selectItem.id}
        selectImage={selectItem.image}
        onPress={() => this.props.onPress(selectItem)}
        selected={selectItem.id === this.props.playerSelectItem}
      />
    ));
  };

  render() {
    return this.renderSelectItem();
  }
}
const mapStateToProps = state =>{
  return {
    listSelect: state.gameReducer.listSelect,
    playerSelectItem: state.gameReducer.playerSelect.id,
  }
}
export default connect(mapStateToProps)(SelectContent);