import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "chats", icon: "MessageCircle", label: "Сообщения" },
    { id: "groups", icon: "Users", label: "Группы" },
    { id: "feed", icon: "Home", label: "Общий чат" },
    { id: "profile", icon: "User", label: "Профиль" },
  ];

  return (
    <div className="border-t bg-background">
      <div className="flex items-center justify-around py-3">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            size="sm"
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1 h-auto py-1 px-3 hover:bg-transparent",
              activeTab === tab.id ? "text-foreground" : "text-muted-foreground"
            )}
          >
            <Icon 
              name={tab.icon} 
              size={28}
              className={cn(
                "transition-all",
                activeTab === tab.id && "stroke-[2.5]"
              )}
            />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}