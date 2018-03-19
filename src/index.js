require("./style.css");
require("./fonts.css");
require("./icon.css");
require("svg-inline-loader?classPrefix!./ty.svg");

import React from "react";
import ReactDOM from "react-dom";
import Ripples from "react-ripples";
import PropTypes from "prop-types";
var Rating = require("react-rating");

//Render Header
function Header() {
  return (
    <div className="header">
      <div>
        <i className="ty-icon ty-icon-bigbasket" />
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-quality" />Quality
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-ontime" />On time guarantee
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-free-delivery" />Free delivery
      </div>
      <div className="text-center">
        <i className="ty-icon ty-icon-return" />Return policy
      </div>
    </div>
  );
}
ReactDOM.render(<Header />, document.getElementById("header"));
//Render Header

//SuccessIcon Animated
function SuccessIcon() {
  return (
    <div className="Thankyou">
      <div className="success-icon">
        <svg
          id="successAnimation"
          className="animated"
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
        >
          <path
            id="successAnimationResult"
            fill="#D8D8D8"
            d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
          />
          <circle
            id="successAnimationCircle"
            cx="35"
            cy="35"
            r="24"
            stroke="#979797"
            strokeWidth="2"
            strokeLinecap="round"
            fill="transparent"
          />
          <polyline
            id="successAnimationCheck"
            stroke="#979797"
            strokeWidth="2"
            points="23 34 34 43 47 27"
            fill="transparent"
          />
        </svg>
        <p className="text-primary txt-bold fadeIn">
          Yaay.. Your order is placed!
        </p>
      </div>
    </div>
  );
}
//SuccessIcon Animated

//FeedbackForm for Rating
class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Tell us what went wrong."
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Feedback: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="feedback-form" onSubmit={this.handleSubmit}>
        <textarea
          className="form-control"
          placeholder={this.state.value}
          onChange={this.handleChange}
        />
        <div className="clearfix">
          <Ripples className="btn-ripple fl-rt" color="#666">
            <button type="submit" className="btn btn-secondary">
              SUBMIT
            </button>
          </Ripples>
          <Ripples className="btn-ripple fl-rt" color="#dfdfdf">
            <button type="button" className="btn btn-default">
              NOT NOW
            </button>
          </Ripples>
        </div>
      </form>
    );
  }
}
//FeedbackForm for Rating

//Component Refer&Earn
function Referandearn() {
  return (
    <div className="clearfix">
      <Ripples color="green">
        <button className="btn btn-default">Refer & earn</button>
      </Ripples>
    </div>
  );
}
//Component Refer&Earn

function Placeholder() {
  return (
    // <div className="content">
    //   <div className="pannel">
    <div className="timeline-wrapper">
      <div className="timeline-item">
        <div className="animated-background">
          <div className="background-masker header-top" />
          <div className="background-masker header-left" />
          <div className="background-masker header-right" />
          <div className="background-masker header-bottom" />
          <div className="background-masker subheader-left" />
          <div className="background-masker subheader-right" />
          <div className="background-masker subheader-bottom" />
          <div className="background-masker content-top" />
          <div className="background-masker content-first-end" />
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
}
function Placeholder1() {
  return <div className="animated-background1" />;
}

//Star Rating handling
class FeedbackOrderExperience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showfeed: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    if (event <= 3) {
      alert("You have rated less than" + event + "Show feedback");
      this.setState({ showfeed: true });
    } else if (event === 5) {
      alert("You have given" + event + "Star, Show Refer&Earn ");
      this.setState({ showfeed: false });
    }
  }
  render() {
    const showfeed = this.state.showfeed;
    const showdiv = showfeed ? <FeedbackForm /> : <Referandearn />;
    return (
      <div className="clearfix">
        <span className="rating-txt">How was everything?</span>
        <Rating
          {...this.props}
          onChange={this.handleClick}
          initialRating={this.state.value}
        />

        {showdiv}
      </div>
    );
  }
}
//Star Rating handling

