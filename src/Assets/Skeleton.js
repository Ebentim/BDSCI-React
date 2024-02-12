import "../App.css";
export default function ProfileSkeleton() {
  const styles = {
    container: {
      margin: "10px",
      padding: "20px, 25px",
    },
    profileSkeleton: {
      height: "40px",
      width: "40px",
      border: "none",
      borderRadius: "50%",
      background:
        "linear-gradient(to right, #f2f2f2, #e6e6e6)",
      animation: "skeletonMotion 3s infinite ease-in-out",

      margin: "0 0 10px 0",
      overflow: "hidden",
    },
    firstnameSkeleton: {
      height: "20px",
      width: "100px",
      background:
        "linear-gradient(to right, #f2f2f2, #e6e6e6)",
      margin: "0 0 10px 0",
      overflow: "hidden",
      animation: "skeletonMotion 1s infinite ease-in-out",
    },
    emailSkeleton: {
      height: "20px",
      width: "200px",
      background:
        "linear-gradient(to right, #f2f2f2, #e6e6e6)",
      margin: "0 0 10px 0",
      overflow: "hidden",
      animation: "skeletonMotion 1s infinite ease-in-out",
    },
    addressSkeleton: {
      height: "20px",
      width: "300px",
      background:
        "linear-gradient(to right, #f2f2f2, #e6e6e6)",
      margin: "0 0 10px 0",
      overflow: "hidden",
      animation: "skeletonMotion 1s infinite ease-in-out",
    },
    othersSkeleton: {
      height: "20px",
      width: "50px",
      background:
        "linear-gradient(to right, #f2f2f2, #e6e6e6)",
      margin: "0 0 10px 0",
      overflow: "hidden",
      animation: "skeletonMotion 1s infinite ease-in-out",
    },
  };
  return (
    <div style={styles.container}>
      <div className="profile-skeleton" style={styles.profileSkeleton}></div>
      <div
        className="firstname-skeleton"
        style={styles.firstnameSkeleton}
      ></div>
      <div className="lastname-skeleton" style={styles.firstnameSkeleton}></div>
      <div className="email-skeleton" style={styles.emailSkeleton}></div>
      <div className="address-skeleton" style={styles.addressSkeleton}></div>
      <div className="birthday-skeleton" style={styles.othersSkeleton}></div>
      <div className="city-skeleton" style={styles.firstnameSkeleton}></div>
      <div className="state-skeleton" style={styles.othersSkeleton}></div>
      <div className="zip-skeleton" style={styles.othersSkeleton}></div>
    </div>
  );
}
