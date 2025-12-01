import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "white",
          fontSize: 48,
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.8, marginBottom: 12 }}>
          Software Developer • AI Specialist • QA Engineer
        </div>
        <div style={{ fontWeight: 800, letterSpacing: -1 }}>
          Adilet Masalbekov
        </div>
        <div style={{ fontSize: 22, marginTop: 24, opacity: 0.8 }}>
          Projects • Case Studies • Resume • Contact
        </div>
      </div>
    ),
    { ...size }
  );
}