import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export interface Message {
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
  audioUrl?: string;
  reactions?: string[];
  replyTo?: {
    id: string;
    text: string;
    sender: string;
  };
  isEdited?: boolean;
}

interface MessageBubbleProps {
  msg: Message;
  showReactions: string | null;
  showMenu: string | null;
  reactions: string[];
  playingVoice: string | null;
  onReactionToggle: (messageId: string) => void;
  onMenuToggle: (messageId: string) => void;
  onReaction: (messageId: string, reaction: string) => void;
  onReply: (msg: Message) => void;
  onCopy: (msg: Message) => void;
  onForward: (msg: Message) => void;
  onDelete: (messageId: string) => void;
  onEdit: (msg: Message) => void;
  onPlayVoice: (messageId: string) => void;
}

export default function MessageBubble({
  msg,
  showReactions,
  showMenu,
  reactions,
  playingVoice,
  onReactionToggle,
  onMenuToggle,
  onReaction,
  onReply,
  onCopy,
  onForward,
  onDelete,
  onEdit,
  onPlayVoice,
}: MessageBubbleProps) {
  return (
    <div
      className={cn("flex group", msg.isOwn ? "justify-end" : "justify-start")}
    >
      <div className="relative">
        <Button
          size="icon"
          variant="ghost"
          className="opacity-0 group-hover:opacity-100 absolute -left-10 top-1/2 -translate-y-1/2 h-8 w-8"
          onClick={() => onMenuToggle(msg.id)}
        >
          <Icon name="MoreVertical" size={16} />
        </Button>

        <div
          className={cn(
            "max-w-[70%] rounded-2xl px-4 py-2 cursor-pointer",
            msg.isOwn
              ? "bg-primary text-primary-foreground"
              : "bg-muted"
          )}
          onClick={() => onReactionToggle(msg.id)}
        >
          {msg.replyTo && (
            <div
              className={cn(
                "mb-2 pb-2 border-l-2 pl-2 text-xs opacity-80",
                msg.isOwn ? "border-primary-foreground/30" : "border-foreground/30"
              )}
            >
              <div className="font-semibold">{msg.replyTo.sender}</div>
              <div className="truncate">{msg.replyTo.text}</div>
            </div>
          )}

          {msg.type === "text" && <p className="break-words">{msg.text}</p>}

          {msg.type === "voice" && (
            <div className="flex items-center gap-3 min-w-[200px]">
              <Button
                size="icon"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  onPlayVoice(msg.id);
                }}
                className={cn(
                  "h-8 w-8 rounded-full",
                  msg.isOwn
                    ? "hover:bg-primary-foreground/20"
                    : "hover:bg-foreground/10"
                )}
              >
                <Icon name={playingVoice === msg.id ? "Pause" : "Play"} size={16} />
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
            {msg.isEdited && <span className="opacity-70">· изменено</span>}
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
                  onReaction(msg.id, reaction);
                }}
                className="text-xl hover:scale-125 transition-transform"
              >
                {reaction}
              </button>
            ))}
          </div>
        )}

        {showMenu === msg.id && (
          <div
            className={cn(
              "absolute top-0 bg-background border rounded-lg shadow-lg py-1 z-20 min-w-[150px]",
              msg.isOwn ? "right-full mr-2" : "left-full ml-2"
            )}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => onReply(msg)}
              className="w-full px-4 py-2 text-sm text-left hover:bg-muted flex items-center gap-2"
            >
              <Icon name="Reply" size={16} />
              Ответить
            </button>
            {msg.isOwn && msg.type === "text" && (
              <button
                onClick={() => onEdit(msg)}
                className="w-full px-4 py-2 text-sm text-left hover:bg-muted flex items-center gap-2"
              >
                <Icon name="Edit" size={16} />
                Редактировать
              </button>
            )}
            {msg.text && (
              <button
                onClick={() => onCopy(msg)}
                className="w-full px-4 py-2 text-sm text-left hover:bg-muted flex items-center gap-2"
              >
                <Icon name="Copy" size={16} />
                Копировать
              </button>
            )}
            <button
              onClick={() => onForward(msg)}
              className="w-full px-4 py-2 text-sm text-left hover:bg-muted flex items-center gap-2"
            >
              <Icon name="Forward" size={16} />
              Переслать
            </button>
            <button
              onClick={() => onDelete(msg.id)}
              className="w-full px-4 py-2 text-sm text-left hover:bg-muted flex items-center gap-2 text-destructive"
            >
              <Icon name="Trash2" size={16} />
              Удалить
            </button>
          </div>
        )}
      </div>
    </div>
  );
}