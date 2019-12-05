import React, { Component } from "react";
import { Container } from "react-bootstrap";

import SubTotal from "./components/SubTotal/SubTotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import TaxesFees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";

import "./App.css";

import { connect } from "react-redux";
import { handleChange } from "./actions/promoCodeActions";

/* App is our root component*/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 100,
      pickupSavings: -3.85,
      taxes: 0,
      estimatedTotal: 0,
      disableButtonPromo: false
    };
  }
  componentDidMount = () => {
    this.setState(
      {
        taxes: (this.state.total + this.state.pickupSavings) * 0.0875
      },
      () => {
        this.setState({
          estimatedTotal:
            this.state.total + this.state.pickupSavings + this.state.taxes
        });
      }
    );
  };

  isDisabled = () => {};

  giveDiscountHandler = () => {
    if (this.props.promoCode === "DISCOUNT") {
      this.setState(
        {
          estimatedTotal: this.state.estimatedTotal * 0.9
        },
        () => {
          this.setState({ disableButtonPromo: true });
        }
      );
    }
  };
  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <SubTotal
            price={
              this.state.total.toFixed(2)
              /* toFixed function converts float to arg decimal places */
            }
          />
          <PickupSavings price={this.state.pickupSavings} />
          <TaxesFees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.disableButtonPromo}
            handleChange={this.props.handleChange}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect(mapStateToProps, { handleChange })(App);
