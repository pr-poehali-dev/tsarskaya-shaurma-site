import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function SettingsTab() {
  const [notifications, setNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [onlineStatus, setOnlineStatus] = useState(true);

  const settingsSections = [
    {
      title: "Аккаунт",
      items: [
        { icon: "User", label: "Профиль", action: () => {} },
        { icon: "Lock", label: "Конфиденциальность", action: () => {} },
        { icon: "Shield", label: "Безопасность", action: () => {} },
      ],
    },
    {
      title: "Настройки чата",
      items: [
        {
          icon: "Bell",
          label: "Уведомления",
          toggle: true,
          value: notifications,
          onChange: setNotifications,
        },
        {
          icon: "Volume2",
          label: "Звуки",
          toggle: true,
          value: soundEnabled,
          onChange: setSoundEnabled,
        },
        { icon: "Image", label: "Фото и видео", action: () => {} },
        { icon: "Database", label: "Хранилище данных", action: () => {} },
      ],
    },
    {
      title: "Общие",
      items: [
        {
          icon: "Eye",
          label: "Показывать статус онлайн",
          toggle: true,
          value: onlineStatus,
          onChange: setOnlineStatus,
        },
        { icon: "Languages", label: "Язык", action: () => {} },
        { icon: "Palette", label: "Тема оформления", action: () => {} },
      ],
    },
    {
      title: "Помощь",
      items: [
        { icon: "HelpCircle", label: "Справка", action: () => {} },
        { icon: "Mail", label: "Связаться с нами", action: () => {} },
        { icon: "FileText", label: "Условия использования", action: () => {} },
      ],
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4">
        <h1 className="text-2xl font-bold">Настройки</h1>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
            <Avatar className="h-16 w-16">
              <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                ВИ
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Ваше Имя</h2>
              <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
            </div>
            <Button size="icon" variant="ghost">
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>

          {settingsSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-muted-foreground mb-2 px-2">
                {section.title}
              </h3>
              <div className="bg-card rounded-lg overflow-hidden border">
                {section.items.map((item, index) => (
                  <div key={item.label}>
                    <button
                      onClick={item.action}
                      className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon name={item.icon} size={20} className="text-primary" />
                      </div>
                      <span className="flex-1 text-left font-medium">
                        {item.label}
                      </span>
                      {item.toggle ? (
                        <Switch
                          checked={item.value}
                          onCheckedChange={item.onChange}
                          onClick={(e) => e.stopPropagation()}
                        />
                      ) : (
                        <Icon name="ChevronRight" size={20} />
                      )}
                    </button>
                    {index < section.items.length - 1 && (
                      <div className="h-px bg-border mx-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="pt-4">
            <Button variant="destructive" className="w-full">
              <Icon name="LogOut" size={20} className="mr-2" />
              Выйти из аккаунта
            </Button>
          </div>

          <div className="text-center text-sm text-muted-foreground pb-4">
            Версия 1.0.0
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
