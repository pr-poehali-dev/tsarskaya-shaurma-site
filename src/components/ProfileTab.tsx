import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";

export default function ProfileTab() {
  return (
    <ScrollArea className="flex-1 h-full">
      <div className="p-6">
        <div className="flex flex-col items-center mb-8">
          <Avatar className="h-24 w-24 mb-4">
            <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Me" />
            <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
              Я
            </AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold mb-1">Иван Петров</h2>
          <p className="text-muted-foreground mb-4">@ivan_petrov</p>
          <Button className="w-full max-w-xs">
            <Icon name="Edit" size={18} className="mr-2" />
            Редактировать профиль
          </Button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Icon name="User" size={20} />
              О себе
            </h3>
            <div className="space-y-3 pl-7">
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground">Телефон</span>
                <span>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground">Email</span>
                <span>ivan@example.com</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-muted-foreground">Город</span>
                <span>Москва</span>
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Icon name="Bell" size={20} />
              Уведомления
            </h3>
            <div className="space-y-4 pl-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Уведомления о сообщениях</p>
                  <p className="text-sm text-muted-foreground">Получать уведомления о новых сообщениях</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Звук уведомлений</p>
                  <p className="text-sm text-muted-foreground">Воспроизводить звук при получении</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Групповые чаты</p>
                  <p className="text-sm text-muted-foreground">Уведомления от групп</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Icon name="Settings" size={20} />
              Настройки
            </h3>
            <div className="space-y-2 pl-7">
              <Button variant="ghost" className="w-full justify-start">
                <Icon name="Lock" size={18} className="mr-3" />
                Приватность и безопасность
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Icon name="Palette" size={18} className="mr-3" />
                Тема оформления
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Icon name="Globe" size={18} className="mr-3" />
                Язык
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Icon name="HelpCircle" size={18} className="mr-3" />
                Помощь и поддержка
              </Button>
            </div>
          </div>

          <div className="border-t pt-6 pb-4">
            <Button variant="ghost" className="w-full text-destructive hover:text-destructive justify-start pl-7">
              <Icon name="LogOut" size={18} className="mr-3" />
              Выйти
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
