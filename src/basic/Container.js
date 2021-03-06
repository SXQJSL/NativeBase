import React, { Component } from 'react';
import { View, ViewPropTypes } from 'react-native';

import { connectStyle } from 'native-base-shoutem-theme';
import mapPropsToStyleNames from '../Utils/mapPropsToStyleNames';
import { ToastContainer as Toast } from './ToastContainer';
import { ActionSheetContainer as ActionSheet } from './Actionsheet';
import { Text } from './Text';

class Container extends Component {
  render() {
    return (
      <View ref={c => this._root = c} {...this.props}>
        {this.props.children}
        <Toast ref={(c) => { if (!Toast.toastInstance) Toast.toastInstance = c; }} />
        <ActionSheet ref={(c) => { if (!ActionSheet.actionsheetInstance) ActionSheet.actionsheetInstance = c; }} />
      </View>
    );
  }
}

Container.propTypes = {
  ...ViewPropTypes,
  style: React.PropTypes.object,
};

const StyledContainer = connectStyle('NativeBase.Container', {}, mapPropsToStyleNames)(Container);

export {
  StyledContainer as Container,
};
