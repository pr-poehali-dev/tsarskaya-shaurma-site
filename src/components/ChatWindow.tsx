import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text: string;
  time: string;
  isOwn: boolean;
  status?: "sent" | "delivered" | "read";
}

interface ChatWindowProps {
  chatId?: string;
}

export default function ChatWindow({ chatId }: ChatWindowProps) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Привет! Как дела?",
      time: "10:30",
      isOwn: false,
    },
    {
      id: "2",
      text: "Привет! Всё отлично, спасибо! А у тебя?",
      time: "10:31",
      isOwn: true,
      status: "read",
    },
    {
      id: "3",
      text: "Тоже хорошо! Слушай, хотела спросить про проект",
      time: "10:32",
      isOwn: false,
    },
    {
      id: "4",
      text: "Конечно, спрашивай!",
      time: "10:33",
      isOwn: true,
      status: "read",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      time: new Date().toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      isOwn: true,
      status: "sent",
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!chatId) {
    return (
      <div className="flex-1 flex items-center justify-center bg-muted/20">
        <div className="text-center space-y-4">
          <div className="text-6xl">💬</div>
          <h2 className="text-2xl font-semibold text-muted-foreground">
            Выберите чат
          </h2>
          <p className="text-muted-foreground">
            Выберите существующий чат или начните новый
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-primary text-primary-foreground">
              АС
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold">Анна Смирнова</h2>
            <p className="text-sm text-green-500">онлайн</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost">
            <Icon name="Phone" size={20} />
          </Button>
          <Button size="icon" variant="ghost">
            <Icon name="Video" size={20} />
          </Button>
          <Button size="icon" variant="ghost">
            <Icon name="MoreVertical" size={20} />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn("flex", msg.isOwn ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "max-w-[70%] rounded-2xl px-4 py-2",
                  msg.isOwn
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                <p className="break-words">{msg.text}</p>
                <div
                  className={cn(
                    "flex items-center gap-1 mt-1 text-xs",
                    msg.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                  )}
                >
                  <span>{msg.time}</span>
                  {msg.isOwn && msg.status === "read" && (
                    <Icon name="CheckCheck" size={14} />
                  )}
                  {msg.isOwn && msg.status === "sent" && (
                    <Icon name="Check" size={14} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <Button size="icon" variant="ghost">
            <Icon name="Paperclip" size={20} />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder="Введите сообщение..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-12"
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Icon name="Smile" size={20} />
            </Button>
          </div>
          <Button size="icon" onClick={handleSend}>
            <Icon name="Send" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
