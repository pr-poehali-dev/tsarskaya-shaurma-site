import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Chat {
  id: string;
  name: string;
  lastMessage: string;
  time: string;
  unread?: number;
  avatar: string;
  online?: boolean;
}

interface ChatSidebarProps {
  onSelectChat: (chatId: string) => void;
  selectedChatId?: string;
}

export default function ChatSidebar({ onSelectChat, selectedChatId }: ChatSidebarProps) {
  const [search, setSearch] = useState("");

  const chats: Chat[] = [
    {
      id: "1",
      name: "Анна Смирнова",
      lastMessage: "Привет! Как дела?",
      time: "10:30",
      unread: 2,
      avatar: "АС",
      online: true,
    },
    {
      id: "2",
      name: "Иван Петров",
      lastMessage: "Спасибо за помощь!",
      time: "09:15",
      avatar: "ИП",
      online: true,
    },
    {
      id: "3",
      name: "Мария Козлова",
      lastMessage: "Увидимся завтра",
      time: "Вчера",
      avatar: "МК",
    },
    {
      id: "4",
      name: "Команда разработки",
      lastMessage: "Новая версия готова",
      time: "Вчера",
      unread: 5,
      avatar: "КР",
    },
    {
      id: "5",
      name: "Алексей Новиков",
      lastMessage: "Отлично!",
      time: "ПН",
      avatar: "АН",
    },
  ];

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-80 border-r bg-background flex flex-col h-full">
      <div className="p-4 border-b space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Чаты</h1>
          <Button size="icon" variant="ghost">
            <Icon name="Plus" size={20} />
          </Button>
        </div>
        <div className="relative">
          <Icon
            name="Search"
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Поиск..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-2">
          {filteredChats.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onSelectChat(chat.id)}
              className={cn(
                "w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors",
                selectedChatId === chat.id && "bg-muted"
              )}
            >
              <div className="relative">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {chat.avatar}
                  </AvatarFallback>
                </Avatar>
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                )}
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold truncate">{chat.name}</span>
                  <span className="text-xs text-muted-foreground">{chat.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground truncate">
                    {chat.lastMessage}
                  </p>
                  {chat.unread && (
                    <span className="ml-2 bg-primary text-primary-foreground text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
