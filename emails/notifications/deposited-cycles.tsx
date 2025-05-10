import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface DepositedCyclesEmailProps {
  cycles?: string;
  timestamp?: string;
  module?: string;
  name?: string;
  url?: string;
}

export const DepositedCyclesEmail = ({
  name = "{{name}}",
  timestamp = "{{timestamp}}",
  module = "{{module}}",
  cycles = "{{cycles}}",
  url = "{{url}}",
}: DepositedCyclesEmailProps) => (
  <Html>
    <Head />
    <Preview>
      🚀 {cycles} T Cycles Deposited on Your {module}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logo}>
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 220.39"
            width="120"
            fill="currentColor"
          >
            <g>
              <path d="m238.29,0h220.39v110.19c0,60.82-49.38,110.19-110.19,110.19h0c-60.82,0-110.19-49.38-110.19-110.19V0h0Z"></path>
              <path d="m487.36,214.99h220.39v-104.8c0-60.86-49.34-110.19-110.19-110.19h-110.19s0,214.99,0,214.99Z"></path>
              <rect
                x="725.65"
                y="0"
                width="220.39"
                height="220.39"
                rx="110.19"
                ry="110.19"
              ></rect>
              <path d="m101.31,0c0,55.96-45.36,101.32-101.31,101.32v119.07C121.72,220.39,220.39,121.72,220.39,0h0s-119.07,0-119.07,0Z"></path>
              <circle
                className="cls-1"
                cx="931.86"
                cy="68.14"
                r="68.14"
                fill="#7888ff"
              ></circle>
            </g>
          </svg>
        </Section>

        <Section style={section}>
          <Text style={title}>
            <strong>{cycles} T Cycles</strong> have been deposited on your{" "}
            <strong>{module}</strong>.
          </Text>

          <Text style={text}>
            <strong>Module:</strong> {module} ({name})
          </Text>

          <Text style={text}>
            <strong>Amount:</strong> {cycles} T Cycles
          </Text>

          <Text style={text}>
            <strong>Time:</strong> {timestamp}
          </Text>

          <Button href={url} style={button}>
            View your module
          </Button>

          <Text style={text}>
            or copy and paste this URL into your browser:{" "}
            <Link href={url} rel="noreferrer noopener" style={link}>
              {url}
            </Link>
          </Text>

          <Hr style={hr} />

          <Text style={contact}>
            If you have any questions, please reply to this email to get in
            touch with us.
          </Text>
        </Section>

        <Text style={footer}>
          Juno Build ・ c/o The Hub Zürich Association ・ Sihlquai 131 ・ 8005
          Zürich, CH
        </Text>
      </Container>
    </Body>
  </Html>
);

DepositedCyclesEmail.PreviewProps = {
  cycles: "0.01",
  module: "Satellite",
  name: "Hello",
  timestamp: "September 7, 2022 at 10:58 AM",
  url: "https://console.juno.build/satellite/?s=ucnx3-aqaaa-aaaal-ab3ea-cai",
} as DepositedCyclesEmailProps;

export default DepositedCyclesEmail;

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

const footer = {
  color: "#6a737d",
  fontSize: "12px",
  textAlign: "center" as const,
  marginTop: "60px",
};

const link = {
  color: "#7888ff",
};
