const main = {
  backgroundColor: "#ffffff",
  color: "#24292e",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
};

const container = {
  maxWidth: "480px",
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  padding: "20px 0",
};

const title = {
  fontSize: "24px",
  lineHeight: 1.25,
  padding: "0 0 10px",
};

const section = {
  padding: "24px",
  border: "solid 1px #dedede",
  borderRadius: "5px",
  textAlign: "center" as const,
};

const text = {
  margin: "0 0 5px 0",
  textAlign: "left" as const,
};

const contact = {
  ...text,
  fontSize: "12px",
};

const hr = {
  margin: "24px 0",
};

const button = {
  fontSize: "14px",
  backgroundColor: "#c9cfff",
  color: "#000",
  lineHeight: 1.5,
  borderRadius: "3px",
  boxShadow: "4px 4px #000",
  border: "2px solid #000",
  padding: "12px 24px",
  margin: "20px auto 30px",
};

const errorButton = {
  ...button,
  backgroundColor: "#ea385f",
  color: "#ffffff",
};

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};

const link = {
  color: "#7888ff",
};

const errorLink = {
  color: "#ea385f",
};

export const styles = {
  main,
  container,
  logo,
  title,
  section,
  text,
  contact,
  hr,
  button,
  errorButton,
  footer,
  link,
  errorLink,
};
