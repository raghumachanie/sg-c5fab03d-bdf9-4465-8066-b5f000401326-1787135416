import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { authService } from "@/services/authService";
import { getAllNotices, createNotice, updateNotice, deleteNotice } from "@/services/noticeService";
import { getAllInquiries, updateInquiryStatus } from "@/services/admissionService";
import { uploadImage, getAllGalleryImages, deleteImage } from "@/services/galleryService";
import { getAllDonations, updateDonationStatus, deleteDonation } from "@/services/donationService";
import type { Notice } from "@/services/noticeService";
import type { AdmissionInquiry } from "@/services/admissionService";
import type { GalleryImage } from "@/services/galleryService";
import type { Donation } from "@/services/donationService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Bell,
  Users,
  Image as ImageIcon,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Check,
  X,
  Heart,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [inquiries, setInquiries] = useState<AdmissionInquiry[]>([]);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [activeTab, setActiveTab] = useState("notices");

  const [noticeForm, setNoticeForm] = useState({
    title: "",
    content: "",
    priority: "medium" as "urgent" | "high" | "medium" | "low",
  });
  const [editingNotice, setEditingNotice] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageCategory, setImageCategory] = useState("events");

  useEffect(() => {
    async function checkAuthentication() {
      const user = await authService.getCurrentUser();
      if (!user) {
        router.push("/admin/login");
        return;
      }
      await loadData();
      setLoading(false);
    }
    checkAuthentication();
  }, [router]);

  async function loadData() {
    const [noticesData, inquiriesData, imagesData, donationsData] = await Promise.all([
      getAllNotices(),
      getAllInquiries(),
      getAllGalleryImages(),
      getAllDonations(),
    ]);
    setNotices(noticesData);
    setInquiries(inquiriesData);
    setGalleryImages(imagesData);
    setDonations(donationsData);
  }

  async function handleSignOut() {
    await authService.signOut();
    router.push("/admin/login");
  }

  async function handleNoticeSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = editingNotice
      ? await updateNotice(editingNotice, noticeForm)
      : await createNotice(noticeForm.title, noticeForm.content, noticeForm.priority);

    if (result.success) {
      setNoticeForm({ title: "", content: "", priority: "medium" });
      setEditingNotice(null);
      await loadData();
    }
  }

  async function handleDeleteNotice(id: string) {
    if (confirm("Delete this notice?")) {
      await deleteNotice(id);
      await loadData();
    }
  }

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    const result = await uploadImage(file, imageCategory);
    if (result.success) {
      await loadData();
    }
    setUploadingImage(false);
    e.target.value = "";
  }

  async function handleDeleteImage(id: string, imageUrl: string) {
    if (confirm("Delete this image?")) {
      await deleteImage(id, imageUrl);
      await loadData();
    }
  }

  async function handleInquiryStatus(id: string, status: string) {
    await updateInquiryStatus(id, status);
    await loadData();
  }

  async function handleDonationStatus(id: string, status: string) {
    await updateDonationStatus(id, status);
    await loadData();
  }

  async function handleDeleteDonation(id: string) {
    if (confirm("Delete this donation record?")) {
      await deleteDonation(id);
      await loadData();
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="font-display text-2xl font-bold">Admin Dashboard</h1>
        </div>
        <Button onClick={handleSignOut} variant="secondary" size="sm">
          <LogOut className="h-4 w-4 mr-2" />
          Sign Out
        </Button>
      </header>

      <main className="container py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="notices" className="gap-2">
              <Bell className="h-4 w-4" />
              Notices ({notices.length})
            </TabsTrigger>
            <TabsTrigger value="inquiries" className="gap-2">
              <Users className="h-4 w-4" />
              Inquiries ({inquiries.length})
            </TabsTrigger>
            <TabsTrigger value="donations" className="gap-2">
              <Heart className="h-4 w-4" />
              Donations ({donations.length})
            </TabsTrigger>
            <TabsTrigger value="gallery" className="gap-2">
              <ImageIcon className="h-4 w-4" />
              Gallery ({galleryImages.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="notices" className="space-y-6">
            <Card className="p-6">
              <h2 className="font-display text-xl font-semibold mb-4">
                {editingNotice ? "Edit Notice" : "Create New Notice"}
              </h2>
              <form onSubmit={handleNoticeSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    required
                    value={noticeForm.title}
                    onChange={(e) =>
                      setNoticeForm({ ...noticeForm, title: e.target.value })
                    }
                    placeholder="Notice title"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Content</Label>
                  <Textarea
                    id="content"
                    required
                    rows={4}
                    value={noticeForm.content}
                    onChange={(e) =>
                      setNoticeForm({ ...noticeForm, content: e.target.value })
                    }
                    placeholder="Notice details"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="priority">Priority</Label>
                  <Select
                    value={noticeForm.priority}
                    onValueChange={(value) =>
                      setNoticeForm({
                        ...noticeForm,
                        priority: value as "urgent" | "high" | "medium" | "low",
                      })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent">Urgent</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button type="submit">
                    <Plus className="h-4 w-4 mr-2" />
                    {editingNotice ? "Update" : "Create"} Notice
                  </Button>
                  {editingNotice && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setEditingNotice(null);
                        setNoticeForm({ title: "", content: "", priority: "medium" });
                      }}
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </form>
            </Card>

            <div className="space-y-4">
              {notices.map((notice) => (
                <Card key={notice.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-display text-lg font-semibold">
                          {notice.title}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            notice.priority === "urgent"
                              ? "bg-destructive/20 text-destructive"
                              : notice.priority === "high"
                              ? "bg-accent/20 text-accent"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {notice.priority}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{notice.content}</p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(notice.created_at || "").toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setEditingNotice(notice.id);
                          setNoticeForm({
                            title: notice.title,
                            content: notice.content,
                            priority: notice.priority as "urgent" | "high" | "medium" | "low",
                          });
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteNotice(notice.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="inquiries" className="space-y-4">
            {inquiries.length === 0 ? (
              <Alert>
                <AlertDescription>No admission inquiries yet</AlertDescription>
              </Alert>
            ) : (
              inquiries.map((inquiry) => (
                <Card key={inquiry.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-semibold">
                          {inquiry.student_name}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            inquiry.status === "contacted"
                              ? "bg-success/20 text-success"
                              : inquiry.status === "pending"
                              ? "bg-accent/20 text-accent"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {inquiry.status}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>
                          <strong>Parent:</strong> {inquiry.parent_name}
                        </p>
                        <p>
                          <strong>Phone:</strong> {inquiry.phone}
                        </p>
                        {inquiry.email && (
                          <p>
                            <strong>Email:</strong> {inquiry.email}
                          </p>
                        )}
                        <p>
                          <strong>Class:</strong> {inquiry.class_applying}
                        </p>
                        {inquiry.message && (
                          <p className="mt-2">
                            <strong>Message:</strong> {inquiry.message}
                          </p>
                        )}
                        <p className="text-xs mt-2">
                          {new Date(inquiry.created_at || "").toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleInquiryStatus(inquiry.id, "contacted")}
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Contacted
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleInquiryStatus(inquiry.id, "pending")}
                      >
                        <X className="h-4 w-4 mr-1" />
                        Pending
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="donations" className="space-y-4">
            {donations.length === 0 ? (
              <Alert>
                <AlertDescription>No donations yet</AlertDescription>
              </Alert>
            ) : (
              donations.map((donation) => (
                <Card key={donation.id} className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-lg font-semibold">
                          {donation.donor_name}
                        </h3>
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            donation.status === "received"
                              ? "bg-success/20 text-success"
                              : donation.status === "pending"
                              ? "bg-accent/20 text-accent"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {donation.status}
                        </span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <p>
                          <strong>Phone:</strong> {donation.phone}
                        </p>
                        {donation.email && (
                          <p>
                            <strong>Email:</strong> {donation.email}
                          </p>
                        )}
                        {donation.amount && (
                          <p>
                            <strong>Amount:</strong> ₹{donation.amount.toLocaleString()}
                          </p>
                        )}
                        <p>
                          <strong>Purpose:</strong> {donation.purpose}
                        </p>
                        {donation.message && (
                          <p className="mt-2">
                            <strong>Message:</strong> {donation.message}
                          </p>
                        )}
                        <p className="text-xs mt-2">
                          {new Date(donation.created_at || "").toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDonationStatus(donation.id, "received")}
                      >
                        <Check className="h-4 w-4 mr-1" />
                        Received
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDeleteDonation(donation.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="gallery" className="space-y-6">
            <Card className="p-6">
              <h2 className="font-display text-xl font-semibold mb-4">Upload Image</h2>
              <div className="flex gap-4">
                <div className="flex-1">
                  <Label htmlFor="category">Category</Label>
                  <Select value={imageCategory} onValueChange={setImageCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="events">Events</SelectItem>
                      <SelectItem value="classroom">Classroom</SelectItem>
                      <SelectItem value="activities">Activities</SelectItem>
                      <SelectItem value="achievements">Achievements</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <Label htmlFor="image">Image File</Label>
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                  />
                </div>
              </div>
              {uploadingImage && (
                <p className="text-sm text-muted-foreground mt-2">Uploading...</p>
              )}
            </Card>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {galleryImages.map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="relative aspect-square">
                    <img
                      src={image.image_url}
                      alt={image.description || "Gallery"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 space-y-2">
                    <p className="text-xs text-muted-foreground">{image.category}</p>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="w-full"
                      onClick={() => handleDeleteImage(image.id, image.image_url)}
                    >
                      <Trash2 className="h-3 w-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}