import { useEffect, useState } from "react";
import { getLatestNotices } from "@/services/noticeService";
import type { Notice } from "@/services/noticeService";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";

export function LatestNotices() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotices() {
      const data = await getLatestNotices(3);
      setNotices(data);
      setLoading(false);
    }
    fetchNotices();
  }, []);

  if (loading) {
    return (
      <Card className="p-8 bg-white border-2 border-accent/20">
        <p className="text-center text-muted-foreground">Loading notices...</p>
      </Card>
    );
  }

  if (notices.length === 0) {
    return (
      <Card className="p-8 bg-white border-2 border-accent/20">
        <p className="text-center text-muted-foreground">
          Notice board will be updated soon. Check back for important announcements about admissions, holidays, and events.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {notices.map((notice) => (
        <Card key={notice.id} className="p-6 bg-white border-2 border-accent/20 hover:border-accent transition-colors">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Bell className="h-5 w-5 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {notice.title}
                </h3>
                <Badge variant="secondary" className="flex-shrink-0">
                  {notice.category}
                </Badge>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {notice.content}
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                {new Date(notice.created_at).toLocaleDateString("en-IN", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}