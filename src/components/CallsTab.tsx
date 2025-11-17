import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { cn } from "@/lib/utils";

interface Call {
  id: string;
  name: string;
  avatar: string;
  type: "incoming" | "outgoing" | "missed";
  callType: "voice" | "video";
  time: string;
  duration?: string;
}

export default function CallsTab() {
  const calls: Call[] = [
    {
      id: "1",
      name: "Анна Смирнова",
      avatar: "АС",
      type: "incoming",
      callType: "video",
      time: "Сегодня, 14:30",
      duration: "12:34",
    },
    {
      id: "2",
      name: "Иван Петров",
      avatar: "ИП",
      type: "outgoing",
      callType: "voice",
      time: "Сегодня, 10:15",
      duration: "5:21",
    },
    {
      id: "3",
      name: "Мария Козлова",
      avatar: "МК",
      type: "missed",
      callType: "voice",
      time: "Вчера, 18:45",
    },
    {
      id: "4",
      name: "Команда разработки",
      avatar: "КР",
      type: "incoming",
      callType: "video",
      time: "Вчера, 15:20",
      duration: "45:12",
    },
    {
      id: "5",
      name: "Алексей Новиков",
      avatar: "АН",
      type: "outgoing",
      callType: "voice",
      time: "25 ноя, 12:00",
      duration: "3:45",
    },
    {
      id: "6",
      name: "Анна Смирнова",
      avatar: "АС",
      type: "missed",
      callType: "video",
      time: "24 ноя, 09:30",
    },
  ];

  const getCallIcon = (call: Call) => {
    if (call.type === "missed") {
      return <Icon name="PhoneMissed" size={16} className="text-destructive" />;
    }
    if (call.type === "incoming") {
      return <Icon name="PhoneIncoming" size={16} className="text-green-500" />;
    }
    return <Icon name="PhoneOutgoing" size={16} className="text-blue-500" />;
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Звонки</h1>
          <Button size="icon" variant="ghost">
            <Icon name="Plus" size={20} />
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-4 space-y-2">
          {calls.map((call) => (
            <div
              key={call.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {call.avatar}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3
                    className={cn(
                      "font-semibold truncate",
                      call.type === "missed" && "text-destructive"
                    )}
                  >
                    {call.name}
                  </h3>
                  {getCallIcon(call)}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon
                    name={call.callType === "video" ? "Video" : "Phone"}
                    size={14}
                  />
                  <span>{call.time}</span>
                  {call.duration && <span>• {call.duration}</span>}
                </div>
              </div>
              <div className="flex gap-1">
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Icon name="Phone" size={18} />
                </Button>
                <Button size="icon" variant="ghost" className="h-9 w-9">
                  <Icon name="Video" size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
