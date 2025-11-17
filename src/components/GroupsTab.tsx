import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

export default function GroupsTab() {
  const groups = [
    {
      id: "1",
      name: "Команда разработки",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=team",
      lastMessage: "Алексей: Презентация готова!",
      time: "14:30",
      unread: 3,
      members: 12,
    },
    {
      id: "2",
      name: "Семейный чат",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=family",
      lastMessage: "Мама: Когда приедете?",
      time: "12:15",
      unread: 0,
      members: 5,
    },
    {
      id: "3",
      name: "Друзья",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=friends",
      lastMessage: "Игорь: Встречаемся в 18:00",
      time: "11:45",
      unread: 7,
      members: 8,
    },
    {
      id: "4",
      name: "Путешествия 2024",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=travel",
      lastMessage: "Вы: Отличное место!",
      time: "Вчера",
      unread: 0,
      members: 15,
    },
    {
      id: "5",
      name: "Учеба",
      avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=study",
      lastMessage: "Елена: Ссылка на лекцию",
      time: "Вчера",
      unread: 2,
      members: 25,
    },
  ];

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Группы</h1>
          <Button size="icon" variant="ghost">
            <Icon name="Plus" size={24} />
          </Button>
        </div>
        <div className="relative">
          <Icon
            name="Search"
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Поиск групп..."
            className="pl-10"
          />
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="divide-y">
          {groups.map((group) => (
            <div
              key={group.id}
              className="flex items-center gap-3 p-4 hover:bg-muted/50 cursor-pointer transition-colors"
            >
              <Avatar className="h-14 w-14">
                <AvatarImage src={group.avatar} />
                <AvatarFallback>{group.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold truncate">{group.name}</h3>
                  <span className="text-xs text-muted-foreground">{group.time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground truncate">
                    {group.lastMessage}
                  </p>
                  {group.unread > 0 && (
                    <div className="bg-primary text-primary-foreground text-xs rounded-full h-5 min-w-5 px-1.5 flex items-center justify-center ml-2">
                      {group.unread}
                    </div>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                  <Icon name="Users" size={12} />
                  {group.members} участников
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
