import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface NewsItem {
  title: string;
  description: string;
  source: string;
  time: string;
}

export default function NewsTab() {
  const [topic, setTopic] = useState("технологии и ИИ");
  const [count, setCount] = useState(5);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch(
        `https://functions.poehali.dev/35f4ee22-36d7-410f-b4ea-429edd03aa78?topic=${encodeURIComponent(topic)}&count=${count}`
      );
      
      if (!response.ok) {
        throw new Error("Не удалось получить новости");
      }
      
      const data = await response.json();
      
      if (data.success && data.news) {
        setNews(data.news);
      } else {
        setError("Не удалось получить новости");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ошибка при загрузке новостей");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-background">
      <div className="border-b p-4">
        <h1 className="text-2xl font-bold mb-4">📰 Новости от ИИ</h1>
        
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium mb-1 block">Тема новостей</label>
            <Input
              placeholder="Например: технологии, спорт, экономика..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="text-sm font-medium mb-1 block">Количество</label>
              <Input
                type="number"
                min="1"
                max="10"
                value={count}
                onChange={(e) => setCount(parseInt(e.target.value) || 5)}
              />
            </div>
            
            <div className="flex items-end">
              <Button 
                onClick={fetchNews} 
                disabled={loading || !topic.trim()}
                className="gap-2"
              >
                {loading ? (
                  <>
                    <Icon name="Loader2" size={18} className="animate-spin" />
                    Загрузка...
                  </>
                ) : (
                  <>
                    <Icon name="Sparkles" size={18} />
                    Собрать новости
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
        
        {error && (
          <div className="mt-3 p-3 bg-destructive/10 text-destructive rounded-lg text-sm flex items-start gap-2">
            <Icon name="AlertCircle" size={16} className="mt-0.5" />
            <span>{error}</span>
          </div>
        )}
      </div>

      <ScrollArea className="flex-1 p-4">
        {news.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4 opacity-60">
            <Icon name="Newspaper" size={64} className="opacity-30" />
            <div>
              <h3 className="text-lg font-semibold mb-1">Нет новостей</h3>
              <p className="text-sm text-muted-foreground">
                Выберите тему и нажмите "Собрать новости"
              </p>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {news.map((item, index) => (
            <div
              key={index}
              className={cn(
                "p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors",
                "space-y-2"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-lg flex-1">{item.title}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
                <Icon name="Radio" size={12} />
                <span>{item.source}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
