import { useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  text?: string;
  time: string;
  date: string;
  isOwn: boolean;
  status?: "sent" | "delivered" | "read";
  type: "text" | "voice" | "file";
  fileName?: string;
  fileSize?: string;
  duration?: string;
  reactions?: string[];
}

interface ChatWindowProps {
  chatId?: string;
}

export default function ChatWindow({ chatId }: ChatWindowProps) {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showReactions, setShowReactions] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const reactions = ["👍", "❤️", "😂", "😮", "😢", "🔥"];
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Привет! Как дела?",
      time: "10:30",
      date: "2024-11-15",
      isOwn: false,
      type: "text",
      reactions: ["👍"],
    },
    {
      id: "2",
      text: "Привет! Всё отлично, спасибо! А у тебя?",
      time: "10:31",
      date: "2024-11-15",
      isOwn: true,
      status: "read",
      type: "text",
    },
    {
      id: "3",
      text: "Тоже хорошо! Слушай, хотела спросить про проект",
      time: "10:32",
      date: "2024-11-15",
      isOwn: false,
      type: "text",
    },
    {
      id: "4",
      text: "Конечно, спрашивай!",
      time: "10:33",
      date: "2024-11-16",
      isOwn: true,
      status: "read",
      type: "text",
      reactions: ["❤️", "👍"],
    },
    {
      id: "5",
      time: "10:35",
      date: "2024-11-16",
      isOwn: false,
      type: "voice",
      duration: "0:23",
    },
    {
      id: "6",
      time: "10:36",
      date: "2024-11-17",
      isOwn: true,
      status: "read",
      type: "file",
      fileName: "Презентация.pdf",
      fileSize: "2.4 МБ",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const now = new Date();
    const newMessage: Message = {
      id: Date.now().toString(),
      text: message,
      time: now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: now.toISOString().split("T")[0],
      isOwn: true,
      status: "sent",
      type: "text",
    };

    setMessages([...messages, newMessage]);
    setMessage("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const now = new Date();
    const newMessage: Message = {
      id: Date.now().toString(),
      time: now.toLocaleTimeString("ru-RU", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: now.toISOString().split("T")[0],
      isOwn: true,
      status: "sent",
      type: "file",
      fileName: file.name,
      fileSize: (file.size / 1024 / 1024).toFixed(1) + " МБ",
    };

    setMessages([...messages, newMessage]);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleVoiceRecord = () => {
    if (isRecording) {
      setIsRecording(false);
      const now = new Date();
      const newMessage: Message = {
        id: Date.now().toString(),
        time: now.toLocaleTimeString("ru-RU", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        date: now.toISOString().split("T")[0],
        isOwn: true,
        status: "sent",
        type: "voice",
        duration: "0:" + Math.floor(Math.random() * 60).toString().padStart(2, "0"),
      };
      setMessages([...messages, newMessage]);
    } else {
      setIsRecording(true);
    }
  };

  const handleReaction = (messageId: string, reaction: string) => {
    setMessages(
      messages.map((msg) => {
        if (msg.id === messageId) {
          const reactions = msg.reactions || [];
          if (reactions.includes(reaction)) {
            return { ...msg, reactions: reactions.filter((r) => r !== reaction) };
          } else {
            return { ...msg, reactions: [...reactions, reaction] };
          }
        }
        return msg;
      })
    );
    setShowReactions(null);
  };

  const getDateLabel = (date: string) => {
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];

    if (date === today) return "Сегодня";
    if (date === yesterday) return "Вчера";

    const d = new Date(date);
    return d.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
  };

  const groupedMessages = messages.reduce((acc, msg) => {
    if (!acc[msg.date]) acc[msg.date] = [];
    acc[msg.date].push(msg);
    return acc;
  }, {} as Record<string, Message[]>);

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
        <div className="space-y-6">
          {Object.keys(groupedMessages).map((date) => (
            <div key={date}>
              <div className="flex items-center justify-center mb-4">
                <div className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground">
                  {getDateLabel(date)}
                </div>
              </div>
              <div className="space-y-4">
                {groupedMessages[date].map((msg) => (
                  <div
                    key={msg.id}
                    className={cn("flex group", msg.isOwn ? "justify-end" : "justify-start")}
                  >
                    <div className="relative">
                      <div
                        className={cn(
                          "max-w-[70%] rounded-2xl px-4 py-2 cursor-pointer",
                          msg.isOwn
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        )}
                        onClick={() => setShowReactions(showReactions === msg.id ? null : msg.id)}
                      >
                {msg.type === "text" && <p className="break-words">{msg.text}</p>}
                
                {msg.type === "voice" && (
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <Button
                      size="icon"
                      variant="ghost"
                      className={cn(
                        "h-8 w-8 rounded-full",
                        msg.isOwn
                          ? "hover:bg-primary-foreground/20"
                          : "hover:bg-foreground/10"
                      )}
                    >
                      <Icon name="Play" size={16} />
                    </Button>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-foreground/20 rounded-full">
                        <div className="h-full w-1/3 bg-foreground/40 rounded-full" />
                      </div>
                      <span className="text-xs">{msg.duration}</span>
                    </div>
                  </div>
                )}
                
                {msg.type === "file" && (
                  <div className="flex items-center gap-3 min-w-[250px]">
                    <div
                      className={cn(
                        "p-2 rounded-lg",
                        msg.isOwn ? "bg-primary-foreground/20" : "bg-foreground/10"
                      )}
                    >
                      <Icon name="FileText" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{msg.fileName}</p>
                      <p className="text-xs opacity-70">{msg.fileSize}</p>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      className={cn(
                        "h-8 w-8",
                        msg.isOwn
                          ? "hover:bg-primary-foreground/20"
                          : "hover:bg-foreground/10"
                      )}
                    >
                      <Icon name="Download" size={16} />
                    </Button>
                  </div>
                )}
                
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

                      {msg.reactions && msg.reactions.length > 0 && (
                        <div
                          className={cn(
                            "absolute -bottom-2 flex gap-1 bg-background border rounded-full px-2 py-0.5 shadow-sm",
                            msg.isOwn ? "right-2" : "left-2"
                          )}
                        >
                          {msg.reactions.map((reaction, idx) => (
                            <span key={idx} className="text-sm">
                              {reaction}
                            </span>
                          ))}
                        </div>
                      )}

                      {showReactions === msg.id && (
                        <div
                          className={cn(
                            "absolute top-0 bg-background border rounded-full px-3 py-2 shadow-lg flex gap-2 z-10",
                            msg.isOwn ? "right-full mr-2" : "left-full ml-2"
                          )}
                        >
                          {reactions.map((reaction) => (
                            <button
                              key={reaction}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleReaction(msg.id, reaction);
                              }}
                              className="text-xl hover:scale-125 transition-transform"
                            >
                              {reaction}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t p-4">
        <div className="flex items-end gap-2">
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileUpload}
          />
          <Button
            size="icon"
            variant="ghost"
            onClick={() => fileInputRef.current?.click()}
          >
            <Icon name="Paperclip" size={20} />
          </Button>
          <div className="flex-1 relative">
            <Input
              placeholder={isRecording ? "Идет запись..." : "Введите сообщение..."}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pr-12"
              disabled={isRecording}
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1/2 -translate-y-1/2"
            >
              <Icon name="Smile" size={20} />
            </Button>
          </div>
          {message.trim() ? (
            <Button size="icon" onClick={handleSend}>
              <Icon name="Send" size={20} />
            </Button>
          ) : (
            <Button
              size="icon"
              onClick={handleVoiceRecord}
              className={cn(isRecording && "bg-destructive hover:bg-destructive/90")}
            >
              <Icon name={isRecording ? "Square" : "Mic"} size={20} />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}