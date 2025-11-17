import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    { id: "chats", icon: "MessageCircle", label: "Чаты" },
    { id: "calls", icon: "Phone", label: "Звонки" },
    { id: "contacts", icon: "Users", label: "Контакты" },
    { id: "settings", icon: "Settings", label: "Настройки" },
  ];

  return (
    <div className="border-t bg-background">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant="ghost"
            size="sm"
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex flex-col items-center gap-1 h-auto py-2 px-4",
              activeTab === tab.id && "text-primary"
            )}
          >
            <Icon name={tab.icon} size={24} />
            <span className="text-xs">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
