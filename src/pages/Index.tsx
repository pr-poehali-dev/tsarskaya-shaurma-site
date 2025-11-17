import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";
import GroupsTab from "@/components/GroupsTab";
import FeedTab from "@/components/FeedTab";
import ProfileTab from "@/components/ProfileTab";
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
      case "groups":
        return <GroupsTab />;
      case "feed":
        return <FeedTab />;
      case "profile":
        return <ProfileTab />;
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