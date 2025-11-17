import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";
import BottomNav from "@/components/BottomNav";

export default function Index() {
  const [selectedChatId, setSelectedChatId] = useState<string>();
  const [activeTab, setActiveTab] = useState("chats");

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      <div className="flex-1 flex overflow-hidden">
        <ChatSidebar
          onSelectChat={setSelectedChatId}
          selectedChatId={selectedChatId}
        />
        <ChatWindow chatId={selectedChatId} />
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}