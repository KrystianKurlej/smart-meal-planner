import { Card, CardHeader, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { ChefHat, Clock3, Star } from "lucide-react";

export default function Home() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>
          Gyros w picie
        </CardTitle>
        <CardDescription>
          Zapnijcie pasy, ponieważ będzie nie tylko smacznie, ale też międzynarodowo!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-sm text-center">
          <div className="flex flex-col items-center">
            <Star className="mb-1"/>
            <span className="block">4,5/5</span>
          </div>
          <div className="flex flex-col items-center">
            <ChefHat className="mb-1"/>
            <span className="block">Łatwe</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock3 className="mb-1"/>
            <span className="block">30 min</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
