import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";
import { isLiveStage } from "@/lib/siteStage";

/**
 * BeautySalon の構造化データ。
 * 正式な店舗名・電話番号・本番URLが確定し、SITE_STAGE=live になるまでは、
 * 架空情報を JSON-LD に含めないため何も出力しない（Google に誤情報を渡さないことを優先する）。
 */
export function StructuredData() {
  if (!isLiveStage) return null;
  if (siteConfig.brand.status !== "confirmed") return null;
  if (!siteConfig.siteUrl) return null;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.brand.workingTitleJa,
    url: siteConfig.siteUrl,
    address: {
      "@type": "PostalAddress",
      postalCode: siteConfig.address.postalCode,
      addressRegion: "三重県",
      addressLocality: "志摩市",
      streetAddress: siteConfig.address.line,
      addressCountry: "JP",
    },
  };

  if (isConfirmed(siteConfig.contact.phone)) {
    data.telephone = siteConfig.contact.phone.value;
  }
  if (isConfirmed(siteConfig.businessHours)) {
    data.openingHours = siteConfig.businessHours.value;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
