import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-foreground/5 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🧸</span>
            <span className="text-lg font-semibold text-primary">Милые Мишки</span>
          </div>
          <p className="text-muted-foreground text-center">
            © 2024 Милые Мишки. Ручная работа с любовью
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Instagram" size={24} />
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="MessageCircle" size={24} />
            </a>
            <a
              href="mailto:mishki@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon name="Mail" size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
