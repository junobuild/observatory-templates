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
import { styles } from "../_core/styles";

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
    <Body style={styles.main}>
      <Container style={styles.container}>
        <Section style={styles.logo}>
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

        <Section style={styles.section}>
          <Text style={styles.title}>
            <strong>{cycles} T Cycles</strong> have been deposited on your{" "}
            <strong>{module}</strong>.
          </Text>

          <Text style={styles.text}>
            <strong>Module:</strong> {module} ({name})
          </Text>

          <Text style={styles.text}>
            <strong>Amount:</strong> {cycles} T Cycles
          </Text>

          <Text style={styles.text}>
            <strong>Time:</strong> {timestamp}
          </Text>

          <Button href={url} style={styles.button}>
            View your module
          </Button>

          <Text style={styles.text}>
            or copy and paste this URL into your browser:{" "}
            <Link href={url} rel="noreferrer noopener" style={styles.link}>
              {url}
            </Link>
          </Text>

          <Hr style={styles.hr} />

          <Text style={styles.contact}>
            If you have any questions, please reply to this email to get in
            touch with us.
          </Text>
        </Section>

        <Text style={styles.footer}>
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
