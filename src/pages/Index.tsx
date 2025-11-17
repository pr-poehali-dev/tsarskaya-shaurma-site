import { useState } from "react";
import ChatSidebar from "@/components/ChatSidebar";
import ChatWindow from "@/components/ChatWindow";
import GroupsTab from "@/components/GroupsTab";
import FeedTab from "@/components/FeedTab";
import ProfileTab from "@/components/ProfileTab";
import BottomNav from "@/components/BottomNav";
import { cn } from "@/lib/utils";

export default function Index() {
  const [selectedChatId, setSelectedChatId] = useState<string>();
  const [activeTab, setActiveTab] = useState("chats");
  const [showChatList, setShowChatList] = useState(true);

  const handleSelectChat = (chatId: string) => {
    setSelectedChatId(chatId);
    setShowChatList(false);
  };

  const handleBackToList = () => {
    setShowChatList(true);
    setSelectedChatId(undefined);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === "chats") {
      setShowChatList(true);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "chats":
        return (
          <>
            <div className={cn(
              "flex-1 md:w-80 md:flex-none",
              showChatList ? "block" : "hidden md:block"
            )}>
              <ChatSidebar
                onSelectChat={handleSelectChat}
                selectedChatId={selectedChatId}
              />
            </div>
            <div className={cn(
              "flex-1",
              showChatList ? "hidden md:flex" : "flex"
            )}>
              <ChatWindow 
                chatId={selectedChatId} 
                onBack={handleBackToList}
              />
            </div>
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
      <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}