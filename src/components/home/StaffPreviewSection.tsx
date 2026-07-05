import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { StaffCard } from "@/components/staff/StaffCard";
import { staffMembers } from "@/lib/staff";
import { pageReadiness } from "@/lib/pageReadiness";
import { isConfirmed } from "@/lib/types";

/** live専用：スタッフ情報が確定した後にのみ表示する。 */
export function StaffPreviewSection() {
  if (!pageReadiness.staff) return null;

  const confirmed = staffMembers.filter((s) => isConfirmed(s.name));

  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container>
        <p className="font-serif-en text-xs tracking-[0.1em] text-forest/55 uppercase">Staff</p>
        <div className="mt-6 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {confirmed.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
        <LinkButton href="/staff" variant="ghost" className="mt-8">
          スタッフ紹介
        </LinkButton>
      </Container>
    </section>
  );
}
