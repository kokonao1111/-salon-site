import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/siteConfig";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#171917",
        }}
      >
        <div style={{ display: "flex", width: 64, height: 1, background: "#A48A62" }} />
        <div
          style={{
            display: "flex",
            marginTop: 32,
            fontSize: 40,
            letterSpacing: 10,
            color: "#FCFBF8",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.brand.status === "confirmed"
            ? siteConfig.brand.workingTitleEn
            : siteConfig.brand.pendingLabel}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 20,
            letterSpacing: 4,
            color: "#C9C8C2",
          }}
        >
          三重県志摩市 ・ 完全プライベート・トータルビューティーサロン
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 16,
            letterSpacing: 3,
            color: "#A48A62",
            textTransform: "uppercase",
          }}
        >
          {siteConfig.openingApprox}
        </div>
      </div>
    ),
    { ...size }
  );
}
