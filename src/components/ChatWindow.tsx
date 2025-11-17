import { useState, useRef } from "react";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import ChatInput from "./chat/ChatInput";
import { Message } from "./chat/MessageBubble";

interface ChatWindowProps {
  chatId?: string;
  onBack?: () => void;
}

export default function ChatWindow({ chatId, onBack }: ChatWindowProps) {
  const [message, setMessage] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showReactions, setShowReactions] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState<string | null>(null);
  const [replyingTo, setReplyingTo] = useState<Message | null>(null);
  const [editingMessage, setEditingMessage] = useState<Message | null>(null);
  const [capsLockEnabled, setCapsLockEnabled] = useState(false);
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

    if (editingMessage) {
      setMessages(
        messages.map((msg) =>
          msg.id === editingMessage.id
            ? { ...msg, text: message, isEdited: true }
            : msg
        )
      );
      setMessage("");
      setEditingMessage(null);
      return;
    }

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
      replyTo: replyingTo
        ? {
            id: replyingTo.id,
            text: replyingTo.text || "Голосовое сообщение",
            sender: replyingTo.isOwn ? "Вы" : "Анна Смирнова",
          }
        : undefined,
    };

    setMessages([...messages, newMessage]);
    setMessage("");
    setReplyingTo(null);
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

  const handleReply = (msg: Message) => {
    setReplyingTo(msg);
    setShowMenu(null);
  };

  const handleForward = (msg: Message) => {
    alert(`Переслать сообщение: "${msg.text || msg.fileName || "Голосовое сообщение"}"`);
    setShowMenu(null);
  };

  const handleCopy = (msg: Message) => {
    if (msg.text) {
      navigator.clipboard.writeText(msg.text);
    }
    setShowMenu(null);
  };

  const handleDelete = (messageId: string) => {
    setMessages(messages.filter((m) => m.id !== messageId));
    setShowMenu(null);
  };

  const handleEdit = (msg: Message) => {
    setEditingMessage(msg);
    setMessage(msg.text || "");
    setShowMenu(null);
    setReplyingTo(null);
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
      <ChatHeader onBack={onBack} />
      <ChatMessages
        messages={messages}
        showReactions={showReactions}
        showMenu={showMenu}
        reactions={reactions}
        onReactionToggle={(id) => setShowReactions(showReactions === id ? null : id)}
        onMenuToggle={(id) => setShowMenu(showMenu === id ? null : id)}
        onReaction={handleReaction}
        onReply={handleReply}
        onCopy={handleCopy}
        onForward={handleForward}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
      <ChatInput
        message={message}
        isRecording={isRecording}
        replyingTo={replyingTo}
        editingMessage={editingMessage}
        capsLockEnabled={capsLockEnabled}
        fileInputRef={fileInputRef}
        onMessageChange={(value) => {
          setMessage(capsLockEnabled ? value.toUpperCase() : value);
        }}
        onSend={handleSend}
        onFileUpload={handleFileUpload}
        onVoiceRecord={handleVoiceRecord}
        onKeyPress={handleKeyPress}
        onCancelReply={() => setReplyingTo(null)}
        onCancelEdit={() => {
          setEditingMessage(null);
          setMessage("");
        }}
        onToggleCapsLock={() => setCapsLockEnabled(!capsLockEnabled)}
      />
    </div>
  );
}