import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  status?: string;
  online?: boolean;
}

export default function ContactsTab() {
  const [search, setSearch] = useState("");

  const contacts: Contact[] = [
    {
      id: "1",
      name: "Алексей Новиков",
      avatar: "АН",
      status: "В сети",
      online: true,
    },
    {
      id: "2",
      name: "Анна Смирнова",
      avatar: "АС",
      status: "Был(а) недавно",
      online: true,
    },
    {
      id: "3",
      name: "Дмитрий Волков",
      avatar: "ДВ",
      status: "Был(а) час назад",
    },
    {
      id: "4",
      name: "Елена Соколова",
      avatar: "ЕС",
      status: "В сети",
      online: true,
    },
    {
      id: "5",
      name: "Иван Петров",
      avatar: "ИП",
      status: "Был(а) 2 часа назад",
    },
    {
      id: "6",
      name: "Команда разработки",
      avatar: "КР",
      status: "В сети",
      online: true,
    },
    {
      id: "7",
      name: "Мария Козлова",
      avatar: "МК",
      status: "Был(а) вчера",
    },
    {
      id: "8",
      name: "Ольга Морозова",
      avatar: "ОМ",
      status: "Был(а) 3 дня назад",
    },
    {
      id: "9",
      name: "Сергей Иванов",
      avatar: "СИ",
      status: "В сети",
      online: true,
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const groupedContacts = filteredContacts.reduce((acc, contact) => {
    const firstLetter = contact.name[0].toUpperCase();
    if (!acc[firstLetter]) acc[firstLetter] = [];
    acc[firstLetter].push(contact);
    return acc;
  }, {} as Record<string, Contact[]>);

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Контакты</h1>
          <Button size="icon" variant="ghost">
            <Icon name="UserPlus" size={20} />
          </Button>
        </div>
        <div className="relative">
          <Icon
            name="Search"
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            placeholder="Поиск контактов..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4">
          {Object.keys(groupedContacts)
            .sort()
            .map((letter) => (
              <div key={letter} className="mb-6">
                <div className="mb-2 px-2 text-sm font-semibold text-muted-foreground">
                  {letter}
                </div>
                <div className="space-y-1">
                  {groupedContacts[letter].map((contact) => (
                    <div
                      key={contact.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors cursor-pointer"
                    >
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">
                            {contact.avatar}
                          </AvatarFallback>
                        </Avatar>
                        {contact.online && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{contact.name}</h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {contact.status}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <Button size="icon" variant="ghost" className="h-9 w-9">
                          <Icon name="MessageCircle" size={18} />
                        </Button>
                        <Button size="icon" variant="ghost" className="h-9 w-9">
                          <Icon name="Phone" size={18} />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </ScrollArea>
    </div>
  );
}
