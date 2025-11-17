import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";

export default function Index() {
  const [selectedChatId, setSelectedChatId] = useState<string>();

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-background">
      <ChatSidebar
        onSelectChat={setSelectedChatId}
        selectedChatId={selectedChatId}
      />
      <ChatWindow chatId={selectedChatId} />
    </div>
  );
}
