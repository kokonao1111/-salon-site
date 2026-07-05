import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";
import { isConfirmed } from "@/lib/types";
import type { StaffMember } from "@/lib/types";

interface StaffCardProps {
  staff: StaffMember;
}

export function StaffCard({ staff }: StaffCardProps) {
  const photoSpec = isConfirmed(staff.photo) ? staff.photo.value : undefined;

  return (
    <div>
      <PlaceholderImage
        spec={photoSpec ?? placeholderImages.staffPortrait}
        alt={isConfirmed(staff.name) ? `${staff.name.value}のポートレート` : "スタッフポートレート（準備中）"}
        className="w-full"
      />
      <h3 className="mt-5 font-serif-jp text-xl text-ink">
        {isConfirmed(staff.name) ? staff.name.value : "準備中"}
      </h3>
      {isConfirmed(staff.role) && <p className="mt-1 text-sm text-forest/70">{staff.role.value}</p>}
      {isConfirmed(staff.bio) && (
        <p className="mt-3 max-w-md text-sm leading-loose text-forest/80">{staff.bio.value}</p>
      )}
    </div>
  );
}
