import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function FeedTab() {
  const [newPost, setNewPost] = useState("");

  const posts = [
    {
      id: "1",
      author: "Анна Смирнова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
      time: "2 часа назад",
      text: "Отличная погода сегодня! Кто хочет погулять? ☀️",
      likes: 12,
      comments: 3,
    },
    {
      id: "2",
      author: "Дмитрий Иванов",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dmitry",
      time: "5 часов назад",
      text: "Нашёл отличное кафе в центре города. Всем рекомендую! 🍕",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      likes: 24,
      comments: 7,
    },
    {
      id: "3",
      author: "Елена Петрова",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
      time: "Вчера",
      text: "Закончила проект! Спасибо всем за поддержку 🎉",
      likes: 45,
      comments: 15,
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4">
        <h1 className="text-2xl font-bold mb-4">Общий чат</h1>
        <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-primary-foreground">Я</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Input
              placeholder="Что нового?"
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="mb-2"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button size="sm" variant="ghost" className="h-8">
                  <Icon name="Image" size={18} />
                </Button>
                <Button size="sm" variant="ghost" className="h-8">
                  <Icon name="Video" size={18} />
                </Button>
                <Button size="sm" variant="ghost" className="h-8">
                  <Icon name="Smile" size={18} />
                </Button>
              </div>
              <Button size="sm" disabled={!newPost.trim()}>
                Опубликовать
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          {posts.map((post) => (
            <div key={post.id} className="bg-card rounded-lg border p-4">
              <div className="flex items-center gap-3 mb-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={post.avatar} />
                  <AvatarFallback>{post.author[0]}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-xs text-muted-foreground">{post.time}</p>
                </div>
                <Button size="icon" variant="ghost" className="h-8 w-8">
                  <Icon name="MoreHorizontal" size={18} />
                </Button>
              </div>

              <p className="mb-3">{post.text}</p>

              {post.image && (
                <img
                  src={post.image}
                  alt="Post"
                  className="w-full rounded-lg mb-3 object-cover max-h-80"
                />
              )}

              <div className="flex items-center gap-4 pt-3 border-t">
                <Button variant="ghost" size="sm" className="gap-2">
                  <Icon name="Heart" size={18} />
                  <span className="text-sm">{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Icon name="MessageCircle" size={18} />
                  <span className="text-sm">{post.comments}</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Icon name="Share2" size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
