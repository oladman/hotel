import Styles from "./Checkout.module.css";

export default function GuestInfoForm() {
  return (
    <div className={Styles["section"]}>
      <h3 className={Styles["section-title"]}>Who&apos;s checking in?</h3>

      <div className={Styles["form-group"]}>
        <label>First Name*</label>
        <input type="text" placeholder="Enter your first name" />
      </div>

      <div className={Styles["form-group"]}>
        <label>Last Name*</label>
        <input type="text" placeholder="Enter your last name" />
      </div>

      <div className={Styles["form-group"]}>
        <label>Email*</label>
        <input type="email" placeholder="Enter your email" />
      </div>

      <div className={Styles["form-group"]}>
        <label>Mobile Number</label>
        <div className={Styles["mobile-row"]}>
          <select>
            <option value="+1">+1</option>
            <option value="+62">+62</option>
            <option value="+44">+44</option>
            <option value="+234">+234</option>
          </select>
          <input type="text" placeholder="123456789" />
        </div>
      </div>

      <div className={Styles["checkbox-group"]}>
        <input type="checkbox" id="alerts" />
        <label htmlFor="alerts">Receive text alerts about this trip</label>
      </div>
    </div>
  );
}