//Component Address
function MemberDetails(props) {
  return (
    <div className="pannel-item grid-container2 deliveryinfo">
      <div className="grid-item title">
        <i className="ty-icon ty-icon-location" />Delivery Address
      </div>
      <div className="grid-item address">
        {props.member_details.name}, {props.member_details.address}
      </div>
    </div>
  );
}
MemberDetails.propTypes = {
  member_details: PropTypes.object,
  address: PropTypes.string
};
//Component Address

//Component ShipmentSummary
function ShipmentSummary(props) {
  return (
    <div className="pannel-item grid-container4 shipmentinfo">
      <div className="grid-item shipment fadeIn">
        <i
          className={
            "ty-icon " +
            (props.order.is_express == true
              ? "ty-icon-exp-del"
              : "ty-icon-std-delivery")
          }
        />
        Shipment 1: {props.order.order_type}
      </div>
      <div className="grid-item items">
        <div>{props.order.item_count}</div>
        <div>Items</div>
      </div>
      <div className="grid-item slot">{props.order.slot_time}</div>
      <div className="grid-item price"> Rs {props.order.order_value}</div>
    </div>
  );
}
ShipmentSummary.propTypes = {
  order: PropTypes.object,
  is_express: PropTypes.bool,
  order_type: PropTypes.string,
  item_count: PropTypes.string,
  slot_time: PropTypes.string,
  order_value: PropTypes.string
};
//Component ShipmentSummary

//Component VoucherSummary
function VoucherSummary(props) {
  return (
    <div className="grid-item voucherinfo">
      <span className="text-primary">Voucher Applied</span>
      <div>{props.vouchersummary.voucher_msg}</div>
    </div>
  );
}
VoucherSummary.propTypes = {
  vouchersummary: PropTypes.object,
  voucher_msg: PropTypes.string
};
//Component VoucherSummary

