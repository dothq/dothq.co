import React from "react";
import Modal from "react-responsive-modal";
import { Title } from "./../../pages/styles";

export default class ModalBox extends React.Component {
  public props = {
    open: false,
    onClose: function() {},
    children: []
  };

  constructor(props) {
    super(props);
  }

  onCloseModal = () => {
    this.props.onClose();
    this.forceUpdate();
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        <Modal
          open={this.props.open}
          onClose={() => this.onCloseModal()}
          center
        >
          {children}
        </Modal>
      </div>
    );
  }
}
