import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";
import CallsTab from "@/components/CallsTab";
import ContactsTab from "@/components/ContactsTab";
import SettingsTab from "@/components/SettingsTab";
import BottomNav from "@/components/BottomNav";

export default function Index() {
  const [selectedChatId, setSelectedChatId] = useState<string>();
  const [activeTab, setActiveTab] = useState("chats");

  const renderContent = () => {
    switch (activeTab) {
      case "chats":
        return (
          <>
            <ChatSidebar
              onSelectChat={setSelectedChatId}
              selectedChatId={selectedChatId}
            />
            <ChatWindow chatId={selectedChatId} />
          </>
        );
      case "calls":
        return <CallsTab />;
      case "contacts":
        return <ContactsTab />;
      case "settings":
        return <SettingsTab />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-background">
      <div className="flex-1 flex overflow-hidden">
        {renderContent()}
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}