//Component Orderinfo
function PaymentSummary(props) {
  var paymentclass = "";
  var iconclass = "";
  if (props.paymentsummary.payment_status === "Successfull") {
    paymentclass = "text-primary txt-bold";
    iconclass = "";
  } else if (props.paymentsummary.payment_status === "Failed") {
    paymentclass = "text-danger txt-bold";
    iconclass = "ty-icon ty-icon-info-red-lined";
  } else {
    paymentclass = "text-warning txt-bold";
    iconclass = "ty-icon ty-icon-info-orange-lined";
  }

  return (
    <table id="t01">
      <tbody>
        <tr>
          <td>Payment Status : </td>
          <td>
            <span className={paymentclass}>
              {props.paymentsummary.payment_status}
            </span>
            <i className={iconclass} />
          </td>
        </tr>
        <tr>
          <td>Order Amount :</td>
          <td className="txt-bold text-left">
            Rs {props.paymentsummary.order_amount}
          </td>
        </tr>
        <tr>
          <td>You Saved :</td>
          <td className="text-primary text-left">
            Rs {props.paymentsummary.total_savings}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
PaymentSummary.propTypes = {
  paymentsummary: PropTypes.object,
  payment_status: PropTypes.string,
  order_ammount: PropTypes.string,
  total_savings: PropTypes.string
};
//Component Orderinfo

//OrderActions section
function OrderActions(props) {
  const paynow = props.orderactions.shop_more;
  const voucher = props.orderactions.is_voucher_applied;

  const showpaynow = paynow ? (
    <div className="grid-item card">
      <div className="text-blue txt-bold text-medium">
        <i className="ty-icon ty-icon-voucher" />PAY NOW
      </div>
      <p className="text-meduim txt-bold">Pay online for this order</p>
      <p className="text-light">
        Complete order payment for cash-free delivery
      </p>
    </div>
  ) : (
    <div className="hide" />
  );

  const showvoucher = voucher ? (
    <div className="grid-item card">
      <div className="text-blue txt-bold text-medium">
        <i className="ty-icon ty-icon-add-item" />FORGOT VOUCHER?
      </div>
      <p className="text-meduim txt-bold">Add more items to your order </p>
      <p className="text-light">
        Same time delivery with no extra delivery charges!
      </p>
    </div>
  ) : (
    <div className="hide" />
  );

  return (
    <div className="grid-container3">
      {showpaynow}
      {showvoucher}
      <div className="grid-item card">
        <div className="text-blue txt-bold text-medium">
          <i className="ty-icon ty-icon-add-item" />FORGOT ITEM?
        </div>
        <p className="text-meduim txt-bold">Add more items to your order </p>
        <p className="text-light">
          Same time delivery with no extra delivery charges!
        </p>
      </div>
      <div className="grid-item card">
        <div className="text-blue txt-bold text-medium">
          <i className="ty-icon ty-icon-help" />HELP
        </div>
        <p className="text-meduim txt-bold">Need more assistance?</p>
        <p className="text-light">Let us help you for all your queries!</p>
      </div>
    </div>
  );
}
OrderActions.propTypes = {
  orderactions: PropTypes.object,
  shop_more: PropTypes.bool,
  is_voucher_applied: PropTypes.bool
};
//OrderActions section

//Component OrderPlacedWidget
class OrderPlacedWidget extends React.Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      member_details: {},
      orders: [],
      orderDetails: {},
      voucherSummary: {},
      paymentSummary: {},
      orderActions: {}
    };
  }

  componentDidMount() {
    return fetch("http://localhost:3004/db")
      .then(response => response.json())
      .then(response => {
        setTimeout(
          function() {
            this.setState(
              {
                isLoading: false,
                member_details: response.member_details,
                orders: response.orders,
                orderDetails: response.order_details,
                customer_support: response.customer_support,
                voucherSummary: response.order_details,
                paymentSummary: response.order_details,
                orderActions: response.order_details
              },
              function() {}
            );
          }.bind(this),
          3000
        );
      });
  }

  render() {
    let orders = this.state.orders;
    let member_details = this.state.member_details;
    const loader = this.state.isLoading;
    let vouchersummary = this.state.voucherSummary;
    let paymentsummary = this.state.paymentSummary;
    let orderactions = this.state.orderActions;

    const showDelivery = loader ? (
      <Placeholder />
    ) : (
      <MemberDetails member_details={member_details} />
    );
    const showShipment = loader ? (
      <div>
        <div className="mar-top-15" />
        <Placeholder />
        <div className="mar-top-5" />
        <Placeholder />
      </div>
    ) : (
      orders.map(order => (
        <ShipmentSummary key={order.order_id} order={order} />
      ))
    );
    const showpaymentSummary = loader ? (
      <div>
        <Placeholder1 />
        <Placeholder1 />
        <Placeholder1 />
      </div>
    ) : (
      <div className="grid-item paymentinfo">
        <PaymentSummary paymentsummary={paymentsummary} />
      </div>
    );
    const voucherSummary = loader ? (
      <div>
        <Placeholder1 />
        <Placeholder1 />
      </div>
    ) : (
      <VoucherSummary vouchersummary={vouchersummary} />
    );

    return (
      <div className="content">
        <SuccessIcon />
        <FeedbackOrderExperience
          emptySymbol={
            <img className="star" alt="star" src={require("./star-o.svg")} />
          }
          fullSymbol={
            <img className="star" alt="star" src={require("./star.svg")} />
          }
          fractions={2}
        />
        <div className="pannel">
          {showDelivery}
          {showShipment}
          <div className="grid-container2 orderinfo">
            {voucherSummary}
            {showpaymentSummary}
          </div>
        </div>
        <div className="assistance">
          <OrderActions orderactions={orderactions} />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<OrderPlacedWidget />, document.getElementById("root"));
//Component OrderPlacedWidget

// Render Footer
function Footer() {
  return (
    <div className="footer">
      <p className="text-center">
        For Further enquiries: Call: 1860123100 | E-mail:
        customerservice@bigbasket.com
      </p>
    </div>
  );
}
ReactDOM.render(<Footer />, document.getElementById("footer"));
// Render Footer
