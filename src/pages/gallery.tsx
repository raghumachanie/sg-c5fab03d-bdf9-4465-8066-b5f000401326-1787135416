import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";
import { getAllGalleryImages, getGalleryImagesByCategory } from "@/services/galleryService";
import type { GalleryImage } from "@/services/galleryService";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";

const categories = ["all", "events", "classroom", "activities", "achievements"];

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      const data =
        activeCategory === "all"
          ? await getAllGalleryImages()
          : await getGalleryImagesByCategory(activeCategory);
      setImages(data);
      setLoading(false);
    }
    fetchImages();
  }, [activeCategory]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              School Gallery
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Moments from our school life, events, and achievements
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  variant={activeCategory === cat ? "default" : "outline"}
                  className="capitalize"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading gallery...</p>
              </div>
            ) : images.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-muted-foreground text-lg">
                  No images in this category yet. Check back soon!
                </p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {images.map((image) => (
                  <Card
                    key={image.id}
                    className="overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={image.image_url}
                        alt={image.caption || "School gallery image"}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    </div>
                    {image.caption && (
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">
                          {image.caption}
                        </p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}