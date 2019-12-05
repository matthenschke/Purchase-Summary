import React, { Component } from "react";
import { Button, Collapse, Card, Media, Row, Col } from "react-bootstrap";

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  render() {
    return (
      <div>
        {/* Button */}
        <Button
          className="item-details-btn"
          variant="link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See` : `Hide `} item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Card>
              <Media>
                <img
                  width={100}
                  height={100}
                  src="https://i5.walmartimages.com/asr/94b08e92-523e-483a-9fa0-4773e929b20d_1.f78964cbd56d30488837b616115a9d8a.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff"
                />
                <Media.Body>
                  <p>Choice of Xbox One S and BONUS Accessory</p>
                  <Row className="show-grid">
                    <Col md={6}>
                      <strong>{`$${this.props.price}`}</strong>
                      <br />
                      <strong className="price-strike">{`$${this.props.price}`}</strong>
                    </Col>
                    <Col md={6}>Qty : 1</Col>
                  </Row>
                </Media.Body>
              </Media>
            </Card>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemDetails;
