import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function ChatHeader() {
  return (
    <div className="border-b p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-primary text-primary-foreground">
            АС
          </AvatarFallback>
        </Avatar>
        <div>
          <h2 className="font-semibold">Анна Смирнова</h2>
          <p className="text-sm text-green-500">онлайн</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost">
          <Icon name="Phone" size={20} />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon name="Video" size={20} />
        </Button>
        <Button size="icon" variant="ghost">
          <Icon name="MoreVertical" size={20} />
        </Button>
      </div>
    </div>
  );
}
