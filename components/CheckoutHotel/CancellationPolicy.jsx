import Styles from "./Checkout.module.css";

export default function CancellationPolicy() {
  return (
    <div className={Styles["cancellation-policy"]}>
      <p>Cancellation Policy</p>

      <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
        <p style={{ fontWeight:500 }}>Free cancellation before Nov 30.</p>
        <p style={{ fontSize:"13px", color:"#555" }}>
          After that, non-refundable. <span style={{ textDecoration:"underline" }}>Learn More</span>
        </p>
      </div>

      <hr className={Styles["line"]} />

      <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
        <p style={{ fontWeight:500 }}>Ground rules</p>
        <p style={{ fontSize:"13px", color:'#555' }} > We ask every guest to remember a few simple things about what makes a great guest</p>
        <ul style={{ display:'flex', flexDirection:'column', gap:'10px', listStyle:'inherit', marginLeft:'20px' }}>
          <li style={{ fontSize:"13px" }}>
            Follow the house rules

          </li>
          <li style={{ fontSize:"13px"}}> Treat your Host&apos;s home like your own</li>
        </ul>
      </div>
    </div>
  );
}
