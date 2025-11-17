import { ScrollArea } from "@/components/ui/scroll-area";
import MessageBubble, { Message } from "./MessageBubble";

interface ChatMessagesProps {
  messages: Message[];
  showReactions: string | null;
  showMenu: string | null;
  reactions: string[];
  onReactionToggle: (messageId: string) => void;
  onMenuToggle: (messageId: string) => void;
  onReaction: (messageId: string, reaction: string) => void;
  onReply: (msg: Message) => void;
  onCopy: (msg: Message) => void;
  onForward: (msg: Message) => void;
  onDelete: (messageId: string) => void;
}

export default function ChatMessages({
  messages,
  showReactions,
  showMenu,
  reactions,
  onReactionToggle,
  onMenuToggle,
  onReaction,
  onReply,
  onCopy,
  onForward,
  onDelete,
}: ChatMessagesProps) {
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

  return (
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
                <MessageBubble
                  key={msg.id}
                  msg={msg}
                  showReactions={showReactions}
                  showMenu={showMenu}
                  reactions={reactions}
                  onReactionToggle={onReactionToggle}
                  onMenuToggle={onMenuToggle}
                  onReaction={onReaction}
                  onReply={onReply}
                  onCopy={onCopy}
                  onForward={onForward}
                  onDelete={onDelete}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}
