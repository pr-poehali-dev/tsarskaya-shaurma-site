import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { Message } from "./MessageBubble";

interface ChatInputProps {
  message: string;
  isRecording: boolean;
  replyingTo: Message | null;
  capsLockEnabled: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onMessageChange: (value: string) => void;
  onSend: () => void;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onVoiceRecord: () => void;
  onKeyPress: (e: React.KeyboardEvent) => void;
  onCancelReply: () => void;
  onToggleCapsLock: () => void;
}

export default function ChatInput({
  message,
  isRecording,
  replyingTo,
  capsLockEnabled,
  fileInputRef,
  onMessageChange,
  onSend,
  onFileUpload,
  onVoiceRecord,
  onKeyPress,
  onCancelReply,
  onToggleCapsLock,
}: ChatInputProps) {
  return (
    <div className="border-t p-4">
      {replyingTo && (
        <div className="mb-2 p-3 bg-muted rounded-lg flex items-start justify-between">
          <div className="flex-1">
            <div className="text-xs font-semibold text-primary mb-1">
              Ответ для {replyingTo.isOwn ? "себя" : "Анна Смирнова"}
            </div>
            <div className="text-sm truncate">
              {replyingTo.text || replyingTo.fileName || "Голосовое сообщение"}
            </div>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-6 w-6"
            onClick={onCancelReply}
          >
            <Icon name="X" size={16} />
          </Button>
        </div>
      )}
      <div className="flex items-end gap-2">
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          onChange={onFileUpload}
        />
        <Button
          size="icon"
          variant="ghost"
          onClick={() => fileInputRef.current?.click()}
        >
          <Icon name="Paperclip" size={20} />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={onToggleCapsLock}
          className={cn(capsLockEnabled && "bg-primary/10 text-primary")}
          title="Прописные буквы"
        >
          <Icon name="CaseSensitive" size={20} />
        </Button>
        <div className="flex-1 relative">
          <Input
            placeholder={isRecording ? "Идет запись..." : "Введите сообщение..."}
            value={message}
            onChange={(e) => onMessageChange(e.target.value)}
            onKeyPress={onKeyPress}
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
          <Button size="icon" onClick={onSend}>
            <Icon name="Send" size={20} />
          </Button>
        ) : (
          <Button
            size="icon"
            onClick={onVoiceRecord}
            className={cn(isRecording && "bg-destructive hover:bg-destructive/90")}
          >
            <Icon name={isRecording ? "Square" : "Mic"} size={20} />
          </Button>
        )}
      </div>
    </div>
  );
}