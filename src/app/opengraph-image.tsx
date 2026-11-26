import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/config/site";

export const alt = `${SITE_CONFIG.name} — ${SITE_CONFIG.role}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: "36px",
          backgroundColor: "#F4F5F7",
          color: "#1E242B",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#FFFFFF",
            border: "4px solid #1E242B",
            borderRadius: "24px",
            overflow: "hidden",
          }}
        >
          {/* Browser Window Top Bar [o o o] */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 32px",
              backgroundColor: "#E06A4E",
              borderBottom: "4px solid #1E242B",
              color: "#FFFFFF",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "999px",
                  backgroundColor: "#F6CE3E",
                  border: "2px solid #1E242B",
                }}
              />
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "999px",
                  backgroundColor: "#84BA77",
                  border: "2px solid #1E242B",
                }}
              />
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "999px",
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #1E242B",
                }}
              />
              <span style={{ marginLeft: "12px", fontSize: "20px", fontWeight: 800 }}>
                SOC · ZERO TRUST · AI AGENTS · UX DESIGN
              </span>
            </div>

            <div
              style={{
                padding: "6px 16px",
                backgroundColor: "#53B8E2",
                color: "#1E242B",
                border: "2px solid #1E242B",
                borderRadius: "8px",
                fontSize: "18px",
                fontWeight: 800,
              }}
            >
              {"</PORTFOLIO>"}
            </div>
          </div>

          {/* Main Body */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "36px 48px",
              gap: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                padding: "8px 20px",
                backgroundColor: "#F6CE3E",
                border: "3px solid #1E242B",
                borderRadius: "999px",
                fontSize: "20px",
                fontWeight: 800,
              }}
            >
              2º Puesto Internacional · Hackathon Ciberseguridad &amp; IA (ITBA Argentina)
            </div>

            <div
              style={{
                fontSize: "64px",
                fontWeight: 900,
                lineHeight: 1.06,
                color: "#1E242B",
              }}
            >
              {SITE_CONFIG.name}
            </div>

            <div
              style={{
                fontSize: "30px",
                fontWeight: 700,
                color: "#E06A4E",
              }}
            >
              Analista SOC, Desarrollador de Agentes IA &amp; Psicología UX
            </div>

            <div
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#3A434E",
              }}
            >
              UPC · ITBA · Javeriana · 4 Google Dual Certificates · Microsoft SC-900/AZ-900 · EC-Council EHE
            </div>
          </div>

          {/* Footer Bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "18px 48px",
              backgroundColor: "#EAECEF",
              borderTop: "3px solid #1E242B",
              fontSize: "20px",
              fontWeight: 700,
              color: "#1E242B",
            }}
          >
            <div>Lima, Perú · Disponible Remoto / Híbrido</div>
            <div>paulmeza.vercel.app</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
