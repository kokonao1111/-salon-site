import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] items-center bg-warm-ivory pt-24">
      <Container className="text-center">
        <p className="font-serif-en text-6xl text-gold sm:text-8xl">404</p>
        <h1 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">
          お探しのページが見つかりませんでした
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-loose text-forest/80">
          URLが変更または削除された可能性があります。恐れ入りますが、トップページよりお探しください。
        </p>
        <div className="mt-10 flex justify-center">
          <LinkButton href="/" variant="outline">
            トップページへ戻る
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
