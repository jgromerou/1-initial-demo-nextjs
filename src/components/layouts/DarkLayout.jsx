const styles = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '15px',
  padding: '10px',
  margin: '10px 0 10px 0',
};

function DarkLayout({ children }) {
  return (
    <div style={styles}>
      {/* <h3>Dark Layout</h3> */}
      <div>{children}</div>
    </div>
  );
}

export default DarkLayout;
