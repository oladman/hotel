import Styles from "./Checkout.module.css";

export default function PaymentMethodForm() {
  return (
    <div className={Styles["section"]}>
      <h3 className={Styles["section-title"]}>Payment Method</h3>

      <div className={Styles["form-group"]}>
        <label>Cardholder Name*</label>
        <input type="text" placeholder="Enter your full name" />
      </div>

      <div className={Styles["form-group"]}>
        <label>Card Number*</label>
        <input type="text" placeholder="0000 - 0000 - 0000 - 0000" />
      </div>

      <div className={Styles["card-row"]}>
        <div className={Styles["form-group"]}>
          <label>Expiry Date*</label>
          <input type="text" placeholder="MM/YY" />
        </div>
        <div className={Styles["form-group"]}>
          <label>CVV*</label>
          <input type="text" placeholder="000" />
        </div>
      </div>
    </div>
  );
}
