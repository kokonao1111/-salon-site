import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#171917",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 72,
            height: 72,
            borderRadius: "9999px",
            border: "6px solid #A48A62",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
