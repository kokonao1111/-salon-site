import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** 店舗ロゴ確定前の暫定favicon。特定の頭文字を持たない、中立的な幾何モチーフとする。 */
export default function Icon() {
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
            width: 14,
            height: 14,
            borderRadius: "9999px",
            border: "2px solid #A48A62",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
